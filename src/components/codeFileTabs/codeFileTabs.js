import React from 'react'

import './codeFileTabs.css';

export function CodeFileTabs(props){
    const listOfHeadings = props.headingsList;
    const headingClick = props.headingClick;

    const headings = listOfHeadings.length > 0 ?
        listOfHeadings.map(title => <button key={Math.random() * Math.random()} onClick={() => headingClick(title)}>{title}</button>)
        :
        <span>Could not get file from server.</span>

    return (
        <div className='overflow-NavBar'>
        {headings}
        </div>
    )
}