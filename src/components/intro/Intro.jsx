import {init} from 'ityped';
import "./intro.scss"
import {useEffect,useRef} from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default function Intro() {
const textRef=useRef();
useEffect(()=>{
  init(textRef.current,{
    showCursor:true,
    backDelay:1500,
    backSpeed:60,
    strings:["Frontend developer","React Developer","AWS solution Architect","Blog creator"],
  });
},[]);

    return (
          <div className="intro" id="intro"> 
            <div className="left">
              <div className="imgContainer">
                  <img src="assets/cartoon.png" alt="image"/>
              </div>
            </div>
            <div className="right">
              <div className="wrapper">
                <h3>Hi there,I'm</h3>
                <h2>Ashesh Rana Gurung</h2>
                <h4>Freelance <span ref={textRef}></span></h4>
                <div className="button">
                <a href="assets/cv.png" download><button>Download CV</button></a>
           <a href="#contact"><button >Hire me.</button></a>
                </div>
              </div>
              <a href="#portfolio" className="pointer"><img src="assets/arrow.png"/> </a>
            </div><MessengerCustomerChat
    pageId="108399901581560"
    appId="865191734143704"
    
  />
          </div>    
    )
}
