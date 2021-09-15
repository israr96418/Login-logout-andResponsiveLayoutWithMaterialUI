import MaterialTable from 'material-table'
import React from 'react'

function Table() {

const data=[
    {name:"israr",age:12},
    {name:"Gull khan",age:13},
    {name:"Khan Gull",age:14},
    {name:"israr dawar",age:15},
    {name:"Hassan Gull",age:16},
   
   
    // {totalmarks:550,   obtainedmarks:449},
    // {totalmarks:550,    obtainedmarks:445},
    // {totalmarks:550,    obtainedmarks:443},
    // {totalmarks:550,   obtainedmarks:442},
    // {totalmarks:550,   obtainedmarks:441}

]

const column=[
    {title:'Name',field:'name'},
    {title:'Age',field:'age'},
    // {title:'TotalMarks',field:'totalMarks'},
    // {title:'ObtainedMarks',field:'obtainedMarks'}
    

]

    return (
        <div>
            <h1>React Table</h1>
            <MaterialTable 
            title="Material Table"
            data={data}
            columns={column}

            options={{
                // search:false,
                // paging:false,
                // filtering:true,
                exportButton:true
            }}
            />
        </div>
    )
}

export default Table
