export default function Footer(){
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <div>© {new Date().getFullYear()} HAP – Happy Action Points</div>
        <div className="flex items-center gap-4">
          <a href="/legal" className="hover:text-hap-700">Legal / Risks</a>
          <a href="/transparency" className="hover:text-hap-700">Transparency</a>
          <a href="/docs" className="hover:text-hap-700">Docs</a>
        </div>
      </div>
    </footer>
  )
}
