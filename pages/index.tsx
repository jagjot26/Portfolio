import { useState } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import ThemeIconDiv from "../components/ThemeIconDiv";
import Header from "../components/Header";
import useBoolean from "../hooks/useBoolean";
import Layout from "../components/Layout";
import AboutBottomSheet from "../components/BottomSheet/About";
import ContactBottomSheet from "../components/BottomSheet/Contact";
import Projects from "../components/Projects";
import { projects, Project } from "../data/projects";
import ProjectBottomSheet from "../components/BottomSheet/ProjectBottomSheet";

const Home: NextPage = () => {
  const [about, openAbout, closeAbout] = useBoolean(false);
  const [contact, openContact, closeContact] = useBoolean(false);
  const [project, openProject, closeProject] = useBoolean(false);
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  const activeProjectSetter = (project: Project): void => {
    setActiveProject(project);
    openProject();
  };

  return (
    <>
      <Layout>
        <main>
          <ThemeIconDiv />
          <Header openAbout={openAbout} openContact={openContact} />

          <Projects activeProjectSetter={activeProjectSetter} />
        </main>

        <AboutBottomSheet open={about} onDismiss={closeAbout} />
        <ContactBottomSheet open={contact} onDismiss={closeContact} />
        <ProjectBottomSheet
          open={project}
          onDismiss={closeProject}
          activeProject={activeProject}
        />
      </Layout>
    </>
  );
};

export default Home;
