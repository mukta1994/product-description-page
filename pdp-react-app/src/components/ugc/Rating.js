import StarRatings from 'react-star-ratings';

const Rating = (props) => {
    const averageRating = props.averageRating

    return <>
        <div>
            <StarRatings
                rating={parseFloat(averageRating)}
                starRatedColor="Black"
                numberOfStars={5}
                name='rating'
                starDimension="20px"
            />
        </div>
    </>

}

export default Rating;