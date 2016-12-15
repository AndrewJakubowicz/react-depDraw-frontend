import React from 'react';


export function GraphViewWrapper(props){
    return(
        <div className={props.className}>
            {props.children}
        </div>
    )
}