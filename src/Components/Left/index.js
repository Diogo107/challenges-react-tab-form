import React, { Component } from 'react';
import './style.scss';
import FirstText from '../FirstText';
import SecondText from '../SecondText';
import ThirdText from '../ThirdText';
import FourthText from '../FourthText';
import Slider from 'react-slick';

export default class index extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      arrows: false,
    };
    return (
      <div>
        <div className="image">
          <img src="background.jpg" alt="void" />
          <img src="offermanager.png" alt="tool" />
        </div>
        <div class>
          <Slider {...settings}>
            <FirstText />
            <SecondText />
            <ThirdText />
            <FourthText />
          </Slider>
        </div>
      </div>
    );
  }
}
