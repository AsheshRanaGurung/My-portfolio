import React from 'react'
import "./testimonials.scss"

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Ashish Paudyal",
          title: "Senior Developer",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/linkdin.png",
          desc:
            "I had worked with him in few projects in initial days and surprisingly he was able to cope with team work projects at ease.",
        },
        {
          id: 2,
          name: "Pritam Yba",
          title: "Co-Founder of DELKA",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/youtube.png",
          desc:
            "He's one of the most fun person with keen to learn and teach new tech.People should get inspired from it.",
          featured: true,
        },
        {
          id: 3,
          name: "Prajwal Das",
          title: "CEO of ALBI",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/linkdin.png",
          desc:
            "He always had been curious about the behind technology,that's what makes him good",
        },
      ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {/* <div className="imgcontainer">
                <img className="image" src="/assets/bg-1.png"/>
                </div> */}
                {data.map((d)=>(
                <div className={d.featured ?"card featured":"card"}>
                    <div className="top">
                        <img className="left" src={d.icon} alt="" />
                        <img  className="user" src={d.img} alt="" />
                        <img  className="right" src={d.icon} alt="" />
                    </div>
                    <div className="center">{d.desc}</div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>))}
            </div>
        </div>
    )
}
