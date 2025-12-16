import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import wellnessPeople from "@/assets/wellness-people.jpg";

const testimonials = [
  {
    name: "Caleb Carter",
    rating: 5,
    text: "I'm super happy with my experience here! Their website is super easy to use, and the prices are great.",
    product: "Sildenafil Tablets",
    avatar: "CC"
  },
  {
    name: "Theresa Webb",
    rating: 5,
    text: "I have lost just over 24 pounds in 3 months.",
    product: "Libido gummies",
    avatar: "TW"
  },
  {
    name: "Josh Jones",
    rating: 5,
    text: "I've lost just over 24 pounds in 2 months.",
    product: "Sex Rx + Hair Hero",
    avatar: "JJ"
  },
  {
    name: "Kat Simmons",
    rating: 5,
    text: "I have been using Eden for just over 5 weeks and I've lost over 12 pounds.",
    product: "Pleasure Serum",
    avatar: "KS"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
            Client Testimonials Trusted
            <br />
            by 30,000+ Eden members
          </h2>
          <Button variant="outline" size="sm" className="mt-4">
            See If You Are Eligible
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src={wellnessPeople}
              alt="Happy community members"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-lg p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-tan flex items-center justify-center text-foreground text-xs font-medium">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">{testimonial.name}</p>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">"{testimonial.text}"</p>
                <p className="text-[10px] text-primary">
                  {testimonial.name.split(' ')[0]} C. adopted <span className="underline">{testimonial.product}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-3 mt-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border/50 rounded-lg p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-tan flex items-center justify-center text-foreground text-xs font-medium">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">{testimonial.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">"{testimonial.text}"</p>
              <p className="text-[10px] text-primary">
                {testimonial.name.split(' ')[0]} adopted <span className="underline">{testimonial.product}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
