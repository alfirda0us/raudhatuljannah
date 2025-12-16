import wellnessPeople from "@/assets/wellness-people.jpg";
import { TrendingUp, TrendingDown, Heart, Zap } from "lucide-react";

const stats = [
  { percentage: "89%", label: "Ability To Get Up", icon: TrendingUp, bg: "bg-tan" },
  { percentage: "88%", label: "Increase In Libido", icon: TrendingDown, bg: "bg-cream-dark" },
  { percentage: "85%", label: "Harder And Fuller", icon: Heart, bg: "bg-secondary" },
  { percentage: "90%", label: "Enhanced Performance", icon: Zap, bg: "bg-accent" },
];

const BenefitsSection = () => {
  return (
    <section className="bg-warm-brown">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-square lg:aspect-auto">
            <img
              src={wellnessPeople}
              alt="Happy people representing wellness community"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8">
              <h2 className="text-3xl md:text-4xl font-serif leading-tight text-cream">
                Benefits you'll
                <br />
                Experience
              </h2>
            </div>
          </div>
          
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <p className="text-cream/70 text-sm mb-8 max-w-sm leading-relaxed">
              Treat, optimize, and track your performance with clinically proven technology—at home, on your terms.
            </p>
            
            <div className="space-y-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.bg} text-foreground rounded-lg p-4 flex items-center justify-between`}
                >
                  <div>
                    <p className="text-2xl font-serif font-medium">{stat.percentage}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                  <stat.icon className="w-5 h-5 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
