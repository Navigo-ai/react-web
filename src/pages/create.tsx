import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import data from '../session/data';

const Create: React.FC = () => {
  const navigate = useNavigate();
  const objectUrl =
    data.blob && data.blob instanceof Blob
      ? URL.createObjectURL(data.blob)
      : null;

  useEffect(() => {
    if (!objectUrl) {
      navigate('/');
    }
  }, [objectUrl, navigate]);

  return (
    <>
      <Navbar />
      <section className='mt-5'>
        <div className='d-flex justify-content-center'>
          <div className='card' style={{width: '18em'}}>
            <img src={objectUrl!} className='card-img-top' alt='Blob' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Create;
