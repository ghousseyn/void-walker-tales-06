
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import FeaturedBooks from "@/components/FeaturedBooks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Newsletter />
      <FeaturedBooks />

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 H. G. Voss. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
