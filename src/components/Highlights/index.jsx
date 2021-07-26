import React from 'react'
import {Grid, CardContent, Typography} from '@material-ui/core'

export default function Highlights() {
    return (
        <div>
            <Grid container spacing = {3} >
                <Grid item sm={4} xs={12}>
                    <CardContent>
                        <Typography component="p" variant="body2" >Cases</Typography>
                        <Typography component="span" variant="body2" >20000</Typography>
                    </CardContent>
                </Grid>
                <Grid item sm={4} xs={12}>
                <CardContent>
                        <Typography component="p" variant="body2" >Recovered</Typography>
                        <Typography component="span" variant="body2" >2000</Typography>
                    </CardContent>
                </Grid>
                <Grid item sm={4} xs={12}>
                <CardContent>
                        <Typography component="p" variant="body2" >Death</Typography>
                        <Typography component="span" variant="body2" >500</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
