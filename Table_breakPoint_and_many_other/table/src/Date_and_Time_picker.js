
// 1:date and Time pickers:
// depemdecies:
// 1:@material-ui/picker;
// 2:@date-io/date-fns
// 3:date-fns


import React, { useState } from 'react'

import { Grid } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import 'date-fns'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, } from '@material-ui/pickers'

function Date_and_Time_picker() {


    const [date, setdate] = useState("9/7/2021")

    const HandleDate = (e) => {
        setdate(e)
    }
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                <Grid container justifyContent="space-around" >
                    <KeyboardDatePicker
                        label="Date picker"
                        // format="MM/dd/yyy"
                        format="dd/MM/yyy"
                        id="date-picker-inline"
                        value={date}
                        margin="normal"
                        variant="inline"
                        onChange={HandleDate}
                        // disableToolbar
                        KeyboardButtonProps={{
                            'aria-label': 'change-date',
                        }}
                    />
                    <KeyboardDatePicker
                        label="Date picker with Dialog"
                        format="MM/dd/yyy"
                        id="date-picker-dialog"
                        value={date}
                        margin="normal"
                        variant="inline"
                        onChange={HandleDate}
                        // disableToolbar
                        KeyboardButtonProps={{
                            'aria-label': 'change-date',
                        }}
                    />

                    <KeyboardTimePicker

                        label="Time Picker"
                        id="time-picker"
                        value={date}
                        margin="normal"
                        onChange={HandleDate}
                        KeyboardButtonProps={{
                            'aria-label':'change-date'
                        }}
                    />

                </Grid>

            </MuiPickersUtilsProvider>

        </div>
    )
}

export default Date_and_Time_picker







//////////////////////////////////////////////////

// import 'date-fns';
// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

// export default function MaterialUIPickers() {
//   // The first commit of Material-UI
//   const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Grid container justifyContent="space-around">
//         <KeyboardDatePicker
//           disableToolbar
//           variant="inline"
//           format="MM/dd/yyyy"
//           margin="normal"
//           id="date-picker-inline"
//           label="Date picker inline"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change date',
//           }}
//         />
//         <KeyboardDatePicker
//           margin="normal"
//           id="date-picker-dialog"
//           label="Date picker dialog"
//           format="MM/dd/yyyy"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change date',
//           }}
//         />
//         <KeyboardTimePicker
//           margin="normal"
//           id="time-picker"
//           label="Time picker"
//           value={selectedDate}
//           onChange={handleDateChange}
//           KeyboardButtonProps={{
//             'aria-label': 'change time',
//           }}
//         />
//       </Grid>
//     </MuiPickersUtilsProvider>
//   );
// }
