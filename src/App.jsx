import "./App.css";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Profile from "./components/Profile.jsx";

import { PageContainer } from "./container/Page Container.jsx";

function App() {
  return (
    <>
      <PageContainer>
        <div className="flex flex-col">
          <Hero />
          <Skills />
          <Profile />
          <Projects />
        </div>
      </PageContainer>
    </>
  );
}

export default App;
