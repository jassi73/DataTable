import './App.css'

import Datatable from 'react-data-table-component';
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
        name: "_id",
      selector:row=>row,
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
                <Datatable
                    config={config}
                    records={state.records}
                    columns={columns}
                    
                />
            </div>
        )
   
}
export default App;