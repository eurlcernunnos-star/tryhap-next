'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
export default function Moderation(){
  const [subs,setSubs]=useState<any[]>([])
  useEffect(()=>{(async()=>{ const { data } = await supabase.from('submissions').select('*').order('created_at',{ascending:false}); setSubs(data||[]) })()},[])
  async function setStatus(id:number, status:string){ await supabase.from('submissions').update({status}).eq('id',id); location.reload() }
  return (<section className="py-14 sm:py-20 border-b border-slate-200"><div className="max-w-6xl mx-auto px-4"><h2 className="text-3xl sm:text-4xl font-bold">Moderation queue</h2><div className="space-y-3 mt-6">{subs.map(s=>(<div key={s.id} className="bg-white border rounded-xl p-4"><div>#{s.id} · bounty {s.bounty_id} · <strong>{s.status}</strong></div><a className="text-hap-700 underline break-all" href={s.url} target="_blank">{s.url}</a>{s.notes && <div className="text-slate-600 mt-1">{s.notes}</div>}<div className="mt-3 flex gap-2"><button onClick={()=>setStatus(s.id,'accepted')} className="inline-flex items-center rounded-xl bg-hap-700 px-4 py-2 text-white hover:bg-hap-800">Accept</button><button onClick={()=>setStatus(s.id,'rejected')} className="inline-flex items-center rounded-xl px-4 py-2 border">Reject</button></div></div>))}</div></div></section>)}
