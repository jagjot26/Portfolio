import type { NextPage } from "next";
import dynamic from "next/dynamic";
import ThemeIconDiv from "../components/ThemeIconDiv";
import Header from "../components/Header";
import useBoolean from "../hooks/useBoolean";
import Layout from "../components/Layout";
import AboutBottomSheet from "../components/BottomSheet/About";
import ContactBottomSheet from "../components/BottomSheet/Contact";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  const [about, openAbout, closeAbout] = useBoolean(false);
  const [contact, openContact, closeContact] = useBoolean(false);
  const [project, openProject, closeProject] = useBoolean(false);
  return (
    <>
      <Layout>
        <main>
          <ThemeIconDiv />
          <Header openAbout={openAbout} openContact={openContact} />

          <Projects />
        </main>

        <AboutBottomSheet open={about} onDismiss={closeAbout} />
        <ContactBottomSheet open={contact} onDismiss={closeContact} />
      </Layout>
    </>
  );
};

export default Home;
