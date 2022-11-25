import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export function HeroView() {

    const [form, setForm] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchHero();
        async function fetchHero() {
            try {
                const response = await axios.get(`https://ironrest.cyclic.app/hero-news/${params.id}`);
                setForm(response.data)
            } catch (err) {
                console.log(err)
            }
        }
    }, [])

    async function deleteCard() {
        try {
            await axios.delete(`https://ironrest.cyclic.app/hero-news/${params.id}`);
            //DEIXAR DINAMICO AINDA A URL, TROCAR O LOCAL HOST
            // window.location = ('http://localhost:3000/')
            navigate("/");
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="m-10 mx-20 p-5 bg-blue-500">
            <div key={form._id} className="m-2">
                <div className="m-1 bg-white rounded p-1">{form.name ? <h1>Nome: {form.name}</h1> : null}</div>
                <div className="m-1 bg-white rounded p-1">{form.age ? <p>Idade: {form.age} anos</p> : null}</div>
                <div className="m-1 bg-white rounded p-1">{form.where ? <p>Atuando em: {form.where}</p> : null}</div>
                <div className="m-1 bg-white rounded">{form.skills && form.skills.length !== 0 ?
                    <ul className="p-1">Skills:
                        {form.skills.map(element => {
                            return (<li key={`${form.name}-${element}`} className="align-middle	">- {element}</li>);
                        })}
                    </ul>
                    : null}</div>
                <div className="m-1 bg-white rounded p-1">{form.time ? <p>Horário: {form.time}</p> : null}</div>
                <div className="m-1 bg-white rounded p-1">{form.payment ? <p>Só aceita: {form.payment === "nap" ? "Não aceita pagamento" : form.payment === "pix" ? "Pix" : form.payment === "credCard" ? "Cartão de Crédito" : null}</p> : null}</div>
                <div className="m-1 mb-5 bg-white rounded p-1">{form.msg ? <h2>Slogan: {form.msg}</h2> : null}</div>
            </div>
            <Link to="/"><button className="bg-white m-1 ml-3 p-2 rounded transition ease-in-out delay-50 hover:scale-110 hover:bg-green-500 duration-50">Voltar</button></Link>
            <Link to={`/editar-anuncio/${form._id}`} id={form._id}><button className="bg-white m-1 p-2 rounded transition ease-in-out delay-50 hover:scale-110 hover:bg-yellow-500 duration-50">Editar</button></Link>
            <button to="/"
                onClick={deleteCard}
                className="bg-white m-1 p-2 rounded transition ease-in-out delay-50 hover:scale-110 hover:bg-red-500 duration-50"
            >
                Delete
            </button>

        </div>
    );
}