import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import gootenClient from '../services/gooten/client';
import data from '../session/data';
import imageBlob from '../session/data';

const Create: React.FC = () => {
    const navigate = useNavigate();
    const objectUrl = data.blob && data.blob instanceof Blob ? URL.createObjectURL(data.blob) : null;

    useEffect(() => {
        if (!objectUrl) { navigate('/'); }
    }, [objectUrl, navigate]);

    return (
        <>
            <Navbar></Navbar>
            <section className="mt-5">
                <div className='d-flex justify-content-center'>
                    <div className="card" style={{width:"18em"}}>
                        <img src={objectUrl!} className="card-img-top" alt="Image from Blob" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Create;
