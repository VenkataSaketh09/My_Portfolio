import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { RatePortfolio } from "@/components/rate-portfolio"
import { RatingsDisplay } from "@/components/ratings-display"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <section id="rate" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Rate My Portfolio</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <RatePortfolio />
            <RatingsDisplay />
          </div>
        </div>
      </section>
    </main>
  )
}

