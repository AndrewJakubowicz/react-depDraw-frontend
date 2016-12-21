import React from 'react';

import './codeView.css';


export function CodeViewWrapper(props){
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
};

export function CodeView(props){
    return (
        <pre className="code-text-box-padding">
            <code className="code-text-box">
            {props.children}
            </code>
        </pre>
    )
}