
import Link from "next/link"

export default function Home() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-slate-100 to-slate-200 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-6 py-12 text-center relative">


        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-72 h-72 bg-sky-400/20 rounded-full blur-3xl"></div>
        </div>


        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 leading-tight mb-6">
          Hi 👋 I&apos;m <span className="text-sky-600">Prashant</span>
        </h1>


        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
          These are some components and landing pages I&apos;ve built <span className="font-semibold text-sky-700">without AI</span>,
          to brush up my <span className="text-sky-600">Next.js</span>, <span className="text-sky-600">Tailwind</span>, and <span className="text-sky-600">React</span> skills.
        </p>


        <div className="flex gap-4 justify-center">
          <Link
            href="/components"
            className="px-6 py-3 bg-sky-600 text-white font-medium rounded-xl shadow-xl hover:bg-sky-700 transition"
          >
            View Components
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 border border-sky-600 text-sky-600 font-medium rounded-xl hover:bg-sky-50 transition"
          >
            Explore Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
