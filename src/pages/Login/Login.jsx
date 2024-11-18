import { useState } from "react"
import "./Login.css"


export const Login = () => {

    const [formData, setFormData] = useState({
        usuario: '',
        contraseña: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <>
            <div className="wrapper">
                <form action="" onSubmit={handleSubmit}>
                    <h2>Iniciar sesión</h2>
                    <div className="input-box">
                        <input type="text" name="usuario" value={formData.usuario} placeholder="Usuario" onChange={handleChange}/>
                    </div>
                    <div className="input-box">
                        <input type="password" name="contraseña" value={formData.contraseña} placeholder="Contraseña" onChange={handleChange}/>
                    </div>
                    
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
        </>
    )
}
