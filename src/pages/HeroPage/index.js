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

        <div className="flex flex-row items-center gap-3 m-5">

            {form.map((currentElement) => {
                return (
                    <>
                        <Link to={`/ver-anuncio/${currentElement._id}`} className="w-40 rounded-md p-3 shadow grid gap-y-2 bg-blue-700 transition ease-in-out delay-50 hover:scale-110 hover:bg-red-500 duration-50">
                            <h1 className="text-white">- {currentElement.name}</h1>
                            <p className="bg-white rounded-md text-blue text-center">"{currentElement.msg}"</p>
                        </Link>

                    </>
                )
            })

            }
            <Link to="/criar-anuncio" className="w-20 h-20 rounded-md items-center text-center text-3xl shadow grid gap-y-2 bg-white transition ease-in-out delay-50 hover:scale-110 hover:bg-blue-500 duration-50">
                (+)
            </Link>
        </div>

    )
}