import React from 'react'

export default function Info(props) {
  return (
    <div>
        {props.footbal.mus.map((el)=>{
            return(
                <div className="Prize">
            <div className="text2">{el.name}</div>
            <div className="text2">{el.date}</div>
            </div>)
        })
        
        }
    </div>
  )
}
