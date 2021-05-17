import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from "@testing-library/react"
import Persona from './Persona'

test('Renderizado datos de Persona correcto', () => {
    const persona = {
        name: 'TEST',
        numero: '9999'
    }

    const component = render(<Persona persona={persona} />)
    console.log(component)
    expect(component.container).toHaveTextContent(persona.name)



})

