import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import { useEffect, useState } from 'react';
import Loading from './components/Loading/Loading';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsCondition from './pages/TermsCondition/TermsCondition';
import Imprint from './pages/Imprint/Imprint';
import FourZeroFour from './pages/404/FourZeroFour';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/Forgot-Password/ForgotPassword';
import Contact from './pages/Contact/Contact';
import DotRing from './components/DotRing/DotRing';

function App() {
 
  const [loading, setLoading] = useState(false);

  useEffect(() =>  {
    setLoading(true);
    setTimeout(() => {
       setLoading(false);
    }, 1000)
  }, []);

  return (
  <>
   <DotRing/>
    <Router>
      {
        loading ? (
          <div className="loading_container">
            <Loading/>
          </div>
        ):(
      
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/terms&condition" element={<TermsCondition/>}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
        <Route path="/imprint" element={<Imprint/>}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<FourZeroFour/>}></Route>
      </Routes>
      )}
    </Router>
    </>
  );
}

export default App;
