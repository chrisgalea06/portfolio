import MainBanner from "@/components/MainBanner";
import About from "@/components/About";
import Services from "@/components/Services";
import ListProjects from "@/components/ListProjects";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="text-[#262B35]">
        <MainBanner />
        <section id="about" aria-labelledby="about-heading">
          <h2 id="about-heading" className="sr-only">About Me</h2>
          <About />
        </section>
        <section id="services" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">Services</h2>
          <Services />
        </section>
        <section id="projects" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="sr-only">Projects</h2>
          <ListProjects amountToShow={2} />
        </section>
        <section id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="sr-only">Contact</h2>
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
