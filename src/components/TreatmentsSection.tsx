import { Button } from "@/components/ui/button";
import skinCloseup from "@/assets/skin-closeup.jpg";
import coupleWellness from "@/assets/couple-wellness.jpg";
import wellnessPeople from "@/assets/wellness-people.jpg";

const TreatmentsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
          <div>
            <p className="text-xs text-muted-foreground mb-4">
              Never let a parcel delivery rule your entire schedule again.
            </p>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight text-foreground">
              Have better sex with fast-acting, long-lasting quality treatments
            </h2>
          </div>
          <div className="flex justify-end">
            <Button variant="hero" size="default">
              See if You are Eligible
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl overflow-hidden aspect-[3/4]">
            <img
              src={skinCloseup}
              alt="Close-up of healthy glowing skin"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[3/4]">
            <img
              src={coupleWellness}
              alt="Happy couple together"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[3/4]">
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
