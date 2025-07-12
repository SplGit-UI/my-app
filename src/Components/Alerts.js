import React from 'react'

export default function Alerts(props) {
    const capitalize = (word)=>{
        let lower =  word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    <div>
      {props.alerts && (
        <div className={`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alerts.type)}!</strong> {props.alerts.msg}
        </div>
      )}
    </div>
  );
}
