import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../index.css";
import imgIcon from '../../fonts/add-circle-outline.svg';


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

        <div className="flex flex-row flex-wrap place-content-start gap-3 mx-8 my-5">

            {form.map((currentElement) => {
                return (
                    <div>
                        <Link to={`/ver-anuncio/${currentElement._id}`} className="w-44 rounded-md p-3 shadow grid gap-y-2 bg-blue-700 transition ease-in-out delay-50 hover:scale-110 hover:bg-red-500 duration-50">
                            <h1 className="text-white text-[18px] mx-auto font-bold capitalize">{currentElement.name}</h1>
                            <p className="bg-white p-1 rounded-md text-blue-700 text-center text-[16px] italic leading-tight">"{currentElement.msg}"</p>
                        </Link>
                    </div>
                )
            })

            }
            <Link to="/criar-anuncio" className="w-12 rounded-md items-center text-center text-3xl shadow grid gap-y-2 bg-white transition ease-in-out delay-50 hover:scale-110 hover:bg-blue-500 duration-50">
                <img src={imgIcon} alt="icon-add"/>
            </Link>
        </div>

    )
}