'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Button } from './Button'

export default function Navbar(){
  const [open,setOpen]=useState(false);
  const [session,setSession]=useState<any>(null);
  const [role,setRole]=useState('member');

  useEffect(()=>{
    supabase.auth.getSession().then(({data})=>setSession(data.session));
    const { data: l } = supabase.auth.onAuthStateChange((_e, s)=>setSession(s));
    return ()=> l.subscription.unsubscribe();
  },[]);

  useEffect(()=>{
    (async()=>{
      if(session){
        const { data } = await supabase.from('profiles').select('role').eq('id', session.user.id).maybeSingle();
        setRole(data?.role || 'member');
      } else setRole('member');
    })();
  },[session]);

  async function signOut(){ await supabase.auth.signOut(); }

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-hap-800">✨ HAP</Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/how-it-works" className="hover:text-hap-700">How it works</Link>
          <Link href="/tokenomics" className="hover:text-hap-700">Tokenomics</Link>
          <Link href="/bounties" className="hover:text-hap-700">Bounties</Link>
          <Link href="/transparency" className="hover:text-hap-700">Transparency</Link>
          <Link href="/docs" className="hover:text-hap-700">Docs</Link>
        </nav>
        <div className="flex items-center gap-3">
          {session ? (<>
            <Link href="/dashboard" className="hidden sm:inline hover:text-hap-700">Dashboard</Link>
            {role==='admin' && <Link href="/admin" className="hidden sm:inline hover:text-hap-700">Admin</Link>}
            <Button onClick={signOut} className="bg-slate-900 hover:bg-slate-800">Sign out</Button>
          </>) : (
            <Button onClick={()=>location.assign('/signin')}>Sign in</Button>
          )}
          <button className="md:hidden p-2" onClick={()=>setOpen(!open)}>☰</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/how-it-works" className="block">How it works</Link>
          <Link href="/tokenomics" className="block">Tokenomics</Link>
          <Link href="/bounties" className="block">Bounties</Link>
          <Link href="/transparency" className="block">Transparency</Link>
          <Link href="/docs" className="block">Docs</Link>
        </div>
      )}
    </header>
  )
}
