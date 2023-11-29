import React from 'react'
interface props {
    heading: string;
}
export default function NavBar(props:props) {
  return (
    <div>{props.heading}</div>
  )
}

