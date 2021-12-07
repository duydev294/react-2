import {Paper} from '@mui/material'
import Chart1 from '../chartjs/chartjs'
import { data } from '../chartjs/datachatrt'
const FieldChart = ()=>{
    return(
        <Paper elevation={3}>
            <Chart1 data={data} width={'300px'}
                style={{margin:'20'}}
            />
        </Paper>
    )
}
export default FieldChart