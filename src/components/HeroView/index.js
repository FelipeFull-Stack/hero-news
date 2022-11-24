import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export function HeroView() {

    const [form, setForm] = useState({});
    const params = useParams();

    useEffect(() => {
        fetchHero();
        async function fetchHero() {
            try {
                // const response = await axios.get(`https://ironrest.cyclic.app/hero-news/ver-anuncio/${params.id}`);
                // MODO TESTE 
                const response = await axios.get(`https://ironrest.cyclic.app/hero-news/${params.id}`);
                setForm(response.data)
            } catch (err) {
                console.log(err)
            }
        }
    }, [])

    return (
        <div className="m-10 p-5 bg-blue-500 rounded-md">
            <div key={form._id} className="m-2">
                <div className="m-1 bg-white rounded p-1">{form.name ? <h1>Nome: {form.name}</h1> : null}</div>
                <div className="m-1 bg-white rounded p-1">{form.age ? <p>Idade: {form.age}</p> : null}</div>
                <div className="m-1 bg-white rounded p-1">{form.where ? <p>Atuando em: {form.where}</p> : null}</div>
                <div className="m-1 bg-white rounded">{form.skills && form.skills.length !== 0 ?
                    <ul className="p-1">Skills:
                        {form.skills.map(element => {
                            return (<li key={`${form.name}-${element}`} className="align-middle	">- {element}</li>);
                        })}
                    </ul>
                    : null}</div>
                <div className="m-1 bg-white rounded p-1">{form.time ? <p>Horário: {form.time}</p> : null}</div>
                <div className="m-1 bg-white rounded p-1">{form.payment ? <p>Só aceita: {form.payment}</p> : null}</div>
                <div className="m-1 mb-5 bg-white rounded p-1">{form.msg ? <h2>Slogan: {form.msg}</h2> : null}</div>
            </div>
            <Link to="/" className="bg-white m-3 p-2 rounded transition ease-in-out delay-50 hover:scale-110 hover:bg-green-500 duration-50">Voltar</Link>
            <Link to={`/editar-anuncio/${form._id}`} id={form._id} className="bg-white m-2 p-2 rounded transition ease-in-out delay-50 hover:scale-110 hover:bg-green-500 duration-50">Editar</Link>
        </div>
    );
}