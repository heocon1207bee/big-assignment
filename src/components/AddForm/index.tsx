import React from 'react'
import {useState} from 'react'
import Button from '../Button'
import Input from '../Input'
import './styles.css'

interface Props {
    data: any,
    setData: any,
    setShowStatus: any,
}

const initialValue = {
    name: '',
    amount: '',
    date: '',
}

const AddForm = ({data, setData, setShowStatus}:Props) => {

    const [newItem, setNewItem] = useState(initialValue)

    const handleSubmit = (e:any) => {
        e.preventDefault()
        if(newItem.name === '' || newItem.amount === '' || newItem.date === '') {
            alert('Please full fill!')
        } else if(parseInt(newItem.amount) < 0) {
            alert('Amount must be positive number')
        } else {
            setData([...data, {...newItem, id: new Date()}])
            setShowStatus(false)
        }
    }

  return (
    <form onSubmit={handleSubmit} className='LoginForm'>
        <div className='inputForm'>
            <Input label='Name: ' name='name' placeholder='Enter name here...' valueInput={newItem.name} onChangeInput={(e:any) => {setNewItem({...newItem, name: e.target.value})}}/>

            <Input label='Amount: ' name='amount' typeInput='number' placeholder='Enter amount here...' valueInput={newItem.amount} onChangeInput={(e:any) => {setNewItem({...newItem, amount: e.target.value})}}/>

            <Input label='Date: ' name='date' typeInput='date' valueInput={newItem.date} onChangeInput={(e:any) => {setNewItem({...newItem, date: e.target.value})}}/>
        </div>
        <div className='buttonForm'>
            <Button type='submit' text='ADD' colorButton='purpleButton'/>
            <Button text='CANCEL' onClick={() => {setShowStatus(false)}}/>
        </div>
    </form>
  )
}

export default AddForm