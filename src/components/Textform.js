import React,{useState} from 'react';
export default function TextConverter(props){
    const[text,setText]=useState('');
    const textChange=(event)=>{
        console.log("text is changed");
        setText(event.target.value);
    }
    const changeUpperCase=(event)=>{
        console.log("Text converted");
        let newText=text.toUpperCase();
        setText(newText);
        props.alert(":changed to uppercase","success");  // we are calling alert function passed as an props in TextConverter function
    }
    const changeLowerCase=(event)=>{
        console.log("Text converted");
        let newText=text.toLowerCase();
        setText(newText);
        props.alert(":changed to lowercase","success");
    }
    const textcopy=()=>{
        navigator.clipboard.writeText(text);
    }
    const clearText=()=>{
        setText("");
        props.alert(":text cleared","success");
    }
    const handleExtraSpaces=()=>{
        let extraSpTexts=text.split(/[ ]+/g);
        console.log(extraSpTexts);
        setText(extraSpTexts.join(" "));
    }

    return(
    <>
     {/* <div className={`bg-${props.mode==="light"?"dark":"light"}`}> */}
     <div>
    <h1 className='text-success'>{props.header}</h1>
    <div className='my-4'>
    <textarea className='form-control' value={text} onChange={textChange}  id="mybox" rows="8" placeholder="Enter your text"></textarea>
    <button disabled={text.length===0} className="btn btn-primary  my-2" onClick={changeUpperCase}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={changeLowerCase}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={textcopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="containter my-3">
        <h2 className='text-success'> Text Summary</h2>
        <p className='text-success'>{text.split(/\s+/).filter((element)=>{return element.length>0;}).length} words and {text===" "?text.length-1:text.length} characters</p>
        <p className="text-success">{(text.split(/\s+/).filter((element)=>{return element.length>0;}).length)*0.008} minutes to read</p>
    </div>
    <div className="containter my-3">
        <h2 className="text-success"> Preview</h2>
        <p className="text-success">{text.length>0?text:"No preview available"}</p>
    </div>
    </div>
    </>
    );
}