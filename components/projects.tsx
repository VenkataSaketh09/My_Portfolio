import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "ExpenseTracker App",
    description: "A web app to help users seamlessly track and manage their expenses.",
    details: [
      "Built a responsive and interactive user interface using Next.js and React",
      "Styled the application for a clean and user-friendly look with Shadcn UI",
      "Managed data efficiently and securely using Drizzle ORM for organized storage",
    ],
    technologies: ["Next.js", "React", "Shadcn UI", "Drizzle ORM"],
    liveLink: "https://expense-tracker-saketh.vercel.app/",
    githubLink: "https://github.com/VenkataSaketh09/Expense_Tracker",
  },
  {
    title: "AI-Powered Kids Story Generator",
    description: "A web app to create fun and creative stories for kids using AI.",
    details: [
      "Built a responsive and interactive user interface using Next.js and React for smooth performance",
      "Styled the application with NextUI to deliver a bright, engaging, and user-friendly design",
      "Integrated Gemini AI API to generate unique, creative stories tailored for kids",
      "Managed data securely and efficiently using Drizzle ORM, including user authentication",
    ],
    technologies: ["Next.js", "React", "NextUI", "Gemini AI API", "Drizzle ORM"],
    liveLink: "https://story-generator-black.vercel.app/",
    githubLink: "https://github.com/VenkataSaketh09/Story-Generator",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mb-4 text-sm text-gray-600">
                  {project.details.map((detail, index) => (
                    <li key={index} className="mb-1">
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

