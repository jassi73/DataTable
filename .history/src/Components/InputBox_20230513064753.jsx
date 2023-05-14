

const InputBox = (props) => {
    const {placeholder, onChange} = props
  return (
    <div className="inputBox">
       <input type="text" placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default InputBox