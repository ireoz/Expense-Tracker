import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => {
     return   dataPoint.value
    }
        ); 
    const totalMaximum = Math.max(...dataPointsValues);
    console.log(props.dataPoints[0].label)

    return <div className='chart'>
    {props.dataPoints.map((dataPoint) => {
      return  <ChartBar 
        key = {dataPoint.label}
        value = {dataPoint.value} 
        maxValue = {totalMaximum}
        label = {dataPoint.label}/>
    })}
    </div>
};

export default Chart;