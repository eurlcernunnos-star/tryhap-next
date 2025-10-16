import { Button } from '@/components/Button'

function Card({label, value}:{label:string,value:string}){
  return (
    <div className="border border-slate-200 rounded-xl p-4">
      <div className="text-sm text-slate-600">{label}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
  )
}

export default function Home(){
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Do Useful Actions. Earn <span className="text-hap-700">HAP</span>.
            </h1>
            <p className="mt-4 text-lg text-slate-700 max-w-xl">
              HAP powers on-chain bounties and AI features. Pay with HAP, stake for priority and discounts, and fund tasks that deliver real value.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/bounties"><Button>Explore bounties</Button></a>
              <a href="/transparency" className="inline-flex items-center rounded-xl px-4 py-2 border border-slate-300 hover:bg-white shadow-sm">Transparency</a>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-hap-100 to-hap-300 p-1 shadow-glow">
            <div className="bg-white rounded-2xl p-6 h-full">
              <div className="grid grid-cols-2 gap-4">
                <Card label="Bounties resolved" value="Live"/>
                <Card label="HAP burned (fees)" value="Live"/>
                <Card label="Staked HAP" value="Live"/>
                <Card label="Time-to-payout" value="< minutes"/>
              </div>
              <p className="mt-4 text-sm text-slate-500">KPIs are public. No price talk—only product traction.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
