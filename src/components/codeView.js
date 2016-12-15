import React from 'react';

import './codeView.css';


export function CodeViewWrapper(props){
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
};

export function CodeFileTabs(props){
    return (
        <div>
        <button>filePath</button>
        <button>filePath1</button>
        <button>filePath2</button>
        <button>filePath3</button>
    </div>
    )
}

export function CodeView(props){
    return (
        <pre className="code-text-box-padding">
            <code className="code-text-box">
            Temporary code.
            </code>
        </pre>
    )
}