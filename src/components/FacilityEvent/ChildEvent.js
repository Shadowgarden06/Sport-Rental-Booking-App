import React, { useEffect } from "react";
import "./CuuTao.css";
import { useNavigate } from "react-router-dom";
import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";
import img4 from "./image/img4.jpg";
import img5 from "./image/img5.jpg";
import img6 from "./image/img6.jpg";



function CurrentName(props) {
  useEffect(() => {
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    const nextSlide = () => {
      const items = document.querySelectorAll(".item");
      document.querySelector(".slide").appendChild(items[0]);
    };

    const prevSlide = () => {
      const items = document.querySelectorAll(".item");
      document.querySelector(".slide").prepend(items[items.length - 1]);
    };

    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);

    return () => {
      next.removeEventListener("click", nextSlide);
      prev.removeEventListener("click", prevSlide);
    };
  }, []);
  return (
    <div className="middleThuan">
    <div className="container">
      <div className="slide">
        <div
          className="item"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="content">
            <div className="name">
              Basketball court for everyone
            </div>
            <div className="des">
              Come and play as a team, or register a team to participate in
              weekly tournaments every Monday, Thursday and Saturday at 7pm.
            </div>
            
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url(${img2})`}}
        >
          <div className="content">
            <div className="name">
              Badminton court for everyone
            </div>
            <div className="des">
              Sign up as a pair or individually for cheaper group play from 4pm
              to 7pm.
              Open court - free in
            </div>
            
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <div className="content">
            <div className="name">Open free stadium baseball</div>
            <div className="des">
              Go in and play, don't worry , just practice
              Open court - free in
            </div>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url(${img4})`}}
        >
          <div className="content">
            <div className="name">practice and became a famous one</div>
            <div className="des">
              Do more earn more, everything on you
              Open court - free in
            </div>
            
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url(${img5})` }}
        >
          <div className="content">
            <div className="name">Basketball court for the newbie</div>
            <div className="des">
              Handle like Kyrie, Jump like James, be king be magic
              Open court - free in
            </div>
            
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url(${img6})` }}
        >
          <div className="content">
            <div className="name">Go GO Go</div>
            <div className="des">
              Left foot Messi, Right foot Ronaldo - Be the goat 
              Open court - free in
            </div>
           
          </div>
        </div>
      </div>

      <div className="button">
        <button className="prev">
          <i>Pre</i>
        </button>
        <button className="next">
          <i>Nex</i>
        </button>
      </div>
    </div>
    </div>
  );
}

export default CurrentName;
