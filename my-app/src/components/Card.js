import React from 'react'

const Card = (props) => {
    const review=props.review;

  return (
    // id: 1,
    //   name: "John Doe",
    //   professional: "Software Engineer",
    //   summary: "This product really improved my productivity. Highly recommended!",
    //   img: "https://randomuser.me/api/portraits/men/1.jpg",
    <div> 
    <div>{review.id}</div>
    <div>{review.name}</div>
    <img src={review.img} alt={review.name} className="review-img" />
    <div>{review.professional}</div>
    <div>{review.summary}</div>


    

    </div>
  )
}

export default Card