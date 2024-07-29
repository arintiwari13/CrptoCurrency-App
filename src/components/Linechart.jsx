import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const Linechart = ({histiricaldata}) => {

    const [data, setdata] = useState([["Date, Prices"]]);

    useEffect(() => {
        let datacopy = [["Date", "Prices"]];
        if(histiricaldata.prices){
            histiricaldata.prices.map((item) => {
                datacopy.push([`${new Date(item[0]).toLocaleDateString().
                    slice(0,-5)}`, item[1]])
            })
            setdata(datacopy);
        }

    }, [histiricaldata])

  return (
    <Chart
        chartType='LineChart'
        data={data}
        height="100%"
        legend_toggle
    />
  )
}

export default Linechart