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
  
    language: {
      
        filter: "Filter in records...",
        pagination: {
            first: "First",
            previous: "Previous",
            next: "Next",
            last: "Last"
        }
    },
    show_length_menu: false,
    show_filter: true,
    show_pagination: true,
};
        
        const state = {
            records: data?.results
        }
       
    

  

    
        return (
            <div>
                <ReactDatatable
                    config={config}
                    records={state.records}
                    columns={columns}
                    
                />
            </div>
        )
   
}
export default App;