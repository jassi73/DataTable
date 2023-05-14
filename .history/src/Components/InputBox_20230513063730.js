import React from 'react'

const InputBox = ({placeholder, onChange}) => {
  return (
    <div>
       <input type="text" placeholder={placeholder} onChange={(e)=>onChange(e.target.value)} />
    </div>
  )
}

export default InputBox