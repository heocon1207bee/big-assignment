import React from 'react'
import {useState} from 'react'
import './styles.css'

interface InputProps {
    label: string,
    name: string,
    placeholder?: string,
    valueInput?: any,
    typeInput?: any,
    onChangeInput?: any,
}

const Input = ({label, name, placeholder, valueInput, typeInput='text', onChangeInput}:InputProps) => {
  
  return (
    <div className='formInput'>
        <label htmlFor={name}>{label}</label>
        <input 
            type={typeInput} 
            placeholder={placeholder} 
            name={name} 
            value={valueInput} 
            onChange={onChangeInput}>
        </input>
    </div>
  )
}

export default Input