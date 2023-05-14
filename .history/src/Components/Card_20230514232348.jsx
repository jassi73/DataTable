
const Card = (props) => {
    const {cardName, count} = props
  return (
    <div>
        <h5>{cardName}</h5>
        <h5>
            {count}
        </h5>
    </div>
  )
}

export default Card