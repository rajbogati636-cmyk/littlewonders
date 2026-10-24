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
import WeddingChildcare from '@/pages/WeddingChildcare';
import GroupBookings from '@/pages/GroupBookings';
import DefenceCare from '@/pages/DefenceCare';
import Locations from '@/pages/Locations';
import Journal from '@/pages/Journal';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import PrivacyNotice from '@/pages/PrivacyNotice';


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
          <Route path="/wedding-childcare" element={<WeddingChildcare />} />
          <Route path="/group-bookings" element={<GroupBookings />} />
          <Route path="/defence-care" element={<DefenceCare />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy-notice" element={<PrivacyNotice />} />
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
