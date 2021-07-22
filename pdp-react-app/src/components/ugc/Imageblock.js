const Imageblock = (props) => {

    return <div
        className={'m-1 border border-primary ugc-img'} >
        <img src={props.image.src} alt={props.image.alt}></img>
    </div>

}

export default Imageblock;
