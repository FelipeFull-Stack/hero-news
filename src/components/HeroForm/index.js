import { useState } from "react";
import axios from "axios";

export function HeroForm() {

    // funções
    const [skill, setSkill] = useState("");
    const [form, setForm] = useState({
        name: "",
        age: "",
        skills: [],
        where: "",
        time: "",
        payment: "nap",
        msg: "",
    })

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await axios.post("https://ironrest.cyclic.app/hero-news", form);
            // console.log(form);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="inputName">Nome: </label>
            <input
                id="inputName"
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                placeholder="Digite seu nome de heroi"
            />


            <label htmlFor="input-age">Idade: </label>
            <input
                type='number'
                id='input-age'
                name='age'
                onChange={handleChange}
                value={form.age}
            ></input>


            <label htmlFor="input-where">Onde: </label>
            <input
                type='text'
                id='input-where'
                name='where'
                onChange={handleChange}
                value={form.where}
            ></input>

            <label htmlFor="inputSkills">
                Quais suas habilidades?{" "}
            </label>
            <input
                id="inputSkills"
                type="text"
                name="skills"
                placeholder="Suas skills de heroi..."
                onChange={(event) => {
                    setSkill(event.target.value);
                }}
            />
            <button
                type="button"
                onClick={() => {
                    setForm({ ...form, skills: [...form.skills, skill] });
                }}
            >
                Adicionar
            </button>

            <select
                id='input-time'
                name='time'
                onChange={handleChange}
                defaultValue={form.time}
            >
                <option value="day">Diurno</option>
                <option value="night">Noturno</option>
                <option value="full-day">24h</option>
            </select>

            <label>Forma de pagamento: </label>
            <label htmlFor="input-payment-pix">Pix</label>
            <input
                id="input-payment-pix"
                type="radio"
                name="payment"
                value="pix"
                onChange={handleChange}
                checked={form.payment === "pix"}
            />
            <label htmlFor="input-payment-credCard">Cred-Card</label>
            <input
                id="input-payment-credCard"
                type="radio"
                name="payment"
                value="credCard"
                onChange={handleChange}
                checked={form.payment === "credCard"}
            />
            <label htmlFor="input-payment-nap">Não Aceita Pagamento</label>
            <input
                id="input-payment-nap"
                type="radio"
                name="payment"
                value="nap"
                onChange={handleChange}
                checked={form.payment === "nap"}
            />


            <label htmlFor="inputMsg">Crie sua mensagem</label>
            <input
                id="inputMsg"
                type="text"
                name="msg"
                onChange={handleChange}
                value={form.msg}
                maxLength={99}
            />
            
            <button type="Submit">Enviar</button>
        </form>
    )
}