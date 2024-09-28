import React from 'react'
import{useNavigate, Link} from "react-router-dom"

const Home = ({data}) => {
    const navigate = useNavigate()

  return (
    <div style={{display : 'grid', gridTemplateColumns : "1fr 1fr"}}>
        {
            data.map((item, index) => {
                
                return<Link to={`/products/${index + 1}`}>
                <div style={{border : "1px solid black", width : "400px", display : "flex"}}>
                    <img src={item.img} />
                    <div>

                    <h3>{item.name}</h3>
                    <div>
                        <p>Price : {item.price}</p>
                        <button onClick={() => {
                            navigate(`/products/${index + 1}`)
                        }}>Buy</button>
                    </div>
                        </div>
                </div>
                        </Link> 
            })
        }
    </div>
  )
}

export default Home