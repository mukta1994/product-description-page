import StarRatings from 'react-star-ratings';

const Reviews =(props)=>{
    const reviews = props.reviews

    return <>{reviews && reviews.map((item, i) => (
        <div className="reviews" key={i}>
            <h4>{item.review_title}</h4>
            <StarRatings
                rating={parseFloat(item.rating)}
                starRatedColor="Black"
                numberOfStars={5}
                name='rating'
                starDimension="15px"
            />
            <p>{item.review_content}</p>
        </div>

    ))}
    </>

}

export default Reviews;