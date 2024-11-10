import { Button } from "react-bootstrap";
import "./Navigation.css"
import image from '../photos/NavPhoto.jpg'
import image2 from '../photos/NavPhoto2.jpg'

function Navigation () {
    return(
        <div id="nav">
            <nav>
                <ul>
                    <li className="button"><a href="#about-us">About us</a></li>
                    <li className="button"><a href="#trainers">Trainers</a></li>
                    <li className="button"><a href="#subscription">Subscripton</a></li>
                    <li className="button"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="container-photo">
                <div className="box-photo first">
                    <img src={image} alt="NavigationPhoto" />
                    </div>
                <div className="box-photo second">
                    <img src={image2} alt="NavigationPhoto" />
                    </div>
            </div>
        </div>
    );
}

export default Navigation;