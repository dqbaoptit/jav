import React from 'react';



export default (props)=>{
    return(
        <div>
                <input 
                    placeholder="Search..."
                    value = {props.value}
                    onChange={props.handleChange}
                />
        </div>
    )
}