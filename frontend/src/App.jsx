import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './components/commons/Navbar'
import './index.css'
import Footer from './components/commons/Footer'
import Landing from './pages/Landing1/Landing1'
import About from './pages/About/About'
import Contact  from './pages/Contact/Contact'
import Policy from './pages/Footer/PrivacyPolicy'
import TofServices from './pages/Footer/TermsOfServices'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/Signup'
import Service from './pages/Services/Services'
import Predict from './pages/Input/Input'
import Result from './pages/Result/Result'
import Doctor from './pages/Doctor/Doctor'
import ProtectedRoute from './components/Landing/ProtectedRoute'

function App() {
  return (
    <>
    {/* patel */}
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element = {<Landing/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/policy" element = {<Policy/>} />
        <Route path="/terms" element = {<TofServices/>} />
        <Route path="/signin" element = {<SignIn/>} />
        <Route path="/signup" element = {<SignUp/>} />
        <Route element = {<ProtectedRoute/>}>
        <Route path="/services" element = {<Service/>} />
        <Route path="/input" element = {<Predict/>} />
        <Route path="/result" element = {<Result/>} />
        <Route path="/doctor" element = {<Doctor/>} />
        </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
