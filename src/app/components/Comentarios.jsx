'use client'
import { useEffect, useState } from 'react'
import './Comentarios.css'

export function Comentarios() {
  const [comentarios, setComentarios] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleCount = 2

  useEffect(() => {
    fetch('/api/comentarios')
      .then(res => res.json())
      .then(data => setComentarios(data))
  }, [])

  const next = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= comentarios.length - visibleCount + 1
          ? 0
          : prevIndex + 1
      )
  }

  const prev = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0
          ? comentarios.length - visibleCount
          : prevIndex - 1
      )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= comentarios.length - visibleCount + 1
          ? 0
          : prevIndex + 1
      )
    }, 5000)
  
    return () => clearInterval(interval)
  }, [comentarios.length, currentIndex])

  return (
    <>
      <h2 className="comments-title">Opiniones de nuestros estudiantes</h2>
      <div className="slider-container">
        <button onClick={prev} className="slider-btn">‹</button>

        <div className="comments-viewport">
          <div
            className="comments-slider"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
            }}
          >
            {comentarios.map((comentario, index) => (
              <div key={index} className="comment-box">
                <h3 className="comment-name">{comentario.nombre}</h3>
                <p className="comment-rating">Calificación: {comentario.calificacion}</p>
                <p className="comment-review">{comentario.review}</p>
              </div>
            ))}
          </div>
        </div>

        <button onClick={next} className="slider-btn">›</button>
      </div>
    </>
  )
}
