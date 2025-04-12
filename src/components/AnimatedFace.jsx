import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="bo">
        <div className="face">
          {" "}
          <div className="earL" />
          <div className="earR" />
          <div className="eyeL" />
          <div className="eyeR" />
          <div className="hairs" />
          <div className="nose" />
          <div className="mouth" />
          <div className="smileL">
            <svg
              xmlSpace="preserve"
              viewBox="0 0 65 65"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="blurMe">
                <feGaussianBlur in="SourceGraphic" stdDeviation={2} />
              </filter>
              <path
                d="M25 19c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z"
                fill="#EF7F71"
                filter="url(#blurMe)"
              />
              <path
                d="M35 35c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z"
                fill="#EF7F71"
                filter="url(#blurMe)"
              />
              <path
                d="M45 50c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z"
                fill="#EF7F71"
                filter="url(#blurMe)"
              />
            </svg>
          </div>
          <div className="smileR">
            <svg
              xmlSpace="preserve"
              viewBox="0 0 65 65"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="blurMe">
                <feGaussianBlur in="SourceGraphic" stdDeviation={2} />
              </filter>
              <path
                d="M25 19c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z"
                fill="#EF7F71"
                filter="url(#blurMe)"
              />
              <path
                d="M35 35c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z"
                fill="#EF7F71"
                filter="url(#blurMe)"
              />
              <path
                d="M45 50c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z"
                fill="#EF7F71"
                filter="url(#blurMe)"
              />
            </svg>
          </div>
          <div className="snow">
            <div className="mountain-cap-1" />
            <div className="mountain-cap-2" />
            <div className="mountain-cap-3" />
            <div className="mountain-cap-4" />
            <div></div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .face {
    position: relative;
    width: 300px;
    height: 350px;
    background-color: #6c757d;
    background: linear-gradient(180deg, #452824 184px, #f2bbad 34px);
    /* transform: translateX(0px); */
    border-top-right-radius: 250px 350px;
    border-top-left-radius: 250px 350px;
    border-bottom-left-radius: 250px 250px;
    border-bottom-right-radius: 250px 250px;
    border: 5px solid black;
  }

  .hairs {
    height: 180px;
    background-color: #f2bbad;
    position: absolute;
    width: 290px;
    border-top-right-radius: 250px 350px;
    border-top-left-radius: 250px 350px;
    top: 25px;
  }

  .snow {
    transform: translateX(150px);
    transform-origin: right;
  }

  .mountain-cap-1,
  .mountain-cap-2,
  .mountain-cap-3,
  .mountain-cap-4 {
    position: absolute;
    top: 20px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 40px solid #452824;
  }

  .mountain-cap-1 {
    left: -65px;
  }

  .mountain-cap-2 {
    left: -35px;
  }

  .mountain-cap-3 {
    left: -5px;
  }

  .mountain-cap-4 {
    left: 25px;
  }

  .earL {
    border-top-right-radius: 250px 350px;
    border-top-left-radius: 250px 350px;
    border-bottom-left-radius: 250px 250px;
    border-bottom-right-radius: 250px 250px;
    height: 70px;
    width: 50px;
    background-color: #f2bbad;
    position: absolute;
    left: -30px;
    top: 150px;
    z-index: -1;
    border: 5px solid black;
  }

  .earR {
    border-top-right-radius: 250px 350px;
    border-top-left-radius: 250px 350px;
    border-bottom-left-radius: 250px 250px;
    border-bottom-right-radius: 250px 250px;
    height: 70px;
    width: 50px;
    background-color: #f2bbad;
    position: absolute;
    right: -30px;
    top: 150px;
    z-index: -4;
    border: 5px solid black;
  }

  .eyeR {
    border-top-right-radius: 250px 350px;
    border-top-left-radius: 250px 350px;
    border-bottom-left-radius: 250px 250px;
    border-bottom-right-radius: 250px 250px;
    height: 10px;
    width: 10px;
    background-color: black;
    position: absolute;
    left: 128px;
    top: 120px;
    z-index: 2;
    animation: blinkR 5s infinite linear;
  }

  .eyeL {
    border-top-right-radius: 250px 350px;
    border-top-left-radius: 250px 350px;
    border-bottom-left-radius: 250px 250px;
    border-bottom-right-radius: 250px 250px;
    height: 10px;
    width: 10px;
    background-color: black;
    position: absolute;
    right: 128px;
    top: 120px;
    z-index: 2;
    animation: blinkL 5s infinite linear;
  }

  .nose {
    background: #fefefe;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: #0f0;
    position: absolute;
    top: 220px;
    left: 140px;
    scale: 1 1;
    transition: all ease-in-out 0.3s;
    z-index: 100;
  }

  .nose:hover {
    scale: 1 1.25;
    top: 236px;
  }

  .nose:active {
    animation: propeller 0.5s infinite linear;
    transform-origin: 50% -55px;
    scale: 1 1.25;
    top: 220px;
    animation-delay: 0.5s;
  }

  @keyframes propeller {
    to {
      transform: rotateZ(360deg);
    }
  }

  @keyframes blinkL {
    98% {
      height: 10px;
      width: 10px;
      right: 128px;
      top: 120px;
    }

    100% {
      height: 3px;
      width: 11px;
      right: 126px;
      top: 123px;
    }
  }

  @keyframes blinkR {
    98% {
      height: 10px;
      width: 10px;
      left: 128px;
      top: 120px;
    }

    100% {
      height: 3px;
      width: 11px;
      left: 126px;
      top: 123px;
    }
  }

  .nose:before {
    content: "";
    position: absolute;
    top: -64px;
    left: 50%;
    border: 10px solid transparent;
    border-bottom: 62px solid #fefefe;
    transform: translateX(-50%);
  }

  .mouth {
    position: absolute;
    top: 300px;
    left: 140px;
    background: #a36655;
    width: 25px;
    height: 18px;
    border: 5px solid black;
    border-radius: 50%;
    transition: all 0.3s linear;
  }

  .face:active .mouth {
    top: 290px;
    width: 60px;
    height: 25px;
    left: 123px;
    border-radius: 7px 7px 130px 130px;
  }

  .face:active .smileL {
    height: 30px;
    width: 30px;
  }

  .face:active .smileR {
    height: 30px;
    width: 30px;
  }

  .bo {
    z-index: 10;
    zoom: 0.8;
  }

  .smileL {
    position: absolute;
    height: 0px;
    width: 0px;
    rotate: 310deg;
    top: 180px;
    left: 70px;
    transition: all 0.1s linear;
  }

  .smileR {
    position: absolute;
    height: 0px;
    width: 0px;
    rotate: 310deg;
    top: 180px;
    right: 70px;
    transition: all 0.1s linear;
  }
`;

export default Card;
