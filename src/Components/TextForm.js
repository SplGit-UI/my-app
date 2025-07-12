import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here.");
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(`Converted to UpperCase`, "info");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(`Converted to LowerCase`, "info");
  };
  const handleClickTextClear = () => {
    setText("");
    props.showAlert(`Remove the Text`, "warning");
  };
  const handleOnchange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleClipboardClick = () => {
    try {
      window.navigator.clipboard.writeText(text);
      props.showAlert(`Copied to clipboard!`, "primary");
    } catch (error) {
      console.error("Unable to copy to clipboard.", error);
      props.showAlert(`Copied to clipboard!`, "danger");
    }
  };
  const handleSpaceRemover = () =>{
    let clean = text.replace(/\s+/g, ' ').trim();
    setText(clean);
    props.showAlert(`Remove the Extra Space in Text`, "success");

  }
  return (
    <>
      <div className="container !spacing">
        <h4>{props.heading} - </h4>
        <div className="mb-3">
          <textarea
            className="form-control mb-1"
            value={text}
            onChange={handleOnchange}
            id="exampleFormControlTextarea1"
            rows="8 "
          ></textarea>
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>
            Convert to Lawercase
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={handleClickTextClear}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={handleClipboardClick}
          >
            Copy / Past
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={handleSpaceRemover}
          >
            Space Remove
          </button>
        </div>
      </div>
      <div className="container my-3">
        <div className="mb-3">
          <div className="row">
            <div className="col-lg-8">
              <h2>Text Summary</h2>
              <span>
                {text.split(" ").length} Words and {text.length} Characters
              </span>
              <p>{0.008 * text.split(" ").length} Minutes read</p>
              <h2>Preview</h2>
              <p>{text}</p>
            </div>
            <div className="col-lg-4">
              <h2>copy to past</h2>
              <textarea
                className="form-control mb-1"
                id="exampleFormControlTextarea1"
                rows="2"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
