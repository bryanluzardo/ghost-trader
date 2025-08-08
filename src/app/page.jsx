import { Hero } from './components/Hero.jsx'
import { Porcentaje } from './components/Percentage.jsx'
import { Comentarios } from './components/Comentarios.jsx'
import { Metodo } from './components/Metodo.jsx'
import { PlanesLanding } from './components/PlanesLanding.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Porcentaje />
      <Metodo />
      <Comentarios />
      <PlanesLanding />
    </>
  )
}
