import React, { useState } from 'react'

function TextForm(props) {
    const handleUpClick = () => {
        // console.log('UPPERCASE Button was Clicked.');
        // console.log('UPPERCASE Button was Clicked.' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.displayAlert('The Text Have Been Converted to UPPERCASE', 'success')
    }

    const handleLowClick = () => {
        // console.log('UPPERCASE Button was Clicked.');
        // console.log('UPPERCASE Button was Clicked.' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.displayAlert('The Text Have Been Converted to lowercase', 'success')
    }

    // slice(from, until); // split(separator, limit);
    const handleCapClick = () => {
        let newText = text.slice(0, 1).toUpperCase() + text.slice(1, text.length);
        setText(newText);
        props.displayAlert('The Text Have Been Converted to Capatalize', 'success')
    }

    const handleCapCaseClick = () => {
        let newText = text.split(' ').map((text) => text.charAt(0).toUpperCase() + text.slice(1)).join(' ');
        setText(newText);
        props.displayAlert('The Text Have Been Converted to Capatalize case', 'success')
    }

    const handleOnChange = (event) => {
        // console.log('On Change.');
        setText(event.target.value);
    }

    const handleCopy = () => {
        // console.log('Copy Text.');
        var text = document.getElementById('myBox');
        text.select();
        // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.displayAlert('The Text Have Been Copied', 'success')
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.displayAlert('The Text Extra Spaces have been Removed.', 'success')
    }

    const handleClearClick = () => {
        // console.log('UPPERCASE Button was Clicked.');
        // console.log('UPPERCASE Button was Clicked.' + text);
        let newText = '';
        setText(newText);
        props.displayAlert('The Text Have Been Cleared.', 'success')
    }

    // const [text, setText] = useState('Enter text here');
    const [text, setText] = useState('');
    // text = "New Text"; // Wrong way to change the state 
    // setText('New Text'); // Right way to change the state 
    return (
        <>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    {/* <textarea className="form-control" defaultValue='Enter text here' id="myBox" rows="8"></textarea> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'Black' : 'white' }} id="myBox" rows="8" ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCapClick}>Convert to Capitalize</button>
                <button className="btn btn-primary mx-2" onClick={handleCapCaseClick}>Convert to Capitalize Case</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'Black' : 'white' }}>
                <h3>Your Summary</h3>
                <p>{text.split(" ").length} Words, {text.length} Letters</p>
                <p>It will take {0.008 * text.split(" ").length} to read.</p>
                <h3>Preview</h3>
                <p>{text.length < 1 ? 'Enter your text for preview' : text}</p>
            </div>
        </>
    )
}


export default TextForm