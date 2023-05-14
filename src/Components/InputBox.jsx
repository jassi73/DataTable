

const InputBox = (props) => {
    const {placeholder, onChange, value} = props
  return (
    <div className="inputBox">
       <input type="text" value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default InputBox