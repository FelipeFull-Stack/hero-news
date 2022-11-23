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

        <Link to="/637e15c5768c40002839f26d"
            className="">
            {form.map((currentElement) => {
                return (
                    <div>
                        <article className="w-60 rounded-md p-3 shadow grid gap-y-2 bg-blue-700">
                            <h1 className="text-white">Nome: {currentElement.name}</h1>
                            <p className="text-white">Anuncia: {currentElement.msg}</p>
                        </article><br />
                    </div>
                )
            })}
        </Link>

    )
}