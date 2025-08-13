// app/components/Leccion.jsx (Client Component)
'use client'
import ReactMarkdown from 'react-markdown'

export function Leccion({ content }) {
    console.log(content)
  return <ReactMarkdown>{content}</ReactMarkdown>
}
