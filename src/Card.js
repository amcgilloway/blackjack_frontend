const Card = ({card}) => {

  if (!card){
  console.log(card    )

    return null
  }

  return (

    <img src={card.cards[0].image} />
  )
}

export default Card;