import React from 'react'
import {useState, useEffect} from 'react'
import RenderList from './RenderList'
import './RenderArea.css'
import Chart from './Chart'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
  
ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

const initialValues = {
    Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0, Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0,
}

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '',
      },
    },
};

interface Props {
    data: any,
    setData: any,
}

const Render = ({data, setData}:Props) => {

    const [renderData, editRenderData] = useState(data)
    const [filterValue, setFilterValue] = useState(0)

    useEffect(() => {editRenderData(data); filterByYear(filterValue)}, [data])

    const filterByYear = (value:number) => {
        setFilterValue(value)
        editRenderData(() => {
            if(value === 0) {
                return data;
            } else {
                return data.filter((d:any) => {
                    if(d.date.includes(value) === true) {return d}
                })
            }
        })
    }


    const render = () => {
        if(renderData.length === 0) {
            return (
                <p>Empty...</p>
            )
        } else {
            return (
                renderData.map((d:any, index:number) => {
                    return (
                        <RenderList key={index} renderData={d} fullData={data} setData={setData}/>
                    )
                })
            )
        }
    }

    
    const [sum, setSum] = useState(initialValues)


    useEffect(()=>{
        const chartValue = {Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0, Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0,}
        renderData.map((d:any) => {
            const m = d.date.split('-')[1]
            switch(parseInt(m)) {
                case 1:
                    chartValue.Jan += parseInt(d.amount)
                    break
                case 2:
                    chartValue.Feb += parseInt(d.amount)
                    break
                case 3:
                    chartValue.Mar += parseInt(d.amount)
                    break
                case 4:
                    chartValue.Apr += parseInt(d.amount)
                    break
                case 5:
                    chartValue.May += parseInt(d.amount)
                    break
                case 6:
                    chartValue.Jun += parseInt(d.amount)
                    break
                case 7:
                    chartValue.Jul += parseInt(d.amount)
                    break
                case 8:
                    chartValue.Aug += parseInt(d.amount)
                    break
                case 9:
                    chartValue.Sep += parseInt(d.amount)
                    break
                case 10:
                    chartValue.Oct += parseInt(d.amount)
                    break
                case 11:
                    chartValue.Nov += parseInt(d.amount)
                    break
                case 12:
                    chartValue.Dec += parseInt(d.amount)
                    break
            }
        })
        setSum(chartValue)
    }, [renderData])


    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const chartData = {
        labels,
        datasets: [
          {
            label: 'Amount',
            data: labels.map((d) => {
                switch(d) {
                    case 'Jun': return sum.Jun
                    case 'Feb': return sum.Feb
                    case 'Mar': return sum.Mar
                    case 'Apr': return sum.Apr
                    case 'May': return sum.May
                    case 'Jun': return sum.Jun
                    case 'Jul': return sum.Jul
                    case 'Aug': return sum.Aug
                    case 'Sep': return sum.Sep
                    case 'Oct': return sum.Oct
                    case 'Nov': return sum.Nov
                    case 'Dec': return sum.Dec
                    default: return 0
                }
            }),
            backgroundColor: 'rgba(124, 49, 145)',
          },
        ],
    };

  return (
    <div className='Render'>
        <div className='filterData'>
            <small>Filter by year</small>
            <select defaultValue={filterValue} onChange={(e) => {filterByYear(parseInt(e.target.value))}}>
                <option value={0}>All</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
            </select>
        </div>
        <div className='chartData'><Bar options={options} data={chartData} width='549px'/></div>
        <ul className='renderData'>{render()}</ul>
        {renderData.length > 4 && <p className='scrollAlert'>^^^ Scroll to see more ^^^</p>}
    </div>
  )
}

export default Render