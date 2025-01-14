import { useState } from "react"
import "./Register.css"


export const Register = () => {

  const [formData, setFormData] = useState({
    usuario: '',
    identificacion: '',
    email: '',
    contraseña: '',
    pasaporte: '',
    contacto: '',
    direccion: '',
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
      <div className="main">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h2>Registrarse</h2>
            <div className="input-box">
              <input type="text" name="usuario" value={formData.usuario} placeholder="Usuario" onChange={handleChange} />
            </div>
            <div className="input-box">
              <input type="number" name="identificacion" value={formData.identificacion} placeholder="Identificación" onChange={handleChange} />
            </div>
            <div className="input-box">
              <input type="email" name="email" value={formData.email} placeholder="Correo" onChange={handleChange} />
            </div>
            <div className="input-box">
              <input type="password" name="contraseña" value={formData.contraseña} placeholder="Contraseña" onChange={handleChange} />
            </div>
            <div className="input-box">
              <input type="text" name="pasaporte" value={formData.pasaporte} placeholder="Pasaporte" onChange={handleChange} />
            </div>
            <div className="input-box">
              <input type="text" name="contacto" value={formData.contacto} placeholder="Contacto" onChange={handleChange} />
            </div>
            <div className="input-box">
              <input type="text" name="direccion" value={formData.direccion} placeholder="Direccion" onChange={handleChange} />
            </div>

            <button type="submit">Registrarse</button>
          </form>
        </div>
      </div>
    </>
  )
}
