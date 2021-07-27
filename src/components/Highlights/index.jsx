import React from 'react'
import {Grid} from '@material-ui/core'
import HighlightCard from './HighlightCard';

export default function Highlights({report}) {
    const data = report && report.length ? report[report.length-1] : [];

    const summary = [
        {
            title: "Total cases",
            count: data.Confirmed,
            type: 'confirmed'
        },
        {
            title: "Recovered",
            count: data.Recovered,
            type: 'recovered'
        },
        {
            title: "Death",
            count: data.Deaths,
            type: 'death'
        }
    ]

    return (
        <div>
            <Grid container spacing = {3} >
                {summary.map((item) => (
                    <Grid item sm={4} xs={12}>
                        <HighlightCard title = {item.title} count = {item.count} type = {item.type} />
                    </Grid>
                ))} 
            </Grid>
        </div>
    )
}
