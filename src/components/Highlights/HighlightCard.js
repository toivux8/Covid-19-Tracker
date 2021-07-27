import React from 'react'
import CountUp from 'react-countup'
import {Card, CardContent, Typography, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    wrapper: (props) => {
        if(props.type === 'confirmed') return {borderLeft: '5px solid #c9302c'};
        if(props.type === 'recovered') return {borderLeft: '5px solid #28a745'};
        else return {borderLeft: '5px solid gray'};
    },
    title: {
        fontSize: 16,
        marginBottom: 5
    },
    count: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold'
    }
});

export default function HighlightCard({title, count, type}) {

    const style = useStyles({type});

    return (
        <div>
            <Card className={style.wrapper} >
                <CardContent>
                    <Typography component="p" variant="body2" className={style.title} >{title}</Typography>
                    <Typography component="span" variant="body2" className={style.count} >
                        <CountUp end = {count || 0} duration = {1.5} separator=' ' />
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
