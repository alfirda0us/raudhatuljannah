import wellnessPeople from "@/assets/wellness-people.jpg";
import { TrendingUp, TrendingDown, Heart, Zap } from "lucide-react";

const stats = [
  { percentage: "89%", label: "Ability To Get Up", icon: TrendingUp, color: "bg-tan" },
  { percentage: "88%", label: "Increase In Libido", icon: TrendingDown, color: "bg-cream-dark" },
  { percentage: "85%", label: "Harder And Fuller", icon: Heart, color: "bg-secondary" },
  { percentage: "90%", label: "Enhanced Performance", icon: Zap, color: "bg-accent" },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-warm-brown text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={wellnessPeople}
              alt="Happy people representing wellness community"
              className="rounded-2xl w-full object-cover aspect-square"
            />
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Benefits you'll
                <br />
                Experience
              </h2>
            </div>
          </div>
          
          <div>
            <p className="text-primary-foreground/80 mb-8 max-w-md">
              Treat, optimize, and track your performance with clinically proven technology—at home, on your terms.
            </p>
            
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.color} text-foreground rounded-xl p-5 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300`}
                >
                  <div>
                    <p className="text-3xl font-serif font-semibold">{stat.percentage}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                  <stat.icon className="w-6 h-6 text-muted-foreground" />
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
