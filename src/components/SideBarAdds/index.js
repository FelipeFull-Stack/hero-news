import { HeroView } from "../HeroView"
import { CardHero } from "../CardHero"
import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";


export function SideBarAdds() {

    const [form, setForm] = useState();
    // const random = Math.floor(Math.random()*10);
    let arrayDisplayRandomHero = [];

    useEffect(() => {
        async function fetchForm() {
            try {
                const response =  await axios.get(`https://ironrest.cyclic.app/hero-news`);
                setForm(response.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchForm();
    },[])


    for(let i=0; i<4; i++) { //salvando 4 elementos do Form em arrayDisplayRandomHero
        arrayDisplayRandomHero.push(form.filter((currentElement, index) => {
            if(index === Math.floor(Math.random()*10)) {
                return currentElement;
            }
        }))
    }

    

    //fazer um numero aleatorio para salvar o array novo
    //criar um array de 4 elementos aleatorios do form
    //passar suas respectivas props para os CardHero


    return (
        <div>
            <CardHero name="" anuncio="" id="" />{/*name={arrayDisplayRandomHero[0]}*/}
            <CardHero name="" anuncio="" id="" />{/*name={array[1]}*/}
            <CardHero name="" anuncio="" id="" />{/*name={array[2]}*/}
            <CardHero name="" anuncio="" id="" />{/*name={array[3]}*/}
        </div>
    )
}