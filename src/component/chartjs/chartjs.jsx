import {Line} from 'react-chartjs-2'
import 'chart.js/auto'
const Chart1 =({data})=>{
    const label = data[0].datas.map(e=>e.time)
    return(
        <Line
        
        datasetIdKey='id'
        data={{
           
          labels: label,
          datasets: [
            {
              id: 1,
              label: data[0].name,
              data: data[0].datas.map(e=>e.result),
              backgroundColor:[
                  'rgba(255,99,132)'
              ],
              borderWidth:3
            },
            
          ],
          
        }}
        width={'30%'}
        options={{ maintainAspectRatio: false }}
      />
    )
}
export default Chart1