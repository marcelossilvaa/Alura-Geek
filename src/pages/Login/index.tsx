import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const changeEmail = setEmail(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    const changePassword = setPassword(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate('/productshome');
  }
  return (
    <>
      <section className="bg-[#E5E5E5]">
        <div className="container mx-auto max-w-[72rem] h-[474px] flex items-center justify-center">
          <div className="flex items-center justify-center flex-col gap-4">
            <h1 className="text-lg font-bold">Iniciar Sessão</h1>

            <form onSubmit={handleSubmit} className="gap-3 flex flex-col">
              <input
                required
                type="email"
                placeholder="Escreva seu email"
                className="w-[423px] h-[63.13px] p-3"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                required
                minLength={6}
                maxLength={8}
                type="password"
                placeholder="Escreva sua senha"
                className="w-[423px] h-[63.13px] p-3 "
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                className={
                  'w-[423px] h-[63.13px] p-4 transition duration-150 bg-blue-500  text-white hover:bg-blue-200'
                }
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
