/**
 * @class ExampleMaterialUIComponent
 */
//import * as React from 'react';
import React from 'react';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import es from 'date-fns/locale/es';
import DateFnsUtils from '@date-io/date-fns';

interface IProps {
    label: string;
    format: string;
    selectedDate: Date;
    handleDateChange: (date: Date) => void;
    disabled: boolean;
    fullWidth: boolean;
}

export default function ExampleMaterialUIComponent({
    label,
    format,
    selectedDate,
    handleDateChange,
    disabled,
    fullWidth
}: IProps) {

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
            <DateTimePicker
                autoOk
                ampm={false}
                variant="inline"
                inputVariant="outlined"
                label={label}
                format={format}
                value={selectedDate}
                onChange={handleDateChange}
                fullWidth={fullWidth}
                disabled={disabled}
            />
        </MuiPickersUtilsProvider>
    )
  }
