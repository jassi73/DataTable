import React from 'react'

const InputBox = ({placeholder, onChange}) => {
  return (
    <div>
       <input type="text" placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default InputBox