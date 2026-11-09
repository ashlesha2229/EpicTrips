import '../css/Destination.css'
import wallpaper from '../images/ContactUsWallpaper.png';
import Destinations from './Destinationlist';
import StayConnected from './StayConnected';
function Destination(){
    return(
        <>
        <div className="destination-page">
            <header
            className="destination-hero"
            style={{backgroundImage: `url(${wallpaper})` } }
            >
                <div className="dest-overlay"></div>
                <div className="dest-content">
                    <nav className="crumb">
                    <a href="/">Home</a>
                    <span> / </span>
                    <span>Destination Details</span>  
                    </nav>
                </div>
            </header>
        </div>
        <Destinations/>
        <StayConnected/>
        </>
    )
}
export default Destination;