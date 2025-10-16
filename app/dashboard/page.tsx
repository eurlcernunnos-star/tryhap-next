'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
export default function Dashboard(){
  const [session,setSession]=useState<any>(null)
  const [myB,setMyB]=useState<any[]>([])
  const [myS,setMyS]=useState<any[]>([])
  useEffect(()=>{ supabase.auth.getSession().then(({data})=>setSession(data.session)) },[])
  useEffect(()=>{(async()=>{
    if(!session) return
    const { data:b } = await supabase.from('bounties').select('*').eq('owner', session.user.id).order('created_at',{ascending:false})
    setMyB(b||[])
    const { data:s } = await supabase.from('submissions').select('*').eq('author', session.user.id).order('created_at',{ascending:false})
    setMyS(s||[])
  })()},[session])
  if(!session) return <section className="py-14"><div className="max-w-6xl mx-auto px-4">Please sign in.</div></section>
  return (<section className="py-14 sm:py-20 border-b border-slate-200"><div className="max-w-6xl mx-auto px-4"><h2 className="text-3xl sm:text-4xl font-bold">Your dashboard</h2><p className="mt-2">Welcome, <strong>{session.user.email}</strong></p><div className="mt-6 grid lg:grid-cols-2 gap-6"><div className="bg-white rounded-2xl p-6 border"><h3 className="font-semibold mb-2">My bounties</h3>{myB.map(b=>(<div key={b.id} className="border rounded p-3 mb-2">{b.title} · {b.status}</div>))}</div><div className="bg-white rounded-2xl p-6 border"><h3 className="font-semibold mb-2">My submissions</h3>{myS.map(s=>(<div key={s.id} className="border rounded p-3 mb-2">#{s.bounty_id} · {s.status} · <a className="underline text-hap-700 break-all" href={s.url} target="_blank">{s.url}</a></div>))}</div></div></div></section>)}
