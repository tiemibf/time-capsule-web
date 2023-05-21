import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW SpaceTime" />
      <div className="max-width-[420px] space-y-1">
        <h1 className="text-5xl font-semibold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
        <a
          href=""
          className="hover:bg-green-60 inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black"
        >
          CADASTRAR LEMBRANÇA
        </a>
      </div>
    </div>
  )
}
