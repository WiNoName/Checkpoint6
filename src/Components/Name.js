import React from 'react'

function Name(props){
    let myStyle = {}
    if(props.small) {
        myStyle = {fontSize: 20}
    }else{
        myStyle = props.style
    }

    console.log(props)
    return(
        <div>
            <h1 style = {myStyle}>{props.children} {props.firsName} {props.lastName}</h1>
        </div>
    )
}

export default Name;