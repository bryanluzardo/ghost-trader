// app/curso/[slug]/page.jsx (Server Component)
import { getModulos } from '@/lib/MD'
import { Leccion } from '@/app/components/Leccion'

export default async function CursoPage({ params }) {
  const modulos = await getModulos()
  const modulo = modulos.find(m => m.slug === params.slug)

  return (
    <>
      <h1>{modulo.frontmatter.title}</h1>
      <Leccion content={modulo.content} />
    </>
  )
}
