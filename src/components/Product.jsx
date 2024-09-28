import React from 'react'
import{useParams, useNavigate} from "react-router-dom"
const data = [
    {
        name : "Samsung Galaxy S8 64GB Black",
        price : 16303,
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eum ratione at tempora dolorem maxime vel perspiciatis amet non. Error eos suscipit in ad fugit! Ut animi eligendi inventore iste.",
        id : 1
    },
    {
        name : "Samsung Galaxy S9 64GB Black",
        price : 20888,
        id : 2,
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eum ratione at tempora dolorem maxime vel perspiciatis amet non. Error eos suscipit in ad fugit! Ut animi eligendi inventore iste.",

        
    },
    {
        name : "Samsung Galaxy S8+ 64GB Black",
        price : 18701,
        id : 3,
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eum ratione at tempora dolorem maxime vel perspiciatis amet non. Error eos suscipit in ad fugit! Ut animi eligendi inventore iste.",


    },
    {
        name : "Samsung Galaxy S9+ 64GB Black",
        price : 49999,
        id : 4,
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eum ratione at tempora dolorem maxime vel perspiciatis amet non. Error eos suscipit in ad fugit! Ut animi eligendi inventore iste.",


    },
    {
        name : "Samsung Galaxy Note 9 6/128GB Midnight Black",
        price : 29768,
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eum ratione at tempora dolorem maxime vel perspiciatis amet non. Error eos suscipit in ad fugit! Ut animi eligendi inventore iste.",
        id : 5

    },
    {
        name : "Samsung Galaxy Note 8 64GB Black",
        price : 22171,
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eum ratione at tempora dolorem maxime vel perspiciatis amet non. Error eos suscipit in ad fugit! Ut animi eligendi inventore iste.",
        id : 6,

    },
]

const Product = () => {

    const{id} = useParams()
    const navigate = useNavigate()
    
    let foundItem = data.find((item) => {
        return item.id == id
    })
    
  return (
    <div>
        <h1>{foundItem.name}</h1>
        <p>Price : {foundItem.price}</p>
        <p>Desciption : {foundItem.desc}</p>
        <button onClick={() => {
            navigate("/")
        }}>Other Products</button>
    </div>
  )
}

export default Product