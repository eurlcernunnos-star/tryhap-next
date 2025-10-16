import { supabaseServer } from '@/lib/supabaseServer'

export default async function BountyView({ params }: { params: { id: string } }){
  const supabase = supabaseServer()
  const { data: b } = await supabase.from('bounties').select('*').eq('id', params.id).maybeSingle()
  const { data: subs } = await supabase.from('submissions').select('*').eq('bounty_id', params.id).order('created_at', { ascending: false })
  if(!b){ return <section className='py-14'><div className='max-w-6xl mx-auto px-4'>Not found</div></section> }
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2 bg-white rounded-2xl p-6 border">
          <div className="text-slate-600 text-sm">Reward: {b.reward_hap} HAP · Deadline: {b.deadline_date||'—'} · Status: {b.status}</div>
          <div className="mt-4 whitespace-pre-wrap text-slate-800">{b.description}</div>
        </article>
        <aside>
          <div className="bg-white rounded-2xl p-6 border space-y-3">
            <div className="font-semibold">Submit your work</div>
            <p>Sign in and submit from the app (client-side form can be added here if desired).</p>
            <div className="pt-3 border-t text-sm text-slate-600">Submissions ({subs?.length||0})</div>
            <div className="space-y-2 max-h-80 overflow-auto">
              {(subs||[]).map((s:any)=>(
                <div key={s.id} className="border rounded-lg p-3 text-sm">
                  <div><strong>{s.status.toUpperCase()}</strong> · {new Date(s.created_at).toLocaleString()}</div>
                  <a className="text-hap-700 underline break-all" href={s.url} target="_blank">{s.url}</a>
                  {s.notes && <div className="text-slate-600 mt-1">{s.notes}</div>}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
