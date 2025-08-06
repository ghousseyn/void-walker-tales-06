
import { BookOpen, Users, Star, Award } from "lucide-react";

const AuthorStats = () => {
  const stats = [
    {
      icon: BookOpen,
      value: "8",
      label: "Published Novels",
      description: "Across multiple series"
    },
    {
      icon: Users,
      value: "50K+",
      label: "Readers Worldwide",
      description: "Growing community"
    },
    {
      icon: Star,
      value: "4.7",
      label: "Average Rating",
      description: "Across all platforms"
    },
    {
      icon: Award,
      value: "3",
      label: "Literary Awards",
      description: "Science fiction honors"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">By the Numbers</h2>
          <p className="text-muted-foreground">
            Building a legacy in hard science fiction
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorStats;
