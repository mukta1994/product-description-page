import { useHistory } from 'react-router-dom';

const Home = (props) => {
    const history = useHistory();
    const getProduct = () => {
        history.push(`/product/${props.title}`);
    }
    return (<div className="container pt-4">
        <button className="button button-primary" onClick={() => getProduct()}>go to product</button>
    </div>
    )
}

export default Home;
