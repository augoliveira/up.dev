'use client';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) var(--navy);
}

html.normal-scroll {
  scroll-behavior: auto;
}

:root {
  --background: #121216;
  --headerbg: #fff;
  --background-second: #121016;
  --first-color:  #00d9ff;
  --second-color: #5252e0;
  --text-primary: #d6d6dc;
  --text-secondary: #a9a9a9;
  --hover-color: rgb(0, 217, 255, 0.7);
  --hover-second-color: rgb(80, 82, 224, 0.7);;
  --white: #f6f2f2;
  --border-color: #0c0b0e;
  --border-second-color: #1e1e25;
  --dark-navy: #020c1b;
    --navy: #0A192F;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #FCB93D;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;
    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
}

body {
  margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--navy);
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;
}

ul {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

::-webkit-scrollbar{
  width: 12px;
  background-color: var(--border-second-color);
}
::-webkit-scrollbar-track {
    background: var(--navy);

  background:linear-gradient(135deg,#0A192F 0,#0A192F 50%,#0A192F 50%,#0A192F 100%);  /*——Change background color of scrollbar track ——*/
  -webkit-box-shadow:inset 0,5px 0,5px 0,5px #8257e5;
  border:1px solid #8257e5;
  }
::-webkit-scrollbar-thumb{
  background-color: var(--dark-slate);
    border-radius: 10px;
    background-color: var(--dark-slate);
    border: 2px solid var(--navy);
    border-radius: 10px;
  background:rgba(255,255,255,0.1);background:linear-gradient(135deg,rgba(255,255,255,0.0) 0,#6217ed 50%,#6217ed 50%,rgba(255,255,255,0.0) 100%); /*—— Scrollbar Thumb color ——*/
  -webkit-box-shadow:inset 0,5px 0,5px 2px rgba(10,155,155,0.4);
  }

:::-webkit-scrollbar-thumb:hover {
  -webkit-box-shadow:inset 0,5px 0,5px 10px rgba(0,0,0,0.4);
  background:#c9d5ea;background:linear-gradient(135deg,rgba(255,255,255,0.0) 0,#d3416f 50%,#d3416f 50%,rgba(255,255,255,0.0) 100%); /*——Scrollbar Thumb Hover color ——*/
  }
:-webkit-scrollbar-thumb:active {
  background:#c9d5ea;
  background:linear-gradient(135deg,#6f9ded 0,#d3416f 50%,#d3416f 50%,#6f9ded 100%); /*——Scrollbar Thumb Active color ——*/
  -webkit-box-shadow:inset 0,5px 0,5px 2px rgba(0,0,0,0.4);
  }

  [data-overlay-dark],
[data-overlay-light] {
  position: relative;
}

[data-overlay-dark] .container,
[data-overlay-light] .container {
  position: relative;
  z-index: 2;
}

[data-overlay-dark]:before,
[data-overlay-light]:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

[data-overlay-dark]:before {
  background: #02050b;
}

[data-overlay-light]:before {
  background: #fff;
}

[data-overlay-dark] h1,
[data-overlay-dark] h2,
[data-overlay-dark] h3,
[data-overlay-dark] h4,
[data-overlay-dark] h5,
[data-overlay-dark] h6,
[data-overlay-dark] span,
.bg-dark h1,
.bg-dark h2,
.bg-dark h3,
.bg-dark h4,
.bg-dark h5,
.bg-dark h6,
.bg-dark span,
.bg-color h1,
.bg-color h2,
.bg-color h3,
.bg-color h4,
.bg-color h5,
.bg-color h6,
.bg-color span {
  color: #fff;
}

[data-overlay-dark] p,
.bg-dark p,
.bg-color p {
  color: #dad6d6;
}

[data-overlay-dark="0"]:before,
[data-overlay-light="0"]:before {
  opacity: 0;
}

[data-overlay-dark="1"]:before,
[data-overlay-light="1"]:before {
  opacity: 0.1;
}

[data-overlay-dark="2"]:before,
[data-overlay-light="2"]:before {
  opacity: 0.2;
}

[data-overlay-dark="3"]:before,
[data-overlay-light="3"]:before {
  opacity: 0.3;
}

[data-overlay-dark="4"]:before,
[data-overlay-light="4"]:before {
  opacity: 0.4;
}

[data-overlay-dark="5"]:before,
[data-overlay-light="5"]:before {
  opacity: 0.5;
}

[data-overlay-dark="6"]:before,
[data-overlay-light="6"]:before {
  opacity: 0.6;
}

[data-overlay-dark="7"]:before,
[data-overlay-light="7"]:before {
  opacity: 0.7;
}

[data-overlay-dark="8"]:before,
[data-overlay-light="8"]:before {
  opacity: 0.8;
}

[data-overlay-dark="9"]:before,
[data-overlay-light="9"]:before,
[data-overlay-color="9"]:before {
  opacity: 0.9;
}

[data-overlay-dark="10"]:before,
[data-overlay-light="10"]:before {
  opacity: 1;
}

/* ====================== [ End Overlay ] ====================== */
/* ====================== [ Start Heading ] ====================== */
.sec-head {
  position: relative;
  margin: 0 auto 80px;
}
.sec-head h6 {
  color: #75dab4;
  font-weight: 300;
  font-size: 17px;
  text-transform: uppercase;
  letter-spacing: 14px;
  margin-bottom: 5px;
}
.sec-head h3 {
  font-size: 80px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 0 8px rgba(255, 255, 255, 0.05);
}
.sec-head .tbg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 10vw;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
  opacity: 0.3;
}
.sec-head.tr-head {
  text-align: right;
  margin-bottom: 0;
}
.sec-head.tr-head .tbg {
  text-align: left;
}
.works-header {
  min-height: 100vh;
}
.works-header.hfixd {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -999;
}
.works-header .capt h4 {
  font-weight: 200;
  font-size: 24px;
  line-height: 1.8;
}
.works-header .capt h2 {
  font-size: 60px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.works-header .capt h2 span {
  display: block;
  font-size: 20px;
  font-weight: 300;
  text-transform: capitalize;
  color: #75dab4;
}
.works-header .capt .bactxt {
  font-size: 30vw;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  text-align: center;
}

.static {
  position: static;
}

.main-content {
  background: #0c0f16;
  background-image: url(../public/grid.svg);
  position: relative;
  z-index: 3;
}
.headline {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 10vw;
}

.inset {
  position: absolute;
  inset: 0;
}
.white {
  color: white;
}
.gray {
  color: #446;
}
.full-width {
  width: 100% !important;
}
.full {
  height: 100vh;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.gradient {
  background: linear-gradient(rgba(14, 62, 151, 0.5) 50%, black);
}

`;
