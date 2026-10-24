import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import EventRegistration from '@/pages/EventRegistration';
import ParentRegistration from '@/pages/ParentRegistration';
import Contact from '@/pages/Contact';
import WonderTeam from '@/pages/WonderTeam';
import Functions from '@/pages/Functions';
import OurStory from '@/pages/OurStory';
import ValuesMissionSustainability from '@/pages/ValuesMissionSustainability';
import Ratios from '@/pages/Ratios';
import TeamSafety from '@/pages/TeamSafety';
import FAQ from '@/pages/FAQ';
import CareOptions from '@/pages/CareOptions';

function App() {
  return (
    <BrowserRouter>
      <div className="registration-page">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/wonder-team" element={<WonderTeam />} />
          <Route path="/values-mission-sustainability" element={<ValuesMissionSustainability />} />
          <Route path="/ratios" element={<Ratios />} />
          <Route path="/team-safety" element={<TeamSafety />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/care-options" element={<CareOptions />} />
          <Route path="/functions" element={<Functions />} />
          <Route path="/event-registration" element={<EventRegistration />} />
          <Route path="/parent-registration" element={<ParentRegistration />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
