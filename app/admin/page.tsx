'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabaseClient'
export default function Admin(){
  const [session,setSession]=useState<any>(null)
  const [role,setRole]=useState('member')
  useEffect(()=>{ supabase.auth.getSession().then(({data})=>setSession(data.session)) },[])
  useEffect(()=>{ (async()=>{ if(session){ const { data } = await supabase.from('profiles').select('role').eq('id', session.user.id).maybeSingle(); setRole(data?.role||'member') } })() },[session])
  if(!session) return <section className="py-14"><div className="max-w-6xl mx-auto px-4">Please sign in.</div></section>
  if(role!=='admin') return <section className="py-14"><div className="max-w-6xl mx-auto px-4">You do not have access to this area.</div></section>
  return (<section className="py-14 sm:py-20 border-b border-slate-200"><div className="max-w-6xl mx-auto px-4"><h2 className="text-3xl sm:text-4xl font-bold">Admin console</h2><div className="grid lg:grid-cols-3 gap-6 mt-6"><Link className="block bg-white rounded-xl p-6 border hover:shadow" href="/bounties/new">Create bounty</Link><Link className="block bg-white rounded-xl p-6 border hover:shadow" href="/admin/moderation">Moderate submissions</Link><Link className="block bg-white rounded-xl p-6 border hover:shadow" href="/admin/settings">Site settings</Link></div></div></section>)}
