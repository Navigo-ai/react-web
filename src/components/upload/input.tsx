import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../session/data';
import imageBlob from '../../session/data';

import './input.css';

export interface ISpeech_InputProps{
    route:string;
}

const Upload_Input: React.FC<ISpeech_InputProps> = ({route}) => {
    const navigate = useNavigate();

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        const file = event.target.files![0];

        reader.onload = (event: any) => {
          data.blob = new Blob([event.target.result], { type: file.type })
          navigate(route);
        };
      
        reader.readAsArrayBuffer(file);
    };

    return (
        <label>
            <input className='d-none' type="file" id="img" name="img" accept="image/*" onChange={handleImageUpload}></input>
            <small className='m-2 pointer text-muted'>
                <i className="fa-solid fa-arrow-up-from-bracket mx-2"></i>
                Upload my own image
            </small>
        </label>
    );
};

export default Upload_Input;
