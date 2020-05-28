import React from 'react';
import {Card} from 'antd';
import './index.css'
const {Meta} = Card;


export default (props)=>{
    return(
        <div className="movie">
            <Card 
                hoverable
                style={{width : 200, margin:20}}
                cover ={<img alt={props.id} src ={props.src} />}
            >
                <Meta title={props.code}/>
            </Card>
            <div className="info">
                <strong>Name</strong>  <p>{props.name}</p>
                <strong>Date</strong>  <p>{props.date}</p>
                <strong>Link</strong>  <a href={props.link} target="_blank" rel="noopener noreferrer">Go to video</a><br /><br />
                <strong>Review</strong> 
                <svg width="20" height="20" viewBox="0 0 200 200">
                    <g transform="translate(100 100)">
                        <path transform="translate(-50 -50)" fill="tomato" d="M92.71,7.27L92.71,7.27c-9.71-9.69-25.46-9.69-35.18,0L50,14.79l-7.54-7.52C32.75-2.42,17-2.42,7.29,7.27v0 c-9.71,9.69-9.71,25.41,0,35.1L50,85l42.71-42.63C102.43,32.68,102.43,16.96,92.71,7.27z"></path>
                        <animateTransform 
                            attributeName="transform" 
                            type="scale" 
                            values="1; 1.5; 1.25; 1.5; 1.5; 1;" 
                            dur="1s" 
                            repeatCount="indefinite"
                            additive="sum">      
                        </animateTransform>
                    </g>
                </svg>
                <strong><p>{props.average}</p></strong>

            </div>
        </div>
    )
};