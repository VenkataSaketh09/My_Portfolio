import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <p className="text-gray-600">
                  Full-Stack Web Developer passionate about building scalable and efficient web applications. Proficient
                  in Python, React, Next.js, and Node.js, with a strong focus on creating seamless user experiences and
                  responsive designs. Impact-driven projects centered on scalability and innovation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Work Experience</h3>
                <div className="space-y-2">
                  <h4 className="font-medium">SDE Intern (MERN Stack Developer) - Tachyonsec Systems Pvt.Ltd</h4>
                  <p className="text-gray-600 text-sm">December 2023 - Present</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>
                      Developed backend functionalities to support network automation solutions, enhancing operational
                      efficiency
                    </li>
                    <li>
                      Designed and implemented device category models to improve data organization and streamline system
                      performance
                    </li>
                    <li>
                      Collaborated on backend development to ensure high-quality deliverables aligned with client
                      requirements
                    </li>
                    <li>
                      Tested REST APIs using Jest, achieving and maintaining 95%+ test coverage, showcasing strong
                      attention to detail
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Vishnu Institute of Technology</h4>
                    <p className="text-gray-600">B.Tech Information Technology - 9.00</p>
                    <p className="text-gray-600 text-sm">2020-2024</p>
                  </div>
                  <div>
                    <h4 className="font-medium">IIIT Srikakulam</h4>
                    <p className="text-gray-600">Pre University Course - 9.41</p>
                    <p className="text-gray-600 text-sm">2020-2024</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Certifications & Achievements</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Solution Challenge(GDSC) Certification - Google Developer Student Club</li>
                  <li>Internal SIH Certification - Smart India Hackathon</li>
                  <li>SQL Certification - Coursera</li>
                  <li>Completed 100 days of solving problems on LeetCode</li>
                  <li>Completed the 45 Days Arsh Goyal DSA Challenge</li>
                </ul>
              </div>

              <div className="flex justify-center">
                <Button asChild>
                  <Link href="/Muddu_Venkata_Saketh_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

