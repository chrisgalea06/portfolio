import ListProjects from "@/components/ListProjects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Projects() {
  return (
    <>
      <Header />
      <main className="text-[#262B35]">
        <div id="projects">
          <ListProjects amountToShow={100} />
        </div>
      </main>
      <Footer />
    </>
  );
}
