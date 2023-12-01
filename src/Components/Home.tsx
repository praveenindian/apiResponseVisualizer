import React,{useState} from 'react'
import MakeApiRequest from './MakeApiRequest.tsx'
import Visualizer from './Visualizer.tsx'
import './Home.css'

export default function Home() {
    // const [response,setResponse] =useState('');

  return (
    <>
        <div className='container main-home'>
            <MakeApiRequest  />
            <Visualizer  />
        </div>
    </>
  )
}
