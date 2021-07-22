import { useHistory } from 'react-router-dom';

const Home = (props) => {
    console.log(props.title)
    const history = useHistory();
    const getProduct = () => {
        history.push(`/product/${props.title}`);
    }
    return (<div>
        <div onClick={() => getProduct()}>go to product</div>
    </div>
    )
}

export default Home;
