

const InputBox = (props) => {
    const {placeholder, onChange} = props
  return (
    <div className="input">
       <input type="text" placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default InputBox