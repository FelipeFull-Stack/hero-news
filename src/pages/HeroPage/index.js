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

        <div className="flex flex-row gap-2 m-2">

            {form.map((currentElement) => {
                    return (
                        <Link to={`/ver-anuncio/${currentElement._id}`} className="" >
                            <article className="w-60 rounded-md p-3 shadow grid gap-y-2 bg-blue-700">
                                <h1 className="text-white">- {currentElement.name}</h1>
                                <p className="text-white">"{currentElement.msg}"</p>
                            </article><br />
                        </Link>
                    )
                })
            }
        </div>

    )
}