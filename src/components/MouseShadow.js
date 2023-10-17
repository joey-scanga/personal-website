import { useState } from "react"

export default function MouseShadow(props) {
  return (
    <div style={{
        position: "absolute", 
        top: props.mousePosition.top,
        left: props.mousePosition.left,
        width: "50px",
        height: "50px",
        borderRadius: '50%',
        backgroundColor: 'rgba(86, 124, 98, 0.15)',
        boxShadow: '0 0 30px 50px rgba(86, 124, 98, 0.15)'
    }}>
    </div>
  )
}
