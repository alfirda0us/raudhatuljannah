import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Client Testimonials Trusted
            <br />
            by 30,000+ Eden members
          </h2>
          <Button variant="outline" size="default" className="mt-6">
            See If You Are Eligible
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">"{testimonial.text}"</p>
              <p className="text-xs text-primary">
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
