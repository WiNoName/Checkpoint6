import React from 'react'

function Photo(props){
    return(
        <div>
            <img src = {props.src} alt = "alt" style = {{borderRadius: 500}}></img>
            
        </div>
    )
}


export default Photo;