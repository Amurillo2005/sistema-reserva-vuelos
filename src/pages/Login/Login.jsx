import React from 'react'

export const Login = () => {
    return (
        <>
            <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{ "backgroundImage": "url(../public/avion.jpg)" }}>
                <div>
                    <div className='bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
                        <h1 className='text-4xl text-white font-bold text-center mb-6'>Iniciar sesión</h1>
                        <form action="">
                            <div className='relative my-10'>
                                <input type="text" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='Escriba su usuario'/>
                                <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 peer-focus:top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Usuario</label>
                            </div>
                            <div className='relative my-10'>
                                <input type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='Escriba su contraseña'/>
                                <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 peer-focus:top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Contraseña</label>
                            </div>
                            <button type='Submit'>Iniciar sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
