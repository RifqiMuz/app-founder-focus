import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import projectPos from "@/assets/project-pos.png";
import projectDashboard from "@/assets/project-dashboard.png";
import projectInventory from "@/assets/project-inventory.png";

const projects = [
  {
    name: "Starhalo: Thumbler Detector App",
    problem: "Many people forget to drink enough water, and companies don't know how their tumblers are used.",
    solution: "I built a mobile app that detects water consumption from a tumbler and connects users through a community.",
    images: [projectPos, projectDashboard, projectInventory],
  },
  {
    name: "Welling: Pregnancy Monitoring App",
    problem: "Pregnancy data is often hard to understand and not shared clearly between partners.",
    solution: "I built a pregnancy app that helps women track their condition and share important data with their partner.",
    images: [projectDashboard, projectPos, projectInventory],
  },
  {
    name: "Lumbung Tani: Farmer Selling App",
    problem: "Farmers find it difficult to sell directly to buyers without unfair middlemen.",
    solution: "I built an app that connects farmers and buyers directly for simpler and fairer trading.",
    images: [projectInventory, projectPos, projectDashboard],
  },
  {
    name: "EasyPI: Import/Export App",
    problem: "Importers and exporters struggle to find trusted partners and manage international trade.",
    solution: "I built a mobile app that connects importers and exporters from different countries in one platform.",
    images: [projectInventory, projectDashboard, projectPos],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Hero */}
      <section className="px-6 pt-20 pb-24 md:pt-32 md:pb-32 max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground">
          I help founders turn ideas into working mobile apps.
        </h1>
        <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-lg">
          I work directly with founders to ship usable, reliable apps — without
          overengineering. You get what you need to launch, grow, and iterate.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Contact me
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* Selected Projects */}
      <section className="px-6 py-20 md:py-28 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl text-foreground">What I Build</h2>
        <div className="mt-10 space-y-16">
          {projects.map((project, i) => (
            <div key={i} className="group">
              <div className="rounded-lg overflow-hidden bg-card border border-border">
                <Carousel
                  opts={{ loop: true }}
                  plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
                  className="w-full"
                >
                  <CarouselContent>
                    {project.images.map((img, idx) => (
                      <CarouselItem key={idx}>
                        <img
                          src={img}
                          alt={`${project.name} screenshot ${idx + 1}`}
                          className="w-full h-64 md:h-80 object-contain bg-secondary"
                          loading="lazy"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
              <h3 className="mt-5 font-heading text-xl text-foreground">{project.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.problem}</p>
              <p className="mt-1 text-sm text-secondary-foreground">{project.solution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 md:py-28 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl text-foreground">Get in touch</h2>
        <p className="mt-4 text-base text-muted-foreground max-w-md">
          Interested in building a mobile app? Let's talk.
        </p>
        <div className="mt-8 space-y-4">
          <a
            href="mailto:rifqimuzakki45@gmail.com"
            className="flex items-center gap-3 text-base text-foreground hover:text-accent transition-colors"
          >
            <Mail className="w-5 h-5 text-muted-foreground" />
            rifqimuzakki45@gmail.com
          </a>
          <a
            href="https://wa.me/6281936242236"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-base text-foreground hover:text-accent transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-muted-foreground" />
            WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 max-w-3xl mx-auto border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} · Rifqi Muzakki: Mobile Developer
        </p>
      </footer>
    </div>
  );
};

export default Index;
