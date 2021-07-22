import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Features = (props) => {
    const [color, setColor] = useState(props.attr.product.color)
    const [selectedSize, setselectedSize ] = useState("")
    const [quantity, setquantity ] = useState(undefined)
    const availableSizes = props.attr.availableSizes;

    const history = useHistory();

    //called to a link where the query returns product variant
    const onClickOfVariant = (selColor,url) => {
        onChangingSize("")
        setColor(selColor.color)
        history.push(`/product/${url}`);
    }

    //whenever size is clicked get available quantity,price discount to respective product variant
    const onChangingSize=(item)=>{
        setselectedSize(item.size)
        setquantity(item.quantity)
    }

    return (
        <div >
        <div>Select Color</div>
        <div className="d-flex flex-row variant-images">
            {props.features && props.features.map((item, i) => (
                <div key={i} onClick={() => onClickOfVariant(item, item.url)}
                    className={color === item.color ? 'm-1 border border-primary variant-img' : 'm-1 border border-secondary variant-img'} >
                    <img src={item.images[0].src} alt={item.images[0].alt}></img>
                </div>
            ))}
        </div>
        <br />
        <div>Select Size</div>
        <div className="d-flex flex-row flex-wrap">
            {availableSizes && availableSizes.map((item, i) => (
                <button key={i} onClick={() => onChangingSize(item)}
                    className={selectedSize === item.size ? 'm-1 border variant-img active' : 'm-1 border border-secondary variant-img'}>
                    {item.size}
                </button>
            ))}
        </div>
        <div>
            {parseInt(quantity)===0 && <p className="not-available">Not available</p>}
            {parseInt(quantity)===1 && <p>Only one left. Don't miss it. Hurry up</p>}
        </div>
            
    </div>
    )
}

export default Features;
