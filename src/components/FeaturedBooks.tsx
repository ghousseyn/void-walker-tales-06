
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, BookOpen } from "lucide-react";

const FeaturedBooks = () => {
  const works = [
    {
      title: "Vossium: The Pulse",
      subtitle: "The Vossium Series - Book 1",
      description: "The first book in a groundbreaking five-part series exploring the intersection of consciousness, quantum physics, and human potential through rigorous hard science fiction.",
      type: "novel",
      status: "Pre-order Available",
      cover: "/lovable-uploads/1c0f5559-1870-4daa-a0ce-21287d3d6913.png",
      icon: BookOpen
    },
    {
      title: "A Scalar Bosonic Field Induced by a Fractal Silicate Meta-Material",
      subtitle: "Physics Paper",
      description: "An exploration of the physics and computational potential of scalar bosonic fields in fractal silicate meta-materials - the scientific foundation behind the Vossium series.",
      type: "paper",
      status: "Companion Work",
      cover: "placeholder.svg",
      icon: FileText
    },
    {
      title: "Ben's FPCU Logs",
      subtitle: "Companion Material",
      description: "Field Personnel Communication Unit logs providing additional context and depth to the world of the Vossium series through character perspectives.",
      type: "logs",
      status: "Companion Work",
      cover: "placeholder.svg",
      icon: FileText
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hard science fiction that pushes the boundaries of physics, mathematics, and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border">
                {/* Work Cover */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  {work.cover !== "placeholder.svg" ? (
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${work.cover})` }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center p-6">
                        <work.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                        <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                        <p className="text-sm text-muted-foreground">{work.subtitle}</p>
                      </div>
                    </div>
                  )}
                  <Badge className="absolute top-4 right-4" variant={work.status === 'Pre-order Available' ? 'default' : 'secondary'}>
                    {work.status}
                  </Badge>
                </div>

                {/* Work Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{work.subtitle}</p>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {work.description}
                  </p>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      {work.type === 'novel' ? 'Pre-order Now' : 'Read More'}
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
