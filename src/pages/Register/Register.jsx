import { useState } from "react"


export const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    usuario: '',
    identificacion: '',
    email: '',
    contraseña: '',
    telefono: ''
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
      <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{ "backgroundImage": "url(../public/avion.jpg)" }}>
        <div>
          <div className='bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
            <h1 className='text-4xl text-white font-bold text-center mb-6'>Registrarse</h1>
            <form onSubmit={handleSubmit}>
              <div className='relative my-10'>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='Escriba su nombre' />
                <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 peer-focus:top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Nombre</label>
              </div>
              <div className='relative my-10'>
                <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='Escriba su apellido' />
                <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 peer-focus:top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Apellido</label>
              </div>
              <div className='relative my-10'>
                <input type="text" name="usuario" value={formData.usuario} onChange={handleChange} className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='Escriba su usuario' />
                <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 peer-focus:top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Usuario</label>
              </div>
              <div className='relative my-10'>
                <input type="number" name="identificacion" value={formData.identificacion} onChange={handleChange} className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='Escriba su identificación' />
                <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 peer-focus:top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Identificación</label>
              </div>
              <div className='relative my-10'>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='Escriba su email' />
                <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 peer-focus:top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Email</label>
              </div>
              <div className='relative my-10'>
                <input type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='Escriba su contraseña' />
                <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 peer-focus:top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Contraseña</label>
              </div>
              <div className='relative my-10'>
                <input type="number" name="telefono" value={formData.telefono} onChange={handleChange} className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='Escriba su telefono' />
                <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 peer-focus:top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Teléfono</label>
              </div>
              <button type='Submit' className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300 '>Registrarse</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
