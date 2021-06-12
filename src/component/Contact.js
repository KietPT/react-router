import React, {useState} from 'react'
import { Prompt } from 'react-router-dom'

function Contact() {

  
  const [isOk, onClick] = useState(false)
  
  

  return (
    
    <div>
      <h2>Đây là Contact </h2>

      <button type="button" className="btn btn-default" onClick={() => onClick(false)}>cho phép</button><br />
      <button type="button" className="btn btn-danger" onClick={() => onClick(true)}>không cho phep</button><br />
      <Prompt
        when={isOk}
        message={ location => (`Bạn chắc chắn muốn đi đến ${location.pathname}`)}
      />
    </div>

  );
}

export default Contact;
