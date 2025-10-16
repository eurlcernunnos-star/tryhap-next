'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { Button } from '@/components/Button'

export default function NewBounty(){
  const [f,setF]=useState({title:'',description:'',reward_hap:'',deadline_date:'',tags:''})
  const r = useRouter()
  async function save(e:React.FormEvent){ e.preventDefault()
    const session = (await supabase.auth.getSession()).data.session
    if(!session){ alert('Please sign in'); return }
    const payload = { ...f, reward_hap: Number(f.reward_hap), tags: f.tags? f.tags.split(',').map(s=>s.trim()) : [], owner: session.user.id }
    const { error } = await supabase.from('bounties').insert(payload)
    if(error) alert(error.message); else r.push('/bounties')
  }
  return (
    <section className="py-14 sm:py-20 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">New bounty</h2>
        <form onSubmit={save} className="grid gap-3 mt-6">
          <input className="w-full border rounded-xl px-4 py-3" placeholder="Title" required value={f.title} onChange={e=>setF({...f, title:e.target.value})}/>
          <textarea className="w-full border rounded-xl px-4 py-3" rows={6} placeholder="Description (acceptance tests, deliverables, links)" required value={f.description} onChange={e=>setF({...f, description:e.target.value})}/>
          <input className="w-full border rounded-xl px-4 py-3" type="number" step="0.01" placeholder="Reward (HAP)" required value={f.reward_hap} onChange={e=>setF({...f, reward_hap:e.target.value})}/>
          <input className="w-full border rounded-xl px-4 py-3" type="date" placeholder="Deadline (optional)" value={f.deadline_date} onChange={e=>setF({...f, deadline_date:e.target.value})}/>
          <input className="w-full border rounded-xl px-4 py-3" placeholder="Tags (comma separated)" value={f.tags} onChange={e=>setF({...f, tags:e.target.value})}/>
          <Button type="submit">Publish bounty</Button>
        </form>
      </div>
    </section>
  )
}
