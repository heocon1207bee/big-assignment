import React from 'react'
import './styles.css'

interface ButtonProps {
    type?: any,
    text: string,
    onClick?: any,
    colorButton?: string,
}

const Button = ({type='button', text, onClick, colorButton='grayButton'}:ButtonProps) => {
  return (
      <div>
          <button type={type} className={colorButton} onClick={onClick}>{text}</button>
      </div>
    
  )
}

export default Button