import React,{useState, useEffect} from 'react';
import './index.css'

function elementInViewport(el){
    const rect = el.getBoundingClientRect();
    return(
        rect.top >= 0 && rect.left >=0 && rect.top <= (
            window.innerHeight || document.documentElement.clientHeight
        )
    )
}

export default (props) =>{
    const [load, setLoad] = useState(false);

    const handleScroll = (img) =>{
        if(!load &&  elementInViewport(img)){
            const loader = new Image();
            loader.src   = props.src;
            loader.onload = () =>{
                const ratio = loader.width / img.height;

                img.setAttribute(
                    `src`, `${props.src}`
                    );
                props.keepRatio && img.setAttribute(`height`, `${props.width/ ratio}`)
            }
            img.classList.add(`${props.effect}`)
            setLoad(true)
        }

    }
    useEffect((img)=>{
        window.addEventListener('scroll', handleScroll(img));
        return function cleanup(){
            window.removeEventListener('scroll', handleScroll(img))
        };
    })


    return(
        <img
            src={props.src}
            ref={img => this.img =img}
            className="lazy-image"
            alt={this.props.alt}
      />
    )
}