import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';


import AboutUs from './pages/AboutUs';
import FinancialHighlights from './pages/FinancialHighlights';
import CustomerManagement from './pages/CustomerManagement';
import InvestorInformation from './pages/InvestorInformation';
import NewConnection from './pages/NewConnection';
import Tenders from './pages/Tenders';
import MediaCenter from './pages/MediaCenter';
import Helpline from './pages/Helpline';
import RnDDepartment from './pages/RnDDepartment';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/financial-highlights" element={<FinancialHighlights />} />
        <Route path="/customer-management" element={<CustomerManagement />} />
        <Route path="/investor-information" element={<InvestorInformation />} />
        <Route path="/new-connection" element={<NewConnection />} />
        <Route path="/tenders" element={<Tenders />} />
        <Route path="/media-center" element={<MediaCenter />} />
        <Route path="/helpline-complaints" element={<Helpline />} />
        <Route path="/rnd-department" element={<RnDDepartment />} />
      </Routes>
    </Router>
  );
}

export default App;
