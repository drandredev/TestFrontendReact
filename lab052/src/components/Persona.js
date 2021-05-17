import React from 'react'

export default function Persona({persona}) {
    return (
        <div>
        <p>{persona.name}</p>
        <p>{persona.numero}</p>
        </div>
    )
}
