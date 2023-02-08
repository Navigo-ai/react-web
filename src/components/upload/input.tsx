import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './input.css';

export interface ISpeech_InputProps{
    route:string;
}

const Upload_Input: React.FC<ISpeech_InputProps> = ({route}) => {
const navigate = useNavigate();
  return (
    <label>
        <input className='d-none' type="file" id="img" name="img" accept="image/*" onChange={() => navigate(route)}></input>
        <small className='m-2 pointer text-muted'>
            <i className="fa-solid fa-arrow-up-from-bracket mx-2"></i>
            Upload
        </small>
    </label>
  );
};

export default Upload_Input;