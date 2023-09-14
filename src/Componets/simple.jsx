import React from 'react'

export default function Simple(props) {
  return (
    <div>
        <div className="text">{props.footbal.name}</div>
        <div className="text">{props.footbal.date}</div>
    </div>
  )
}
