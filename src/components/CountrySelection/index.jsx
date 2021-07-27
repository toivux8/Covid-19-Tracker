import React from 'react'
import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core';

export default function CountrySelection({value, handleOnChangeCountry, countries}) {
    return (
        <div>
            <FormControl>
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
                            return <option value = {country.ISO2.toLowerCase()} > 
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
