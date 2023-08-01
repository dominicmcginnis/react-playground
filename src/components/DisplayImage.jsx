export default ({image, handleImageChange}) => {
    return (
        <hgroup>
            <a className="outline" href="#" role="button" onClick={ () => { handleImageChange(Number(image.id - 1)) }} ><span className="material-symbols-outlined">arrow_back</span></a>
            <img style={{ width: '200px' }} src={`images/${image.imageName}.jpg`} />
            <a className="outline" href="#" role="button" onClick={ () => { handleImageChange(Number(image.id + 1)) }} ><span className="material-symbols-outlined">arrow_forward</span></a>
        </hgroup>
    )
}