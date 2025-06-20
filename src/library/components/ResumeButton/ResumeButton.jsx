import React from 'react';
import styled from 'styled-components';

const ResumeButton = ({link}) => {
  return (
    <StyledWrapper>
      <a href={link} target='_blank' rel='nooperner noreferrer' aria-label='Click to view my resume'>
        <div className="container-button" aria-label='ResumeButton'>
          <div className="hover bt-1" />
          <div className="hover bt-2" />
          <div className="hover bt-3" />
          <div className="hover bt-4" />
          <div className="hover bt-5" />
          <div className="hover bt-6" />
          <button aria-label='ResumeButton' />
        </div>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container-button {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "bt-1 bt-2 bt-3"
      "bt-4 bt-5 bt-6";
    position: relative;
    perspective: 800;
    padding: 0;
    width: 135px;
    height: 47px;
    transition: all 0.3s ease-in-out;
  }

  .container-button:active {
    transform: scale(0.95);
  }

  .hover {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 200;
  }

  .bt-1 {
    grid-area: bt-1;
  }

  .bt-2 {
    grid-area: bt-2;
  }

  .bt-3 {
    grid-area: bt-3;
  }

  .bt-4 {
    grid-area: bt-4;
  }

  .bt-5 {
    grid-area: bt-5;
  }

  .bt-6 {
    grid-area: bt-6;
  }

  .bt-1:hover ~ button {
    transform: rotateX(15deg) rotateY(-15deg) rotateZ(0deg);
    box-shadow: -2px -2px #18181888;
  }

  .bt-1:hover ~ button::after {
    animation: shake 0.5s ease-in-out 0.3s;
    text-shadow: -2px -2px #18181888;
  }

  .bt-3:hover ~ button {
    transform: rotateX(15deg) rotateY(15deg) rotateZ(0deg);
    box-shadow: 2px -2px #18181888;
  }

  .bt-3:hover ~ button::after {
    animation: shake 0.5s ease-in-out 0.3s;
    text-shadow: 2px -2px #18181888;
  }

  .bt-4:hover ~ button {
    transform: rotateX(-15deg) rotateY(-15deg) rotateZ(0deg);
    box-shadow: -2px 2px #18181888;
  }

  .bt-4:hover ~ button::after {
    animation: shake 0.5s ease-in-out 0.3s;
    text-shadow: -2px 2px #18181888;
  }

  .bt-6:hover ~ button {
    transform: rotateX(-15deg) rotateY(15deg) rotateZ(0deg);
    box-shadow: 2px 2px #18181888;
  }

  .bt-6:hover ~ button::after {
    animation: shake 0.5s ease-in-out 0.3s;
    text-shadow: 2px 2px #18181888;
  }

  .hover:hover ~ button::before {
    background: transparent;
  }

  .hover:hover ~ button::after {
    content: "Resume";
    top: -150%;
    transform: translate(-50%, 0);
    font-size: 34px;
    color: #f19c2b;
  }

  button {
    position: absolute;
    padding: 0;
    width: 135px;
    height: 47px;
    background: transparent;
    font-size: 17px;
    font-weight: 900;
    border: 3px solid #f39923;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
  }

  button::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 135px;
    height: 47px;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    z-index: -1;
  }

  button::after {
    content: "Resume";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 135px;
    height: 47px;
    background-color: transparent;
    font-size: 24px;
    font-weight: 900;
    line-height: 47px;
    color: #f5ca3c;
    border: none;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    z-index: 2;
    font-weight: 900;
  }

  @keyframes shake {
    0% {
      left: 45%;
    }

    25% {
      left: 54%;
    }

    50% {
      left: 48%;
    }

    75% {
      left: 52%;
    }

    100% {
      left: 50%;
    }
  }`;

export default ResumeButton;
