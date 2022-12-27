'use client';
import React from "react";
import Image from 'next/image'
import Link from "next/link";
import addParlx from "../../common/addParlx";
import initIsotope from "../../common/initIsotope";
import Typewriter from "typewriter-effect";



const Demos = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
  }, [fixedHeader, MainContent]);
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
      addParlx();
      document.querySelector("body").style.backgroundColor = "#121214";
    }
  }, [pageLoaded]);
  return (
    <>
      <style jsx>
        {`
          .masonery .item-img {
            position: relative;
            overflow: hidden;
          }

          .masonery .gallery .items {
            padding: 0 40px;
            margin-top: 80px;
            text-align: center;
          }

          .masonery .gallery .items h6 {
            margin-top: 25px;
            font-size: 17px;
            font-weight: 400;
            font-family: "Barlow Condensed", sans-serif;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 3px;
          }

          .masonery .gallery .items .item-img:hover img {
          }

          .masonery .item-img:hover .tlinks {
            opacity: 1;
          }
          .masonery .item-img .tlinks {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all 0.4s;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            padding: 0 40px;
          }
          .masonery .item-img .tlinks a {
            padding: 14px 20px;
            border-radius: 5px;
            background: #32363e;
            color: #fff;
            font-size: 14px;
            font-weight: 500;
            margin: 5px 0;
          }
          .masonery .item-img .tlinks a:last-of-type {
            background: #75dab4;
            color: #181b21;
            margin-left: 5px;
          }

          .masonery .item-img .new {
            padding: 10px 30px;
            background: #75dab4;
            position: absolute;
            top: 0;
            left: -60px;
            width: 200px;
            transform: rotate(-30deg);
            font-size: 13px;
          }
        `}
      </style>

      <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign bg-img"
        style={{ zIndex: -1,

        width: "100vw",
        height: "100vh" }}
        data-overlay-dark="4"
      >
<Image
          src="/bg-slide2.jpg"
          alt="Mountains wit.jpgh snow"
          layout="fill"
          objectFit='cover'
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                <h2
                    className="cta-5-title"
                    style={{ fontFamily: `Montserrat, sans-serif;` }}
                  >
                    <font
                      className="klickart-font"
                      style={{ color: `#251867; };` }}
                    >
                      <b className="medium-b">O que a </b>
                      <font
                        className="klickart-font"
                        style={{ color: `rgb(255, 255, 255);` }}
                      >
                        <b className="medium-b">UP</b>
                      </font>
                      <b className="medium-b"> faz?</b>
                    </font>
                  </h2>
                  <p>
                  Nós cuidamos do seu futuro, para caminharmos juntos sempre.
                  </p>

                <Typewriter
                    options={{
                      wrapperClassName: "color-font fw-600",
                      strings: [
                        "Marca",
                        "Campanha",
                        "Impressos",
                        "Sites e aplicativos",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                    loop={true}
                    onInit={(typewriter) => {
                      typewriter;
                    }}
                  />
                  <Link href="/home/home2-dark" className="btn-curve btn-bord btn-lit mt-30">
                              <span>Agência de conteúdo</span>
                          </Link>
                  </div>
                <div className="bactxt custom-font valign">
                  <span className="full-width" style={{ color: "transparent" }}>
                    dev
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main-content" ref={MainContent}>
        <section className="masonery section-padding sub-bg">
          <div className="container-fluid">
            <div className="sec-head custom-font text-center">
              <span className="tbg">O que fazemos?</span>
            </div>


          </div>
        </section>
        <footer className="footer-half sub-bg">
          <div className="container">
            <div className="copyrights text-center mt-0">
            <p>
                COPYRIGHT © 2022 UP EXPERT | DESENVOLVIDO POR |{' '}
                <Link href="https://upexpert.com.br/">
                  {' '}
                  Agência full service up.expert
                </Link>
                .
              </p>
            </div>
          </div>
        </footer>
      </div>
      </>
  );
};

export default Demos;
