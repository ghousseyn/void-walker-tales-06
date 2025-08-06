
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <Badge variant="secondary" className="mb-4">
          Plausible Hard Science Fiction with a heart
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-[1.15]">
          Where Science Meets
          <br />
          Imagination
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Exploring the frontiers of physics, consciousness, and human potential through 
          rigorously researched science fiction that challenges our understanding of reality.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" asChild>
            <Link to="/books">
              Explore My Books
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button variant="outline" size="lg">
            <Download className="mr-2 h-5 w-5" />
            Free Sample Chapter
          </Button>
        </div>

        {/* Featured Quote */}
        <div className="bg-muted/30 rounded-lg p-8 max-w-4xl mx-auto">
          <blockquote className="text-lg italic text-muted-foreground mb-4">
            "Magic is only the first draft of science."
          </blockquote>
          <cite className="text-sm font-medium">— H. G. Voss</cite>
        </div>
      </div>
    </section>
  );
};

export default Hero;
