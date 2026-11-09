import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navii from "./Nav"
import Homee from "./Home";
import Footerr from "./footer";
import ContactPage from "./ContactUs";
import Destination from "./Destination";
import Faq from "./Faq";
// import ToursList from "./ToursList";
// import ToursSection from "./ToursSection";
import HeroBanner from "./HeroBanner";


function Mainnn(){
    return(
        <div className="page-wrapper">
            <BrowserRouter>
                <Navii/>
                <main className="main-content">
                    <Routes>
                        <Route path='/' element={<Homee/>}/>
                        <Route path='/tourslist' element={<HeroBanner/>} />
                        <Route path='/destinations' element={<Destination/>}/>
                        <Route path='/faq' element={<Faq/>}/>
                        <Route path='/contactus' element={<ContactPage/>} />
                    </Routes>
                </main>

                <Footerr/>
            </BrowserRouter>
        </div>
    )
}
export default Mainnn;