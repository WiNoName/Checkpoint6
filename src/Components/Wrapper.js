import React from 'react'
import Photo from "./Photo.js"

function Wrapper(props){
    return(
        <div>
            {props.children}
        </div>
        )
}


export default Wrapper;