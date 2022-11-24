import { Link } from "react-router-dom"

export function NavBar() {
    return (
        <div className="bg-red-600 m-2">
            OI
            <Link to="criar-anuncio" className="mx-10 bg-white">Criar</Link>
        </div>
    )
}