import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png/";
import image4 from "../../assets/image4.png/";
import image5 from "../../assets/image5.png/";
import image6 from "../../assets/image6.png/";
import image7 from "../../assets/image7.png/";

import { Link } from "react-router-dom";
import style from "../index.module.css";


export default function Galery() {

  return (
    <>
      <div className={style.galery}>
        <Link to="/modalidades/1" className={style.image1}>
          {" "}
          <img
            src={image1}
            alt=""
            data-aos-duration="1000"
            data-aos="fade-down-right"
          />
        </Link>
        <Link to="/modalidades/2" className={style.image2}>
          {" "}
          <img
            src={image2}
            alt=""
            data-aos-duration="1000"
            data-aos="fade-down-left"
          />
        </Link>
        <Link to="/modalidades/3" className={style.image3}>
          {" "}
          <img
            src={image3}
            alt=""
            data-aos-duration="1000"
            data-aos="fade-right"
          />
        </Link>
        <Link to="/modalidades/4" className={style.image4}>
          {" "}
          <img
            src={image4}
            alt=""
            data-aos-duration="1000"
            data-aos="fade-left"
          />
        </Link>
        <Link to="/modalidades/5" className={style.image5}>
          {" "}
          <img
            src={image5}
            alt=""
            data-aos-duration="1000"
            data-aos="fade-right"
          />
        </Link>
        <Link to="/modalidades/6" className={style.image6}>
          {" "}
          <img
            src={image6}
            alt=""
            data-aos-duration="1000"
            data-aos="fade-left"
          />
        </Link>
        <Link to="/modalidades/7" className={style.image7}>
          {" "}
          <img
            src={image7}
            alt=""
            data-aos-duration="1000"
            data-aos="fade-up"
          />
        </Link>
      </div>
    </>
  );
}

