import { Link } from "react-router-dom"

export function NavBar() {
    return (
        <nav className="bg-red-600 flex justify-center items-center gap-2">
            <icon className='icon'>B</icon>
            <icon className='icon'>o</icon>
            <icon className='icon'>M</icon>
            <Link to="/" className="title-nav">The Hero Journal</Link>
            <icon className='icon'>A</icon>
            <icon className='icon'>r</icon>
            <icon className='icon'>!</icon>
            {/* <Link to="criar-anuncio" className="mx-10 border">Criar</Link> */}
        </nav>
    )
}