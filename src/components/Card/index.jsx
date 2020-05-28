import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Card, Drawer} from 'antd';
import './index.css'


const {Meta} = Card;

export default (props)=>{
    const [visible,setVisible] = useState(false);
   
    const showDrawer = () =>{
        setVisible(true);
    }
    const url = `/actress/${props.id}`
    return(
      <div className="site-drawer-render-in-current-wrapper">
        <div onClick={showDrawer}>
            <Card 
            hoverable
            style={{width : 250, margin:20}}
            cover =
            {
                <LazyLoadImage alt={props.id} src ={props.src}  />
            }
            >
                <Meta title={props.name} description={props.japanName} />
            </Card>
            <Drawer
            title="Details"
            placement="right"
            closable={false}
            onClose={()=>setVisible(false)}
            visible={visible}
            getContainer={false}
            style={{ position: 'absolute' }}
        >
            <div align="left">
                <strong>Birthday</strong> : <p>{props.birthday}</p>
                <strong>Bust</strong> : <p>{props.bust}</p>
                <strong>Waist</strong> : <p>{props.waist}</p>
                <strong>Hip</strong> : <p>{props.hip}</p>
                <strong>Height</strong> : <p>{props.height}</p>
            </div>
            <div align='center'>
                <Link to={url}> Click here for Code :) </Link><br />
                <strong>Press ESC to exit</strong>
            </div>
        </Drawer>
        </div>
      </div>
    )
};