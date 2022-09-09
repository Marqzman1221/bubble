import { signIn } from 'next-auth/react'

const Login = () => {
  const providers = [
    {
      name: 'Google',
    },
    {
      name: 'GitHub',
    },
  ]
  return (
    <div className="h-screen flex justify-center p-8">
      <div className="bg-neutral-800 rounded-xl p-4 w-96 h-min">
        <h1 className="text-3xl font-bold">Welcome to Bubble</h1>
        <div className="text-lg font-light py-4">Login with</div>
        <div className="flex flex-col gap-y-2">
          {providers.map((provider, index) => {
            return (
              <button
                className="rounded px-4 py-2 font-semibold bg-rose-600 transition hover:bg-rose-500 active:bg-rose-800"
                key={`provider-${index}`}
                onClick={() =>
                  signIn(provider.name.toLowerCase(), { callbackUrl: '/' })
                }
              >
                {provider.name}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Login
