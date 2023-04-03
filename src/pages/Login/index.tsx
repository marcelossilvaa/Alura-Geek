import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msgEmail, setMsgEmail] = useState('')
  const [msgPassword, setMsgPassword] = useState('')

  return (
    <>
      <section className="bg-[#E5E5E5]">
        <div className="container mx-auto max-w-[72rem] h-[474px] flex items-center justify-center">
          <div className="flex items-center justify-center flex-col gap-4">
            <h1 className="text-lg font-bold">Iniciar Sessão</h1>
            <div className="gap-3 flex flex-col">
              <input
                type="email"
                placeholder="Escreva seu email"
                className="w-[423px] h-[63.13px] p-3"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <div className="text-red-700 text-sm">{msgEmail}</div>
              <input
                type="password"
                placeholder="Escreva sua senha"
                className="w-[423px] h-[63.13px] p-3 "
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
              <div className="text-red-700 text-sm">{msgPassword}</div>
            </div>

            <NavLink to="/productshome">
              <button
                className={
                  'w-[423px] h-[63.13px] p-4 transition duration-150 bg-blue-500  text-white hover:bg-blue-200'
                }
                onClick={() => {
                  if (email === '') {
                    setMsgEmail('Preencha o email')
                    return false
                  }
                  if (password === '') {
                    setMsgPassword('Preencha a senha')
                    return false
                  }
                  setMsgEmail('')
                  setMsgPassword('')
                  ;<NavLink to="/productshome" />
                }}
              >
                Entrar
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}
