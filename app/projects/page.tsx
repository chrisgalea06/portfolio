// pages/projects.tsx

import ListProjects from "@/components/ListProjects";
import Basecontent from "@/components/basecontent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Projects() {
  return (
    <div>
      <Basecontent>
        <Header />
        <div id="projects">
          <ListProjects amountToShow={100} />
        </div>
        <Footer />
      </Basecontent>
    </div>
  );
}
