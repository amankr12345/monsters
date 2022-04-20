import './card.style.css'
const Card=(props)=>{
    const {name,email, id}=props
    return (
     <>
        <div className="card-container">
                <img alt='monsterImage' src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h3>{name}</h3>
                <p>{email}</p>
        </div>
     </>
    )
}


export default Card