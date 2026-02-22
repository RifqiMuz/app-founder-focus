import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import projectPos from "@/assets/project-pos.png";
import projectDashboard from "@/assets/project-dashboard.png";
import projectInventory from "@/assets/project-inventory.png";

const projects = [
  {
    name: "POS App for Small Shops",
    problem: "Small retailers needed a simple way to track daily sales without expensive subscriptions.",
    solution: "Built a lightweight Android POS app with one-time payment, offline support, and receipt printing.",
    image: projectPos,
  },
  {
    name: "Business Dashboard App",
    problem: "A growing logistics company had no visibility into daily operations from mobile.",
    solution: "Created a mobile dashboard that shows key metrics, orders, and team activity in real time.",
    image: projectDashboard,
  },
  {
    name: "Inventory Management App",
    problem: "A wholesale distributor was tracking stock manually across three warehouses.",
    solution: "Delivered an Android app with barcode scanning, stock alerts, and multi-location support.",
    image: projectInventory,
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
        <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
          Android-first mobile apps for early-stage startups and small businesses.
        </p>
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

      {/* What You Build */}
      <section className="px-6 py-20 md:py-28 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl text-foreground">What I build</h2>
        <ul className="mt-8 space-y-4">
          {[
            "Mobile MVPs — Android-first, ready to test with real users",
            "Business & internal apps — tools your team actually uses",
            "Point of Sale systems — simple, reliable, no subscriptions",
            "App maintenance & improvements — keeping things running smoothly",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-secondary-foreground">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* Selected Projects */}
      <section className="px-6 py-20 md:py-28 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl text-foreground">Selected projects</h2>
        <div className="mt-10 space-y-16">
          {projects.map((project, i) => (
            <div key={i} className="group">
              <div className="rounded-lg overflow-hidden bg-card border border-border">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 md:h-80 object-contain bg-secondary"
                  loading="lazy"
                />
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
            href="mailto:hello@example.com"
            className="flex items-center gap-3 text-base text-foreground hover:text-accent transition-colors"
          >
            <Mail className="w-5 h-5 text-muted-foreground" />
            hello@example.com
          </a>
          <a
            href="https://wa.me/1234567890"
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
          © {new Date().getFullYear()} · Mobile App Developer
        </p>
      </footer>
    </div>
  );
};

export default Index;
