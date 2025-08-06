
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get notified about new releases, exclusive content, and insights into the science behind the fiction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
          />
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
