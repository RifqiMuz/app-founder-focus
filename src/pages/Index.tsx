import { Mail, MessageCircle, ArrowRight, Linkedin } from "lucide-react";
import PhoneCarousel from "@/components/PhoneCarousel";
import { useImagePreload } from "@/hooks/use-image-preload";
import projectPos from "@/assets/project-pos.png";
import projectDashboard from "@/assets/project-dashboard.png";
import projectInventory from "@/assets/project-inventory.png";
import starhalo1 from "@/assets/starhalo/1.jpeg";
import starhalo2 from "@/assets/starhalo/2.jpeg";
import starhalo3 from "@/assets/starhalo/3.jpeg";
import starhalo4 from "@/assets/starhalo/4.jpeg";
import starhalo5 from "@/assets/starhalo/5.jpeg";
import welling1 from "@/assets/welling/1.jpeg";
import welling2 from "@/assets/welling/2.jpeg";
import welling3 from "@/assets/welling/3.jpeg";
import welling4 from "@/assets/welling/4.jpeg";
import welling5 from "@/assets/welling/5.jpeg";
import panenkita1 from "@/assets/panenkita/1.jpeg";
import panenkita2 from "@/assets/panenkita/2.jpeg";
import panenkita3 from "@/assets/panenkita/3.jpeg";
import panenkita4 from "@/assets/panenkita/4.jpeg";
import panenkita5 from "@/assets/panenkita/5.jpeg";
import ceriakid1 from "@/assets/ceriakid/1.jpeg";
import ceriakid2 from "@/assets/ceriakid/2.jpeg";
import ceriakid3 from "@/assets/ceriakid/3.jpeg";
import ceriakid4 from "@/assets/ceriakid/4.jpeg";
import ceriakid5 from "@/assets/ceriakid/5.jpeg";

const projects = [
  {
    name: "Starhalo: Thumbler Detector App",
    problem: "Many people forget to drink enough water, and companies don't know how their tumblers are used.",
    solution: "I built a mobile app that detects water consumption from a tumbler and connects users through a community.",
    images: [starhalo1, starhalo2, starhalo3, starhalo4, starhalo5],
  },
  {
    name: "Welling: Pregnancy Monitoring App",
    problem: "Pregnancy data is often hard to understand and not shared clearly between partners.",
    solution: "I built a pregnancy app that helps women track their condition and share important data with their partner.",
    images: [welling1, welling2, welling3, welling4, welling5],
  },
  {
    name: "Panen Kita: Farmer Selling App",
    problem: "Farmers find it difficult to sell directly to buyers without unfair middlemen.",
    solution: "I built an app that connects farmers and buyers directly for simpler and fairer trading.",
    images: [panenkita1, panenkita2, panenkita3, panenkita4, panenkita5],
  },
  {
    name: "Ceriakid: Stock Tracking App",
    problem: "Clothing brands often struggle to track stock accurately across products and sizes.",
    solution: "I built a mobile app that helps a clothing brand manage and monitor their inventory in one place.",
    images: [ceriakid1, ceriakid2, ceriakid3, ceriakid4, ceriakid5],
  },
];

const Index = () => {
  // Preload all project images on component mount
  const allImages = projects.flatMap(project => project.images);
  const imagesPreloaded = useImagePreload(allImages);

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
      {!imagesPreloaded ? (
          <div className="mt-10 flex items-center justify-center py-20">
            <div className="text-muted-foreground">Loading projects...</div>
          </div>
        ) : ( <section className="px-6 py-20 md:py-28 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl text-foreground">What I Build</h2>
        <div className="mt-10 space-y-16">
          {projects.map((project, i) => (
            <div key={i} className="group">
              <PhoneCarousel images={project.images} projectName={project.name} />
              <h3 className="mt-5 font-heading text-xl text-foreground">{project.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.problem}</p>
              <p className="mt-1 text-sm text-secondary-foreground">{project.solution}</p>
            </div>
          ))}
        </div>
      </section>)}

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

          <a
            href="https://www.linkedin.com/in/rifqi-muzakki-42881a292"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-base text-foreground hover:text-accent transition-colors"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground" />
            LinkedIn
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
