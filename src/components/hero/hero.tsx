import React from 'react';
import ai from '../../ai.webp';
import SpeechInput from '../speech/input';
import UploadInput from '../upload/input';
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
                        <SpeechInput route={btnUrl} btnTxt={btnTxt}></SpeechInput>
                        <UploadInput route={btnUrl}></UploadInput>
                    </div>
                </div>
                <div className="bottom overflow-hidden">
                    <img src={ai} alt="AI" width="500" height="500" loading="lazy"/>
                </div>
            </div>
        </>
    );
};

export default Hero;