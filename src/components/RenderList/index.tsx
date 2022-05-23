import React from 'react'
import MonthConvert from '../DateConvert/MonthConvert'
import './styles.css'
import {MdDeleteForever} from 'react-icons/md'

interface Props {
    renderData: any,
    fullData: any,
    setData: any,
}

const RenderList = ({renderData, fullData, setData}:Props) => {

  const dateArray = renderData.date.split('-')

  const handleDelete = () => {
    setData(fullData.filter((d:any) => {
      if(d.id !== renderData.id) {
        return d
      }
    }))
  }

  return (
    <li className='RenderList'>
        <div className='renderDate'>
          <MonthConvert month={parseInt(dateArray[1])}/>
          <h2 className='date'>{dateArray[2]}</h2>
          <small className='year'>{dateArray[0]}</small>
        </div>
        <h3 className='renderName'>{renderData.name}</h3>
        <div className='renderAmount'>{renderData.amount} $</div>
        <div className='editPanel'><button onClick={handleDelete}><MdDeleteForever fontSize='20px' color='white'/></button></div>
    </li>
  )
}

export default RenderList