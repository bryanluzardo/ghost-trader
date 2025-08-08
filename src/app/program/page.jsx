'use client'
import { useEffect, useState } from "react";
import "./Programa.css"

export default function Programa() {
    const [modulos, setModulos] = useState([]);
    const [activo, setActivo] = useState(null);

    useEffect(() => {
        fetch('/api/modulos')
            .then(res => res.json())
            .then(data => setModulos(data));
    }, []);

    const toggleModulo = (index) => {
        setActivo(activo === index ? null : index);
    }

    return (
        <div className="programa">
            <h1>Programa</h1>
            {
                modulos.map((modulo, index) => (
                    <div className={`modulo`} key={modulo.modulo}>
                        <div className="modulo-header" onClick={() => toggleModulo(index)}>
                            <h2>Modulo {index + 1} - {modulo.titulo}</h2>
                            <span className={`flecha ${activo === index ? 'abierto' : ''}`}>▼</span>
                        </div>
                        <div className={`modulo-contenido ${activo === index ? 'mostrar' : ''}`}>
                            <p>{modulo.resumen}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
