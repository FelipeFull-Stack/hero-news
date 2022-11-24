import { Link } from "react-router-dom"

export function NavBar() {
    return (
        <nav className="bg-red-600 p-2 flex justify-between">
            <Link to="/">Hero Adds</Link>
            <Link to="criar-anuncio" className="mx-10 border">Criar</Link>
        </nav>
    )
}