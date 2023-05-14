import './App.css'

import { Fragment } from 'react';
import ReactDatatable from '@ashvin27/react-datatable';
import {
  useQuery,
} from '@tanstack/react-query'

const  App= ()=> {
  const { isLoading, error, data } = useQuery({
    queryKey: ['results'],
    queryFn: () =>
      fetch('https://swapi.dev/api/people/').then(
        (res) => res.json(),
      ),
  })

  
  const columns = [
    {
        key: "_id",
        text: "#",
        className: "id",
        align: "left",
        sortable: true,
        cell:(row, index)=>index+1
    },
    {
        key: "name",
        text: "Name",
        className: "name",
        align: "left",
        sortable: true,
    },
   
  
    {
        key: "gender",
        text: "Gender",
        className: "gender",
        align: "left",
        sortable: true
    },
   
    
      {
        key: "height",
        text: "Height",
        className: "height",
        align: "left",
        sortable: true,
      
    },
    {
        key: "skin_color",
        text: "skin",
        className: "skin_color",
        align: "left",
        sortable: true,
      
    },
    
];

const config = {
    page_size: 10,
    // length_menu: [ 10, 20, 50 ],
    filename: "Users List",
    no_data_text: 'No user found!',
    button: {
      
        print: true,
        csv: true
    },
    language: {
        length_menu: "Show _MENU_ result per page",
        filter: "Filter in records...",
        info: "Showing _START_ to _END_ of _TOTAL_ records",
        pagination: {
            first: "First",
            previous: "Previous",
            next: "Next",
            last: "Last"
        }
    },
    show_length_menu: true,
    show_filter: true,
    show_pagination: true,
    show_info: true,
};
        
        const state = {
            records: data?.results
        }
        const extraButtons =[
            {
                className:"btn btn-primary buttons-pdf",
                title:"Export TEst",
                children:[
                    <span>
                    <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
                    </span>
                ],
                onClick:(event)=>{
                    console.log(event);
                },
            },
            {
                className:"btn btn-primary buttons-pdf",
                title:"Export TEst",
                children:[
                    <span>
                    <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
                    </span>
                ],
                onClick:(event)=>{
                    console.log(event);
                },
                onDoubleClick:(event)=>{
                    console.log("doubleClick")
                }
            },
        ]
    

   const  editRecord=(record)=> {
        console.log("Edit Record", record);
    }

   const  deleteRecord=(record)=> {
        console.log("Delete Record", record);
    }

    
        return (
            <div>
                <ReactDatatable
                    config={config}
                    records={state.records}
                    columns={columns}
                    extraButtons={extraButtons}
                />
            </div>
        )
   
}
export default App;