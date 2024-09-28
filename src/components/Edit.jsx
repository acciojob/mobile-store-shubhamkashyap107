import React, { useEffect, useState } from 'react'
import{useParams, useNavigate}from "react-router-dom"




const Edit = ({data, setData}) => {
    const navigate = useNavigate()
   const[isSaving , setIsSaving] = useState(false)
    const{id} = useParams()
    const foundItem = data.find((item) => {
        return item.id == id
    })


    const[desc, setDesc] = useState(foundItem.desc)
    const[name, setName] = useState(foundItem.name)
    const[price, setPrice] = useState(foundItem.price)
    const[img, setImg] = useState(foundItem.img)


    
  return (
    <div>
        <div>
            <label htmlFor="name">Title</label>
            <input onChange={(e) => {
                setName(e.target.value)
            }} value={name} type="text" id='name' />
        </div>
        <div>
            <label htmlFor="desc">Description</label>
            <textarea onChange={(e) => {
                setDesc(e.target.value)
            }} name="" id="desc">{desc}</textarea>
        </div>
        <div>
            <label htmlFor="img">Image</label>
            <input onChange={(e) => {
                setImg(e.target.value)
            }} type="text" id='img' value={img} />
        </div>
        <div>
            <label htmlFor="price">Price</label>
            <input onChange={(e) => {
                setPrice(e.target.value)
            }} type="number" id='price' value={price} />
        </div>
        <div>
            <button onClick={() => {
                let nArr = data.filter((item) => {
                    // console.log(item)
                    return item.id != id
                })
                setData(nArr)
                // console.log(nArr)
                navigate("/admin")
                
            }}>Delete</button>
            <button onClick={() => {
                let nArr = data.map((item) => {
                    return item.id != id ? item : {name, desc, price, img, id} 
                })
                setData(nArr)
                navigate("/")


            }}>Save</button>
        </div>
    </div>
  )
}

export default Edit
