import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import './AppTranslatorVoice.scss';
// import { useEffect, useState } from 'react';

export default function AppTranslatorVoice() {
    const [text, setText] = useState('')
    const [voices, setVoices] = useState([]);
    const [lang, setLang] = useState('');

    console.log(text)
    useEffect(() => {
        // console.log("useEffect")
        // localStorage.setItem("records", JSON.stringify(records))
    }, [text])

    // // Init SpeechSynth API
    const synth = window.speechSynthesis;

    // // DOM Elements
    // const textForm = document.querySelector('form');
    // const textInput = document.querySelector('#text-input');
    // const voiceSelect = document.querySelector('#voice-select');
    // const rate = document.querySelector('#rate');
    // const rateValue = document.querySelector('#rate-value');
    // const pitch = document.querySelector('#pitch');
    // const pitchValue = document.querySelector('#pitch-value');
    // const body = document.querySelector('body');

    // //Browser identifier
    // // Firefox 1.0+
    // var isFirefox = typeof InstallTrigger !== 'undefined';

    // // Chrome 1+
    // var isChrome = !!window.chrome && !!window.chrome.webstore;

    // // Init voices array
    // let voices = [];

    // const getVoices = () => {
    //     voices = synth.getVoices();

    //     // Loop through voices and create an option for each one
    //     voices.forEach(voice => {
    //         // Create option element
    //         const option = document.createElement('option');
    //         // Fill option with voice and language
    //         option.textContent = voice.name + '(' + voice.lang + ')';

    //         // Set needed option attributes
    //         option.setAttribute('data-lang', voice.lang);
    //         option.setAttribute('data-name', voice.name);
    //         voiceSelect.appendChild(option);
    //     });
    // };



    // //Line 35, 36 causes voice list duplication
    // if (synth.onvoiceschanged !== undefined) {
    //     synth.onvoiceschanged = getVoices;
    // }

    // // //Fix for duplication, run code depending on the browser
    // // if (isFirefox) {
    // //     getVoices();
    // // }
    // // if (isChrome) {
    // //     if (synth.onvoiceschanged !== undefined) {
    // //         synth.onvoiceschanged = getVoices;
    // //     }
    // // }

    // Speak
    const speak = () => {
        // Check if speaking
        if (synth.speaking) {
            console.error('Already speaking...');
            return;
        }
        if (text.value !== '') {
            // Add background animation
            // body.style.background = '#141414 url(img/wave.gif)';
            // body.style.backgroundRepeat = 'repeat-x';
            // body.style.backgroundSize = '100% 100%';

            // Get speak text
            const speakText = new SpeechSynthesisUtterance(text.text);

            // Speak end
            speakText.onend = e => {
                console.log('Done speaking...');
                // body.style.background = '#141414';
            };

            // Speak error
            speakText.onerror = e => {
                console.error('Something went wrong');
            };

            // // Selected voice
            // const selectedVoice = voices[0].getAttribute('name');
            // WORKS!!!
            // const selectedVoice = voices[9].name;
            const selectedVoice = voices[9].name;

            // function selectedVoiceFunction() {
            //     let value
            //     for(let i=0; i<voices.length; i++){
            //         if(voices[i].default === true){
            //             value = voices[i].name
            //         }
            //     }
            //     // speakText.voice === value;
            //     console.log(value)
            // }

            // selectedVoiceFunction();

            console.log(lang)

            // const selectedVoice = voices[9].name

            // // Loop through voices
            voices.forEach(voice => {
                if (voice.name === selectedVoice) {
                    speakText.voice = voice;
                }
            });

            // Set pitch and rate
            // speakText.rate = rate.value;
            // speakText.pitch = pitch.value;
            // Speak
            synth.speak(speakText);
        }
    };

    // EVENT LISTENERS

    // // Text form submit
    // textForm.addEventListener('submit', e => {
    //   e.preventDefault();
    //   speak();
    //   textInput.blur();
    // });

    // // Rate value change
    // rate.addEventListener('change', e => (rateValue.textContent = rate.value));

    // // Pitch value change
    // pitch.addEventListener('change', e => (pitchValue.textContent = pitch.value));

    // // Voice select change
    // voiceSelect.addEventListener('change', e => speak());



    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////


    useEffect(() => {
        const synth = window.speechSynthesis;

        const getVoices = () => {
            const availableVoices = synth.getVoices();
            setVoices(availableVoices);
        };

        synth.addEventListener('voiceschanged', getVoices);
        getVoices();

        return () => {
            synth.removeEventListener('voiceschanged', getVoices);
        };
    }, []);


    function handleSubmit(e) {
        e.preventDefault();
        // console.log(text.text)
        console.log(voices)
        // console.log(voices[0].default) // default tells if languge is selected
        // console.log(voices[0].name) // default tells if languge is selected
        speak();
        // textInput.blur();

        // WORKS!!!
        // let utteranceInit = new SpeechSynthesisUtterance(text.text)
        // utteranceInit.lang = "fr-FR";
        // speechSynthesis.speak(utteranceInit)
    }

    function handleChange(event) {
        const { name, value } = event.target
        setText(prevRec => {
            // console.log(event.target.text)
            // console.log(event.target)
            return {
                ...prevRec,
                id: nanoid(),
                [name]: value,
            }
        })
    }

    const handleSelect = (event) => {
        // console.log(event.target.value)
        const selectedOption = event.target.value
        setLang(selectedOption)
        console.log("LANG ++++++++ "+lang)
    }

    return (
        <form className='speak-wrapper'
            onSubmit={handleSubmit}
        >
            <textarea
                className='textarea'
                placeholder='text here'
                name="text"
                value={text.text}
                onChange={handleChange}
            ></textarea>

            <div className="form-group">
                <select
                    // id="voice-select"
                    defaultValue={lang}
                    onChange={handleSelect}
                >
                    {voices.map((voice, index) => (
                        <option

                            key={index}
                            data-lang={voice.lang}
                            data-name={voice.name}
                        >
                            {`${voice.name} (${voice.lang})`}
                        </option>
                    ))}
                </select>
            </div>

            <button>speak</button>
        </form>
    )
}