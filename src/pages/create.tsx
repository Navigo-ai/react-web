import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import data from '../session/data';
import imageBlob from '../session/data';

const Create: React.FC = () => {
    console.log(data.blob);
    const objectUrl = data.blob && data.blob instanceof Blob ? URL.createObjectURL(data.blob) : '';

    return (
        <>
            <Navbar></Navbar>
            <section>
                <img src={objectUrl} alt="Image from Blob" />
            </section>
        </>
    );
};

export default Create;
