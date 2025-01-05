import { Card, CardContent } from "@/components/ui/card"
import { Folder, GraduationCap, Clock } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex items-center gap-3 mb-2">
        <GraduationCap className="h-8 w-8 text-blue-600" />
        <h1 className="text-3xl font-bold">Digital SAT Practice</h1>
      </div>
      <p className="text-muted-foreground mb-8 text-lg">
        Free Digital SAT practice tests and questions. Study with official SAT practice resources.
      </p>

      <div className="space-y-12">
        {/* Practice Tests Section */}
        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 text-blue-600 mb-4">
            <Clock className="h-5 w-5" />
            Full Practice Tests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { 
                name: "2023", 
                icon: <Folder className="h-5 w-5" />,
                description: "all 2023 leaks",
                link: "/2023"
              },
              { 
                name: "2024", 
                icon: <Folder className="h-5 w-5" />,
                description: "all 2024 leaks",
                link: "/2024"
              },
            ].map((test) => (
              <Card key={test.name} className="group hover:shadow-md transition-all hover:border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-blue-600">
                      {test.icon}
                    </div>
                    <h3 className="font-semibold">{test.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{test.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
