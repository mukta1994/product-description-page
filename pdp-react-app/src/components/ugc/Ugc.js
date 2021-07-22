import {
    useQuery
} from "@apollo/client";
import { useLocation } from "react-router-dom";
import { matchPath } from 'react-router'

//importing components
import Reviews from './Reviews';
import Rating from './Rating'
import Imageblock from "./Imageblock";

//importing queries
import { ugc } from '../../query/query'


const Ugc = () => {

    const loc = useLocation();

    const match = matchPath(loc.pathname, {
        path: '/product/:productid/:variantid/:title',
        exact: true,
        strict: false
    })

    const productid = match.params.productid;

    //by using product id get reviews and ratings of a respective product
    const { loading, error, data } = useQuery(ugc, { variables: { id: parseInt(productid) } });
if(error){
    console.log(error)
}
    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{textAlign:"center"}}>Failed fetch data</p>;
    return (<div className="container ugc-block pt-4">
        <div className="pt-4"><h3>Images by buyers</h3></div>
        <div className="d-flex flex-row user-images ">
            {data.ugc.uploaded && data.ugc.uploaded.map((item, i) => (
                <Imageblock key={i} image={item} />
            ))}
        </div>
        <div className="pt-4"><h3>Reviews and Ratings</h3></div>
        <div className="d-flex review-container">
            <div className="review-section">
                <Rating averageRating={data.ugc.averageRating}/>
            </div>

            <div>
            <Reviews reviews={data.ugc.reviews}/>     
            </div>
        </div>

    </div>)
}

export default Ugc;
