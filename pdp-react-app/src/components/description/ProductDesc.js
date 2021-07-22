import {
  useQuery
} from "@apollo/client";
import Features from './Features'
import SlideShow from './SlideShow'
//import { useState, useEffect } from 'react'
import { Product } from '../../query/query'
import { useLocation } from "react-router-dom";
import { matchPath } from 'react-router'


const ProductDesc = () => {

  const loc = useLocation();

  const match = matchPath(loc.pathname, {
    path: '/product/:productid/:variantid/:title',
    exact: true,
    strict: false
  })

  const {productid,variantid,title} = match.params

  const  { loading, error, data } = useQuery(Product, { variables: {id: parseInt(productid), variantid:parseInt(variantid), title: title } });


  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{textAlign:"center"}}>Failed fetch data</p>;
  return (<div className="container pt-4">
    {data &&
      <>
        <div className="description-container">
          <div className="slide-section">
            <SlideShow showimgs={data.variant.images} />
          </div>
          <div className="p-2 float-left info-section">
            <h3>{data.product.name}</h3>
            <h6>{data.variant.product.title}</h6>
            <h5 className="pb-2 pt-1">${data.variant.product.price}</h5>
            <Features features={data.product.features.attributes}  attr ={data.variant}/> 
          </div>
        </div>
        <div className="container description pt-4">
          <h3>{data.variant.description_title}</h3>
          <p>{data.variant.description}</p>
        </div>
      </>
    }
  </div>)
}

export default ProductDesc;
