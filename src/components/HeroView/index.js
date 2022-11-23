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
                const response = await axios.get(`https://ironrest.cyclic.app/hero-news/637e15c5768c40002839f26d`);
                setForm(response.data)
            } catch (err) {
                console.log(err)
            }
        }
    }, [])

    return (
        <>
            <div key={form._id}>
                {form.name ? <h1>Nome: {form.name}</h1> : null}
                {form.age ? <p>Idade: {form.age}</p> : null}
                {form.where ? <p>Atuando em: {form.where}</p> : null}
                {form.skills && form.skills.length !== 0 ?
                    <ul>Skills:
                        {form.skills.map(element => {
                            return (<li key={`${form.name}-${element}`}>{element}</li>);
                        })}
                    </ul>
                    : null}
                {form.time ? <p>Horário: {form.time}</p> : null}
                {form.payment ? <p>Só aceita: {form.payment}</p> : null}
                {form.msg ? <h2>Slogan: {form.msg}</h2> : null}
            </div>
            <Link to="/home">Voltar</Link>
            <Link to={`/editar-anuncio/${form.id}`}>Editar</Link>

        </>
    );
}