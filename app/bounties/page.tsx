import Link from 'next/link'
import { supabaseServer } from '@/lib/supabaseServer'

export default async function Bounties(){
  const supabase = supabaseServer()
  const { data: bounties } = await supabase.from('bounties').select('*').order('created_at', { ascending: false })
  return (
    <section className="py-14 sm:py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Bounties marketplace</h2>
          <Link href="/bounties/new" className="inline-flex items-center rounded-xl bg-hap-700 px-4 py-2 text-white hover:bg-hap-800">Create bounty</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {(bounties||[]).map((b:any)=>(
            <div key={b.id} className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col">
              <div className="text-sm font-semibold text-hap-700">{b.title}</div>
              <div className="mt-2 text-slate-600 text-sm">Reward: {b.reward_hap} HAP · Deadline: {b.deadline_date || '—'}</div>
              <div className="mt-auto pt-4">
                <Link href={`/bounties/${b.id}`} className="inline-flex items-center rounded-xl bg-hap-700 px-4 py-2 text-white hover:bg-hap-800">View</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
