'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Button } from '@/components/Button'
export default function SignIn(){
  const [email,setEmail]=useState('')
  const [msg,setMsg]=useState('')
  async function signIn(e:React.FormEvent){ e.preventDefault(); const { error } = await supabase.auth.signInWithOtp({ email, options:{ emailRedirectTo: location.origin + '/dashboard' } }); setMsg(error? error.message : 'Check your email for the magic link.') }
  return (<section className="py-14 sm:py-20 border-b border-slate-200"><div className="max-w-md mx-auto px-4"><h2 className="text-3xl sm:text-4xl font-bold">Sign in</h2><form onSubmit={signIn} className="space-y-3 mt-6"><input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" className="w-full border rounded-xl px-4 py-3"/><Button type="submit">Send magic link</Button><p className="text-sm text-slate-600">{msg}</p></form></div></section>) }
