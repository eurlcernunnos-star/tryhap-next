'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
export default function Settings(){
  const [fee,setFee]=useState<number>(10)
  const [burn,setBurn]=useState<number>(30)
  useEffect(()=>{(async()=>{ const { data } = await supabase.from('site_settings').select('*').eq('key','economics').maybeSingle(); if(data){ setFee(data.value.fee||10); setBurn(data.value.burn||30) } })()},[])
  async function save(){ await supabase.from('site_settings').upsert({ key:'economics', value:{ fee:Number(fee), burn:Number(burn) } }); alert('Saved') }
  return (<section className="py-14 sm:py-20 border-b border-slate-200"><div className="max-w-6xl mx-auto px-4"><h2 className="text-3xl sm:text-4xl font-bold">Fee/Burn parameters</h2><div className="grid sm:grid-cols-2 gap-3 max-w-xl mt-6"><label>Platform fee (%)</label><input className="w-full border rounded-xl px-4 py-3" type="number" value={fee} onChange={e=>setFee(Number(e.target.value))}/><label>Burn share of fees (%)</label><input className="w-full border rounded-xl px-4 py-3" type="number" value={burn} onChange={e=>setBurn(Number(e.target.value))}/></div><div className="mt-4"><button onClick={save} className="inline-flex items-center rounded-xl bg-hap-700 px-4 py-2 text-white hover:bg-hap-800">Save settings</button></div></div></section>)}
