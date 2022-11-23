import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../index.css";

export function HeroPage() {

    const [form, setForm] = useState([]);

    useEffect(() => {
        async function fetchHeroCard() {
            try {
                const response = await axios.get("https://ironrest.cyclic.app/hero-news")
                setForm(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchHeroCard();
    }, [])
    console.log(form)
    return (
        <div className="bg-red-200 inline-grid">
            {/* <Link to={`/ver-anuncio`} > */}
                {form.map((currentElement) => {
                    return (
                        <div>
                            <h1>Nome: {currentElement.name}</h1>
                            <p>Anuncia: {currentElement.msg}</p>
                        </div>
                    )
                })}
            {/* </Link> */}
        </div>
    )
}