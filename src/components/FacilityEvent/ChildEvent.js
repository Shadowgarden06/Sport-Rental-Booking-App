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
    <div>
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
            <button>See More</button>
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
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <div className="content">
            <div className="name">Hinh 3</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url(${img4})`}}
        >
          <div className="content">
            <div className="name">Hinh 4</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url(${img5})` }}
        >
          <div className="content">
            <div className="name">Hinh 5</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url(${img6})` }}
        >
          <div className="content">
            <div className="name">Hinh 6</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <button>See More</button>
          </div>
        </div>
      </div>

      <div className="button">
        <button className="prev">
          <i>pre</i>
        </button>
        <button className="next">
          <i>next</i>
        </button>
      </div>
    </div>
    </div>
  );
}

export default CurrentName;
