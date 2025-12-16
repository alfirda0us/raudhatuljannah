import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { title: "Tips tailored to your eating habits" },
  { title: "Support better sleep" },
  { title: "Custom in-app tools and tracking" },
  { title: "Made to fit your lifestyle" },
  { title: "Made to fit your lifestyle" },
  { title: "Designed by specialists" },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight text-foreground mb-4">
              Mind and body
              <br />
              on the same team
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm leading-relaxed">
              These personalized plans are based on your lifestyle, eating pattern, health history, and weight loss goals.
            </p>
            <Button variant="hero" size="sm">
              See If You Are Eligible
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-lg p-4 hover:border-border transition-colors"
              >
                <CheckCircle className="w-4 h-4 text-muted-foreground mb-2" />
                <p className="text-xs text-foreground leading-relaxed">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
