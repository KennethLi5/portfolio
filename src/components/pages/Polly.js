import React, { useState } from 'react'
import '../../App.css'
import AWS from 'aws-sdk'
import '../Polly.css'

function synthesizeSpeech(data) { // retrieve Amazon Polly audio     
    const awsKey = process.env.awsKey;
    const awsSecretKey = process.env.awsSecretKey;
    const awsVoice = process.env.awsVoice;
    const awsRegion = process.env.awsRegion;
    const awsIdentityPoolId = process.env.awsIdentityPoolId;

    // const {
    //     awsKey,
    //     awsSecretKey,
    //     awsVoice,
    //     awsRegion,
    //     awsIdentityPoolId,
    // } = require('../../config.json');

    AWS.config.region = process.env.awsRegion; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: awsIdentityPoolId,
    });


    var params = {
        OutputFormat: 'mp3',
        Text: data, 
        VoiceId: process.env.awsVoice, 
    }

    const Polly = new AWS.Polly({
        signatureVersion: 'v4',
        region: 'us-east-1',
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