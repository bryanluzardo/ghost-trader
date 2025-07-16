'use client'
import './Percentage.css'
import { useEffect, useState } from "react";   
export function Porcentaje () {
    const [percentage, setPercentage] = useState(0)
    const [speed, setSpeed] = useState(20)


    useEffect(() => {
        const interval = setInterval(() => {
            
            setPercentage((prevPercentage) => {
                if (prevPercentage === 85) {
                    clearInterval(interval)
                    return prevPercentage
                }
                return prevPercentage + 1
            });
            setSpeed((prevSpeed) => {
                if(percentage === 82) {
                    return 650
                }else if(percentage === 83) {
                    return 850
                }else if(percentage === 84) {
                    return 1000
                }
                return prevSpeed + 1
            });
        }, speed);
        return () => clearInterval(interval)
    }, [speed])


    return (
        <div className='winratio'>
            <h2 className="percentage">¡Más del <span>{percentage}</span>% de nuestros alumnos es rentable!</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sit molestias nobis explicabo, fuga doloremque harum repellendus dolore beatae modi eos ea eius repellat unde in nesciunt et, optio eum.</p>
        </div>
    )
}