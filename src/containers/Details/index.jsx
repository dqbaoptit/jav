import React, {useState, useEffect} from 'react';
import './index.css';
import Nav from '../../components/Nav';
import { Layout, Spin } from 'antd';
import Movie from '../../components/Movie';
import {useParams} from 'react-router-dom';



const { Footer} = Layout;

export default ()=>{
    const {id} = useParams();
    const API = 'https://jav-rest-api-htpvmrzjet.now.sh/api/videos/';
    const url=API+id+'?hit=99';
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        async function Fetch(){
            setLoading(true);
            try{
                const res = await fetch(url);
                const json = await res.json();
                setData(json.result);
                setLoading(false)
            } catch (err){
                console.log(err);
                setLoading(false)
            }
        }
        Fetch();
    },[url])
        return (
        <div>
            <Nav />
            {   loading ? <div align='center' className="loading-main"> <Spin /> </div>
                        :
                        <div>
                        {data.map((movie, index)=>{
                            let tmp = movie.imageUrl;
                            let image= tmp.replace('httpss', 'https');
                            let pos_code = movie.siteUrl.indexOf('cid=');
                            pos_code+=4;
                            let type = movie.siteUrl.slice(pos_code, pos_code+4);
                            type = type.toUpperCase() + ' - ';
                            let code = movie.siteUrl.slice(pos_code+4, movie.siteUrl.length-1);
                            type += code;
                            let average="";
                            if(movie.review){
                                average=movie.review.average;
                            }
                            return(
                                <div key={index}>
                                    <Movie src={image} name={movie.name}
                                        date={movie.date}
                                        link={movie.siteUrl}
                                        code={type}
                                        average={average}

                                    />
                                </div>
                                )
                        })
                }
        </div>
        }
            <Footer>
               <div align="center">
                    API's Toidicodedao
               </div>
           </Footer>
        </div>
        )
}