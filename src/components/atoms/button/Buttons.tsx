import React from 'react'
import { Button } from 'react-bootstrap'

interface IButtons {
    variant?: string;
    text?: string;
}

export const Buttons: React.FC<IButtons> = ({variant, text}) => {
  return (
    <Button variant={variant}>{text}</Button>
  )
}
