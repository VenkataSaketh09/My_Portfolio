import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Development Skills",
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "Jest (Unit Testing)",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Mongoose", "REST APIs"],
  },
  {
    title: "Programming Languages",
    skills: ["Python (Intermediate)", "JavaScript", "TypeScript"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Version Control and Tools",
    skills: ["Git", "GitHub"],
  },
  {
    title: "Languages",
    skills: ["English (Native Level)", "Telugu (Superior)"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

