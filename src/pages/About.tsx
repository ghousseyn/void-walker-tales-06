
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Microscope, Rocket, Pen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">About the Author</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Where Science Meets Storytelling
            </h1>
            <p className="text-xl text-muted-foreground">
              Bridging the gap between cutting-edge research and compelling narrative
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Author Photo & Bio */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">The Journey</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  With a Ph.D. in Theoretical Physics from MIT and over a decade of research 
                  experience in quantum mechanics and cosmology, I bring authentic scientific 
                  rigor to the realm of speculative fiction.
                </p>
                <p>
                  My novels explore the intersection of consciousness and quantum physics, 
                  the implications of advanced AI, and humanity's place in an ever-expanding 
                  universe. Each story is grounded in real scientific principles, extrapolated 
                  to their logical—and sometimes terrifying—conclusions.
                </p>
                <p>
                  When I'm not writing, I'm researching the latest developments in physics, 
                  neuroscience, and computer science, ensuring that my fiction remains on 
                  the cutting edge of scientific possibility.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div>
              <h3 className="text-xl font-bold mb-6">Credentials</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Ph.D. Theoretical Physics</div>
                    <div className="text-sm text-muted-foreground">MIT, 2015</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Microscope className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Research Scientist</div>
                    <div className="text-sm text-muted-foreground">CERN, 2015-2020</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Rocket className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Science Consultant</div>
                    <div className="text-sm text-muted-foreground">NASA JPL</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Pen className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Published Author</div>
                    <div className="text-sm text-muted-foreground">8 novels, 2020-present</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-muted/30 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold mb-4">Writing Philosophy</h3>
            <blockquote className="text-lg italic text-muted-foreground">
              "Science fiction isn't about predicting the future—it's about preventing 
              undesirable futures and inspiring us to reach for better ones. Every equation, 
              every scientific principle in my novels serves the story, but more importantly, 
              it serves as a bridge between what we know and what we might become."
            </blockquote>
          </div>

          {/* Awards & Recognition */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Awards & Recognition</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-bold mb-2">Hugo Award Nominee</h4>
                <p className="text-sm text-muted-foreground">Best Novel, 2023</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-bold mb-2">Nebula Award Winner</h4>
                <p className="text-sm text-muted-foreground">Best Novella, 2022</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="font-bold mb-2">Arthur C. Clarke Award</h4>
                <p className="text-sm text-muted-foreground">Shortlisted, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
