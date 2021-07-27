import React from 'react'
import { Grid } from '@material-ui/core'
import LineChart from '../Charts/LineChart'


export default function Summary({ report }) {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <LineChart data = {report} />
                </Grid>
                <Grid item xs={12} sm={4}>

                </Grid>
            </Grid>
        </div>
    )
}
