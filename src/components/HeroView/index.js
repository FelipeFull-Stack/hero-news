import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
        <div className="m-10 p-5 bg-blue-500">
            <div key={form._id} className="m-2">
                <p className="m-1 bg-white rounded p-1">{form.name ? <h1>Nome: {form.name}</h1> : null}</p>
                <p className="m-1 bg-white rounded p-1">{form.age ? <p>Idade: {form.age}</p> : null}</p>
                <p className="m-1 bg-white rounded p-1">{form.where ? <p>Atuando em: {form.where}</p> : null}</p>
                <p className="m-1 bg-white rounded">{form.skills && form.skills.length !== 0 ?
                    <ul>Skills:
                        {form.skills.map(element => {
                            return (<li key={`${form.name}-${element}`}>{element}</li>);
                        })}
                    </ul>
                    : null}</p>
                <p className="m-1 bg-white rounded p-1">{form.time ? <p>Horário: {form.time}</p> : null}</p>
                <p className="m-1 bg-white rounded p-1">{form.payment ? <p>Só aceita: {form.payment}</p> : null}</p>
                <p className="m-1 mb-5 bg-white rounded p-1">{form.msg ? <h2>Slogan: {form.msg}</h2> : null}</p>
            </div>
            <Link to="/" className="bg-white m-3 p-2 rounded">Voltar</Link>
            <Link to={`/editar-anuncio/${form.id}`} className="bg-white m-2 p-2 rounded">Editar</Link>
        </div>
    );
}