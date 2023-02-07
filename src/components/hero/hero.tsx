import React from 'react';
import ai from  '../../ai.webp'
import './hero.css';
export interface HeroProps{
    title: string;
    subtitle: string;
    btnTxt: string;
    btnUrl: string;
}

const Hero: React.FC<HeroProps> = ({title, subtitle, btnTxt, btnUrl}) => {
    return (
        <>
            <div className="hero px-4 pt-5 my-5 text-center">
                <h1 className="display-4 fw-bold">{title}</h1>
                <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">{subtitle}</p>
                <div className="form">
                    <i className="left-icon fa-solid fa-wand-magic"></i>
                  <input type="text" className="form-control form-input" placeholder="Type anything..."></input>
                  <span className="left-pan">
                    <i className="fa-solid fa-microphone"></i>
                  </span>
                </div>
                </div>
                <div className="bottom overflow-hidden">
                    <img src={ai} alt="Example image" width="700" height="500" loading="lazy"></img>
                </div>
            </div>
        </>
    );
};

export default Hero;