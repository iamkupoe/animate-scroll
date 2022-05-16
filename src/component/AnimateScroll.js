import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function ScrollAnimate() {
  Aos.init();
  return (
    <div className="App">
    <div data-aos="fade-down"> im a div </div>
    <div data-aos="fade-up-right">go to school</div>
    <div data-aos="fade-left">i am here</div>
    </div>

  );
}

export default ScrollAnimate;
