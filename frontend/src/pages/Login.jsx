import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className="flex items-center">
    <div className="mx-auto max-w-96 flex flex-col items-center gap-5 w-full">
        <h1 className="text-3xl font-bold">Faça seu Login</h1>

        <form className="flex flex-col gap-2 w-full">
            <input type="email" className="w-full rounded-full border border-gray-300 px-4 py-2" placeholder="Digite seu e-mail" />
            <input type="password" className="w-full rounded-full border border-gray-300 px-4 py-2" placeholder="Digite sua senha" />
            <button className="cursor-pointer w-full rounded-full bg-primary-400 text-white px-4 py-2 font-semibold" type="submit">Login</button>
        </form>
        <p className="text-sm text-gray-500">Não tem uma conta? <Link to="/singup" className="underline font-semibold text-primary-400">Crie uma agora</Link></p>
    </div>
  </section> 
  )
}

export default Login