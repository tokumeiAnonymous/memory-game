export default function Houses({houses, validate}) {
    return(
        <div className='houses'>
            {houses.map(house => {
                return(
                    <img key={house.name} src={require(`../Assets${house.src}`)} alt={house.name} 
                    className='item' onClick={validate} data-name={house.name}></img>
                )
            })}
        </div>
    )
}