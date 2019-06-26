import React from 'react'
import "../style.css"


function profileLink(props){
    let myStyle = {}
    if(props.isVisible === true) {
        myStyle = {}
    }else{
        myStyle = {display : 'none'}
    }
    return(
        <div>
                <button className = "btn"
                onClick = {props.onSimpleClick}
                style = {myStyle}
                >
                {props.children}
            </button>
        </div>
        
    )
}
export default profileLink;