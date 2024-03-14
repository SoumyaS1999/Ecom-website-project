import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const params= useParams();
     console.log(params.id)
  return (
    <div>
      this is product detail
      <p>{params.id}</p>
    </div>
  )
}

export default ProductDetail
