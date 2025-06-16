
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import AllCourses from "./pages/AllCourses";
import ContactUs from "./pages/ContactUs";
import MiniLandingPage from "./pages/MiniLandingPage";
;
function App() {
  return (
    <div>
  
      <BrowserRouter>
         <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/about'  element={<About/>}/>
          <Route path='/courses'  element={<Courses/>}/>
          <Route path='/all-courses'  element={<AllCourses/>}/>
          <Route path='/contact-us'  element={<ContactUs/>}/>
          <Route path='/feedback'  element={<MiniLandingPage/>}/>
         </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
