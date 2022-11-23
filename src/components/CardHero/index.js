import { Link } from "react-router-dom"

export function CardHero(props) {

    const { name, anuncio, id} = props

    return (
        <Link to={`/ver-anuncio/${id}`}>
            <h1>{name}</h1>
            <p>{anuncio}</p>
        </Link>
    )
}