import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// EDITAR ANUNCIO

export function HeroEdit(props) {

    const params = useParams();
    const [form, setForm] = useState({
        name: "",
        age: 30,
        skills: [],
        where: "",
        time: "",
        payment: "nap",
        msg: "",
    })

    useEffect(() => {
        fetchHero();
        console.log(params.id);
        async function fetchHero() {
            try {
                const response = await axios.get(`https://ironrest.cyclic.app/hero-news/${params.id}`);
                console.log(response.data);
                setForm(response.data)
            } catch (err) {
                console.log(err)
            }
        }
    }, [])

    const [skill, setSkill] = useState("");

    function handleChange(event) {

        setForm({ ...form, [event.target.name]: event.target.value })
    }

    async function handleSubmitChange(event) {
        event.preventDefault();

        try {
            delete form._id;
            const res = await axios.put(`https://ironrest.cyclic.app/hero-news/${params.id}`, {
                name: form.name,
                age: form.age,
                skills: form.skills,
                where: form.where,
                time: form.time,
                payment: form.payment,
                msg: form.msg,
            });
            window.location = ('http://localhost:3000/');
            // setForm({
            //     name: "",
            //     age: 30,
            //     skills: [],
            //     where: "",
            //     time: "",
            //     payment: "nap",
            //     msg: "",
            // })
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

        <form className="m-5 mx-20 p-5 bg-yellow-500">
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
            <div className="m-1 bg-white rounded p-1">
                <label htmlFor="inputSkills">
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
                        <strong className="p-1 h-6 leading-8 m-1 bg-green-500 rounded">{currentSkill}</strong>
                        <button
                            type="button"
                            className="bg-red-500 h-6 leading-3 rounded p-1 mx-1 transition ease-in-out delay-50 hover:scale-150 hover:bg-red-500 duration-50"
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
                    {/* selected="selected" */}
                    <option value="Diurno" selected={form.time === 'Diurno' ? "selected" : ""}>Diurno</option>
                    <option value="Noturno" selected={form.time === 'Noturno' ? "selected" : ""}>Noturno</option>
                    <option value="24h" selected={form.time === '24h' ? "selected" : ""}>24h</option>
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
            <Link to="/"><button className="bg-white m-1 p-2 rounded transition ease-in-out delay-50 hover:scale-110 hover:bg-green-500 duration-50">Voltar</button></Link>
            <button type="button" onClick={handleSubmitChange} className="bg-white m-1 p-2 rounded transition ease-in-out delay-50 hover:scale-110 hover:bg-green-500 duration-50">Enviar</button>
        </form>
    )
}





