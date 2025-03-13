import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills"; 
import WorkExperience from "./pages/WorkExperience";
import ContactDetails from "./pages/ContactDetails";
import ScrollToTop from "./utils/ScrollToTop";
import Hobbies from "./pages/Hobbies";
import Achievements from "./pages/Achievements";
import Certifications from "./pages/Certifications";
import Gallery from "./pages/Gallery";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<ContactDetails />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin/>}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
