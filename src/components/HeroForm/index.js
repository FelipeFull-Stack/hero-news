import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function HeroForm() {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        age: 30,
        skills: [],
        where: "",
        time: "",
        payment: "nap",
        msg: "",
    })

    const [skill, setSkill] = useState("");

    function handleChange(event) {



        setForm({ ...form, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            let res = await axios.get("https://ironrest.cyclic.app/hero-news");
            let arr = res.data;
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                if (element.name === form.name) {
                    console.log('repetido');
                    return
                }
            }
            await axios.post("https://ironrest.cyclic.app/hero-news", form);
            setForm({
                name: "",
                age: 30,
                skills: [],
                where: "",
                time: "",
                payment: "nap",
                msg: "",
            })
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    function handleSkillInput() {
        if (form.skills.includes(skill) || skill === '') {
            return { ...form }
        }
        return { ...form, skills: [...form.skills, skill] };
    }

    return (

        <form className="m-10 mx-20 p-5 bg-blue-500">
            {/* NAME */}
            <div className="m-1 bg-white rounded p-1">
                <label htmlFor="inputName">Nome: </label>
                <input
                    id="inputName"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={form.name}
                    required
                    className="bg-gray-300 border indent-1 border-black rounded"
                />
            </div>

            {/* AGE */}
            <div className="m-1 bg-white rounded p-1">
                <label htmlFor="input-age">Idade: </label>
                <input
                    type='number'
                    id='input-age'
                    name='age'
                    onChange={handleChange}
                    value={form.age}
                    className="w-20 bg-gray-300 border border-black indent-1 rounded"
                ></input>
            </div>

            {/* WHERE */}
            <div className="m-1 bg-white rounded p-1">
                <label htmlFor="input-where">Onde: </label>
                <input
                    type='text'
                    id='input-where'
                    name='where'
                    onChange={handleChange}
                    value={form.where}
                    required
                    className="bg-gray-300 border indent-1 border-black rounded"
                ></input>
            </div>

            {/* SKILLS*/}
            <div className="m-1 bg-white rounded p-1 pb-3">
                <label htmlFor="inputSkills" >
                    Quais suas habilidades?{" "}
                </label>
                <input
                    id="inputSkills"
                    type="text"
                    name="skills"
                    value={skill}
                    className="bg-gray-300 border indent-1 border-black rounded"
                    // REMOVED ENTER, CONFLICT WITH SUBMIT BTN
                    onKeyDown={(event) => event.key === 'Enter' ?
                        (
                            setForm(handleSkillInput()),
                            setSkill('')
                        )
                        : null
                    }
                    onChange={(event) => {
                        setSkill(event.target.value);
                    }}
                />
                <button
                    type="button"
                    className="rounded leading-6 p-1 mx-1 text-xl transition ease-in-out delay-50 hover:scale-110 hover:bg-red-500 duration-50"
                    onClick={() => {
                        setForm(handleSkillInput());
                        setSkill('');
                    }}
                >
                    (+)
                </button>
                <br />
                {form.skills.map((currentSkill) => (
                    <div key={`${form.name}-${currentSkill}`}>
                        <strong className="p-1 m-1 bg-blue-500 rounded">{currentSkill}</strong>
                        <button
                            type="button"
                            className="bg-red-500 h-6 align-top leading-3 rounded p-1 mx-1 transition ease-in-out delay-50 hover:scale-150 hover:bg-red-500 duration-50"
                            onClick={() => {
                                setForm({ ...form, skills: form.skills.filter(element => element !== currentSkill) });
                            }}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>

            {/* TIME*/}
            <div className="m-1 bg-white rounded p-1">
                <label htmlFor="input-time">Horário: </label>
                <select
                    id='input-time'
                    name='time'
                    onChange={handleChange}
                    defaultValue={form.time}
                    className="border-2 border-blue-500"
                >
                    <option value="day">Diurno</option>
                    <option value="night">Noturno</option>
                    <option value="full-day">24h</option>
                </select>
            </div>

            {/* PAYMENT*/}
            <div className="m-1 bg-white rounded p-1">
                <label className="pr-1">Forma de pagamento: </label>

                <input
                    id="input-payment-pix"
                    type="radio"
                    name="payment"
                    value="pix"
                    onChange={handleChange}
                    checked={form.payment === "pix"}
                    className="p-1"
                />
                <label htmlFor="input-payment-pix" className="p-1">Pix |</label>
                <input
                    id="input-payment-credCard"
                    type="radio"
                    name="payment"
                    value="credCard"
                    onChange={handleChange}
                    checked={form.payment === "credCard"}
                />
                <label htmlFor="input-payment-credCard" className="p-1">Cred-Card |</label>
                <input
                    id="input-payment-nap"
                    type="radio"
                    name="payment"
                    value="nap"
                    onChange={handleChange}
                    checked={form.payment === "nap"}
                />
                <label htmlFor="input-payment-nap" className="p-1">Não Aceita Pagamento</label>
            </div>

            {/* MSG ADD*/}
            <div className="m-1 bg-white rounded p-1 align-top">
                <label htmlFor="inputMsg">Crie sua mensagem: </label>
                <textarea
                    id="inputMsg"
                    type="text"
                    name="msg"
                    onChange={handleChange}
                    value={form.msg}
                    maxLength={99}
                    required
                    className="align-top bg-gray-300 border indent-1 border-black rounded pr-40"
                />
            </div>
            <Link to="/" className="bg-white m-1 p-2 rounded transition ease-in-out delay-50 hover:scale-110 hover:bg-green-500 duration-50">Voltar</Link>                    
            <button type="button" onClick={handleSubmit} className="bg-white m-1 p-2 rounded transition ease-in-out delay-50 hover:scale-110 hover:bg-green-500 duration-50">Criar</button>
        </form>
    )
}