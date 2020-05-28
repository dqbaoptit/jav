import React, {useState, useEffect} from 'react';
import Nav from '../../components/Nav';
import { Layout, Spin } from 'antd';
import Seacher from '../../components/Seacher';
import Card from '../../components/Card';
import './index.css';

const { Footer} = Layout;
export default () => {
    const API ='https://jav-rest-api-htpvmrzjet.now.sh/api/actress?name=';
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])
    const [url, setUrl] = useState(API+name);


    useEffect(()=>{
        setUrl(API+name);
    },[name]);



    // Debounce searching
    useEffect(() => {
		const timeout = setTimeout(() => {
            setName(name)
		},800)
		return () =>
			clearTimeout(timeout)
	},[name])
    // 
    useEffect(()=>{
        async function  Fetch(){
            setLoading(true);
            try{
                const res = await fetch(url);
                const json = await res.json();
                setData(json.result);
                setLoading(false);

            } catch (err){
                console.log(err);
                setLoading(false);
            }
    }
        Fetch();
    },[url]);
    console.log(data);

    return(
       <div>
           <Nav />
           <Seacher 
            value={name}
            handleChange={(e)=>{
                setName(e.target.value)}
            }
            />
            {loading? <div align="center" className="loading-main"><Spin /> </div>:
           <div>

                {data.map((actress, index)=>{
                    return(
                        <div className="main" key={index}>
                            <Card loading={loading} id={actress.id} src={actress.imageUrl} name={actress.name} japanName={actress.japanName} 
                                bust={actress.bust} waist={actress.waist} hip={actress.hip} birthday={actress.birthday} height={actress.height}
                            />
                        </ div>
                    )
                })}
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