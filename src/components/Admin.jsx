import React from 'react'
import{useNavigate} from "react-router-dom"

const Admin = ({data}) => {
    const navigate = useNavigate()
  return (
    <div >
        {data.map((item) => {
            return <div className='btn' onClick={() => {
                navigate(`/admin/products/${item.id}`)
            }} style={{border : "1px solid black", padding : "4px", width : "440px", marginTop : "10px"}}>{item.name}</div>
        })}
    </div>
  )
}

export default Admin