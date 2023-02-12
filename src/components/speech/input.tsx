import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './input.css';

export interface ISpeechInputProps{
    btnTxt: string;
    route:string;
}

const SpeechInput: React.FC<ISpeechInputProps> = ({btnTxt, route}) => {
    const [useSpeech, setUseSpeech] = useState(false);
    const [text, setText] = useState('');
    const recognition = useRef<any | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        recognition.current = new ((window as any).webkitSpeechRecognition)();
        recognition.current.continuous = true;
        recognition.current.interimResults = true;
        recognition.current.lang = 'en-US';

        recognition.current.onresult = (event : any) => {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    setText(text + transcript);
                    setUseSpeech(false);
                    recognition.current?.stop();
                } else {
                    interimTranscript += transcript;
                    setText(interimTranscript);
                }
            }
        };

        return () => {
            recognition.current?.abort();
        };
  }, [text]);

  const handleClick = () => {
    if (!useSpeech) {
      recognition.current?.start();
      setUseSpeech(true);
    } else {
      recognition.current?.stop();
      setUseSpeech(false);
    }
  };
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="form speech-input">
      {text.length < 20 && <i className="left-icon fa-solid fa-wand-magic"></i>}
      <input type="text" maxLength={99} className="form-control form-input" placeholder="Imagine..." value={text} onChange={handleChange}></input>
      {text && !useSpeech ? (
        <span id='create-button'>
            <button className="btn btn-primary" onClick={() => navigate(route)}>{btnTxt}</button>
        </span>
      ) : (
        <span className="mic" onClick={handleClick}>
          {!useSpeech && <i className="fa-fw fa-solid fa-microphone"></i>}
          { useSpeech && <i className="spinner fa-solid fa-circle-notch"></i>}
        </span>
      )}
    </div>
  );
};

export default SpeechInput;
