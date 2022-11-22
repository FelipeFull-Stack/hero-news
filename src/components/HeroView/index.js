import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


export function HeroView() {

    const [form, setForm] = useState();
    const params = useParams();

    useEffect(() => {
        async function fetchHero() {
            try {
                const response = await axios.get(`https://ironrest.cyclic.app/hero-news/ver-anuncio/${params.id}`);
                setForm(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchHero();
    }, [])

    console.log(form)

    return (
        <div>
            <h1>Nome: {form.name}</h1>
            <p>Idade: {form.age}</p>
            <p>Atuando em: {form.where}</p>
            <p>Skills: {form.skills.map((currentSkill) => {
                return <article>{currentSkill}</article>
            })}</p>
            <p>Horário: {form.time}</p>
            <p>Só aceita: {form.payment}</p>
            <h2>Slogan: {form.msg}</h2>
        </div>
    );
}