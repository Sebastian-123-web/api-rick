 export function Character(character){
    return(
        <div className="card-character">
            <h3 className="name">{character.name}</h3>
            <img src={character.image} alt="" className="card-img" />
            <p className="origin">{`Origin:${character.origin && character.origin.name}`}</p>
        </div>
    )

 }