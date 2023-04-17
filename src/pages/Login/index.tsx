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
        <div className="container mx-auto max-w-[72rem] h-[600px] flex items-center justify-center sm:h-[474px]">
          <div className="flex items-center justify-center flex-col gap-4">
            <h1 className="text-lg font-bold">Iniciar Sessão</h1>

            <form
              onSubmit={handleSubmit}
              className="gap-3 flex flex-col items-center"
            >
              <input
                required
                type="email"
                placeholder="Escreva seu email"
                className="w-[300px] h-[63.13px] p-3 sm:w-[423px]"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                required
                minLength={6}
                maxLength={8}
                type="password"
                placeholder="Escreva sua senha"
                className="w-[300px] h-[63.13px] p-3 sm:w-[423px]"
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                className={
                  'w-[300px] h-[63.13px] p-4 transition duration-150 bg-blue-500  text-white hover:bg-blue-200 sm:w-[423px]'
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
