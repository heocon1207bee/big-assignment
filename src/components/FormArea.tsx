import React from 'react'
import {useState, useEffect} from 'react'
import Button from './Button'
import './FormArea.css'
import AddForm from './AddForm'

interface Props {
  data: any,
  setData: any,
}

const Login = ({data, setData}:Props) => {

  const [showStatus, setShowStatus] = useState(false)

  return (
    <div className='Login'>
        {showStatus ? (
            <AddForm data={data} setData={setData} setShowStatus={setShowStatus}/>
          ) : (
            <Button text={'ADD NEW EXPENSE'} onClick={() => {setShowStatus(true)}} colorButton={'purpleButton'} />
          ) 
        }
    </div>
  )
}

export default Login