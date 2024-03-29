import React, { useState , useEffect} from 'react'
import '../../App.css'
import AWS from 'aws-sdk'
import '../Polly.css'

function synthesizeSpeech(data) { // retrieve Amazon Polly audio     
    const awsKey = process.env.REACT_APP_awsKey;
    const awsSecretKey = process.env.REACT_APP_awsSecretKey;
    const awsVoice = process.env.REACT_APP_awsVoice;
    const awsRegion = process.env.REACT_APP_awsRegion;
    const awsIdentityPoolId = process.env.REACT_APP_awsIdentityPoolId;

    AWS.config.region = awsRegion; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: awsIdentityPoolId,
    });


    var params = {
        OutputFormat: 'mp3',
        Text: data, 
        VoiceId: awsVoice, 
    }

    const Polly = new AWS.Polly({
        signatureVersion: 'v4',
        region: awsRegion,
        accessKeyId: awsKey,
        secretAccessKey: awsSecretKey
    })

    const signer = new AWS.Polly.Presigner(params, Polly)

    signer.getSynthesizeSpeechUrl(params, function(error, url) {
        if (error) {
            document.getElementById('result').innerHTML = error;
        } else {
            document.getElementById('audioSource').src = url;
            document.getElementById('audioPlayback').load();
            document.getElementById('result').innerHTML = "Speech ready to play.";
        }
    });
}

export default function Polly() {
    const[data,setData] = useState(null)

    function getData(val) {
        setData(val.target.value)        
    }

    return (
        <>
    <h1 className="products">Text to Speech (Amazon Polly)</h1>
    
        <p>
        <br></br>
        <p id="result">Enter text above then click Synthesize</p>
        <textarea id="text" class="textbox" rows="3" cols="80" maxLength="550" placeholder="Enter text here..." onChange={getData}></textarea>
        
        <button class="button" onClick={()=>synthesizeSpeech(data)}>Synthesize</button> 
        </p>
        
        <audio id="audioPlayback" controls>
        <source id="audioSource" type="audio/mp3" src=""></source>
        </audio>
        
    </>
    )
}