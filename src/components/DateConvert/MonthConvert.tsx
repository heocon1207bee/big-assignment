import React from 'react'

interface Props {
  month: number,
}
const MonthConvert = ({month}:Props) => {
  switch(month) {
    case 1:
      return <small className='month'>January</small>
    case 2:
      return <small className='month'>February</small>
    case 3:
      return <small className='month'>March</small>
    case 4:
      return <small className='month'>April</small>
    case 5:
      return <small className='month'>May</small>
    case 6:
      return <small className='month'>June</small>
    case 7:
      return <small className='month'>July</small>
    case 8:
      return <small className='month'>August</small>
    case 9:
      return <small className='month'>September</small>
    case 10:
      return <small className='month'>October</small>
    case 11:
      return <small className='month'>November</small>
    case 12:
      return <small className='month'>December</small>
    default:
      return <small className='month'>Error!!!</small>
  }
}

export default MonthConvert