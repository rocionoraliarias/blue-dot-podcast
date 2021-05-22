function Images ({setImage,setAlt}) {

    return(
        <img src={`./Images/${setImage}`} alt={setAlt}/>
    )
}

export default Images;