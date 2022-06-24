import{Person,Mail} from "@material-ui/icons"
import"./contact.scss"
import {useState} from 'react';
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{faReact,
    faFacebook,faInstagram,faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    const[message,setMessage]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
           
               <div className="left">
                    <img src="/assets/bg-1.png"/>
               </div>
               <div className="right">
                    <form onSubmit={handleSubmit}>
                    <h2>Contact.</h2>
                   <div className="details"> <Person className="icon"/>
                         <span className="space">+977-9864014315</span>
                         <Mail className="icon"/>
                         <span>ashesh7272@gmail.com</span></div>
                    <   div className="social-container">
                            <a href="https://www.facebook.com/ashesh.ranagurung/" className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x"/>
                            </a>
                            <a href="https://www.instagram.com/eshh.rana/" className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                            </a>
                            <a href="https://github.com/VeNom198" className="github social">
                                <FontAwesomeIcon icon={faGithub} size="2x"/>
                            </a>
                        </div>
                        
                        <input type="text" placeholder="Email"/>
                        <textarea placeholder="message"></textarea>
                        
                        <button type="submit">Send</button>
                        {message && <span>Got the msg.I'll reply you ASAP:)</span>}
                    </form>
                    <div className="footer"> 
                        &copy; 2021_Ashesh,Built with ReactJs   <FontAwesomeIcon className="react" icon={faReact} size="1x"/>
                    </div>
               </div>
        
        </div>
    )
}
