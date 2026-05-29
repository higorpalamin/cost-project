import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/newProject/NewProject";
import Projects from "./components/pages/projects/Projects";
import Project from "./components/pages/project/Project";

import Navbar from "./components/layout/navbar/Navbar";
import Container from "./components/layout/container/Container";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/cost-project" element={<Home />} />
          <Route path="/cost-project/projects" element={<Projects />} />
          <Route path="/cost-project/company" element={<Company />} />
          <Route path="/cost-project/contact" element={<Contact />} />
          <Route path="/cost-project/newproject" element={<NewProject />} />
          <Route path="/cost-project/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
