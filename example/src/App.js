import React, { useState } from 'react'

import ExampleComponent from 'galeno-datetimepicker';
// material UI
import { ThemeProvider } from '@material-ui/core/styles';

const fechaInicioLabel = 'Fecha Inicio';
const fechaFinLabel = 'Fecha Fin';
const format = 'dd/MM/yyyy HH:mm';

export default function App(){
  const [fechaInicio, updateFechaInicio] = useState(null);

    return (
        <ThemeProvider>
            <div
            style={{
                display: 'flex',
                width: '50%',
                padding: 30
            }}
            >
            <ExampleComponent
                disabled={false}
                label={fechaInicioLabel}
                format={format}
                selectedDate={fechaInicio}
                handleDateChange={updateFechaInicio}
                fullWidth
            />
            </div>
        </ThemeProvider>
    )
}
