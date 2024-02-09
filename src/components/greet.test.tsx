import React from 'react'
import { render, screen } from '@testing-library/react'
import Greet from './greet'

test('Greet render corretcly', () => {
    render(<Greet/>);
    const testElement = screen.getByText('Hello');
    expect(testElement).toBeInTheDocument()
})