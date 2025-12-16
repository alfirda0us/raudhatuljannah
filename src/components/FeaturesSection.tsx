import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { title: "Tips tailored to your eating habits", icon: CheckCircle },
  { title: "Support better sleep", icon: CheckCircle },
  { title: "Custom in-app tools and tracking", icon: CheckCircle },
  { title: "Made to fit your lifestyle", icon: CheckCircle },
  { title: "Made to fit your lifestyle", icon: CheckCircle },
  { title: "Designed by specialists", icon: CheckCircle },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-foreground mb-6">
              Mind and body
              <br />
              on the same team
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              These personalized plans are based on your lifestyle, eating pattern, health history, and weight loss goals.
            </p>
            <Button variant="hero" size="default">
              See If You Are Eligible
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CheckCircle className="w-5 h-5 text-primary mb-3" />
                <p className="text-sm text-foreground">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
