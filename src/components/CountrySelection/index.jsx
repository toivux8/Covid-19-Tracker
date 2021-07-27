import React from 'react'
import { FormControl,makeStyles, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    FormControl: {
        margin: `${theme.spacing(3)}px 0`,
    },
}));

export default function CountrySelection({value, handleOnChangeCountry, countries}) {
    const styles = useStyles();

    return (
        <div>
            <FormControl className={styles.FormControl}>
                <InputLabel htmlFor = "" shrink>Country</InputLabel>
                <NativeSelect
                    value = {value}
                    onChange = {handleOnChangeCountry}
                    inputProps = {{
                        name: 'country',
                        id: 'country-selector'
                    }}
                >
                    {
                        countries.map((country) => {
                            return <option key = {country.ISO2} value = {country.ISO2.toLowerCase()} > 
                                {country.Country}
                            </option>
                        })
                    }
                </NativeSelect>
                <FormHelperText>Choose Country</FormHelperText>
            </FormControl>
        </div>
    )
}
