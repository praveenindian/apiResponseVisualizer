import React, { useState } from 'react';
import './MakeApiRequest.css';
// interface props {
//     response: string;
// }
export default function MakeApiRequest(props) {

  const [method,setMethod] = useState('GET');
  const [requestUrl,setRequestUrl] = useState('');

  const selectMethod  = (event)=> {
    setMethod(event.value);
  }

  const getRequestUrl = (event) => {
    setRequestUrl(event.value);
  }
  const sendRequest = () => {
    // Basic fetch example .
    fetch(requestUrl,
        {
            method: method,
            headers: {
              'Content-Type': 'application/json',
            }
        }
        )
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response;
        })
    .then(data => {
        console.log('success'+data);
        })
    .catch(error => {
    console.error('Error:', error);
    });
  }

  return (
    <>
     <div className="api-request-main">
        <div>MakeApiRequest</div>
        <div className='api-request-input'>
            <select className="form-select" aria-label="Default select example ." onChange={selectMethod} value={method}>
                <option value="1">GET</option>
                <option value="2">POST</option>
                <option value="3">POST</option>
                <option value="4">PATCH</option>
                <option value="5">DELETE</option>
            </select>
            <input type="text"  onChange={getRequestUrl} />
        </div>
        <input type='submit' onClick={sendRequest} />
    </div>
    </>
  )
}
