import React, { useState } from 'react';
import ai from  '../../ai.webp'
import Speech_Input from '../speech/input';
import Upload_Input from '../upload/input';
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
                        <Speech_Input route={'/create'}></Speech_Input>
                        <Upload_Input route={'/create'}></Upload_Input>
                    </div>
                </div>
                <div className="bottom overflow-hidden">
                    <img src={ai} alt="Example image" width="500" height="500" loading="lazy"></img>
                </div>
            </div>
        </>
    );
};

export default Hero;