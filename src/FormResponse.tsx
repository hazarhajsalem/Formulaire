import React from 'react'
import { useLottie } from "lottie-react";
import lottie from "./lottiegif.json";
import {useNavigate} from "react-router-dom"
import { Button } from 'react-bootstrap';
import './FormResponse.css'

export  function FormResponse() {
    const navigate = useNavigate();

    const options = {
        animationData: lottie,
        loop: true
    };

    const { View } = useLottie(options);

    const click =() =>
        {
            navigate("/Recriteur");
        }

    return(
    <div className="formResp">
        <div className="lottie">
                {View}
                <p className='welcome'>Welcome </p>
                <p className='welcome1'>to our family</p>
        </div>
       
        <div >
        <Button className="btn1" onClick={()=>{click()}} > Retouner au formulaire </Button>       
        </div>
    </div>
    )
}