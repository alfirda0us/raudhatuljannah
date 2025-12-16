import { Button } from "@/components/ui/button";
import skinCloseup from "@/assets/skin-closeup.jpg";
import coupleWellness from "@/assets/couple-wellness.jpg";
import wellnessPeople from "@/assets/wellness-people.jpg";

const TreatmentsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-foreground mb-6">
              Have better sex with fast-acting, long-lasting quality treatments
            </h2>
            <Button variant="hero" size="lg">
              See if You are Eligible
            </Button>
          </div>
          <div>
            <p className="text-muted-foreground">
              Never let a parcel delivery rule your entire schedule again.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden aspect-[4/5]">
            <img
              src={skinCloseup}
              alt="Close-up of healthy glowing skin"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/5]">
            <img
              src={coupleWellness}
              alt="Happy couple together"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/5]">
            <img
              src={wellnessPeople}
              alt="People enjoying wellness lifestyle"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
