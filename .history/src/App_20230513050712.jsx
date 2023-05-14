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
       name:"Name",
       selector:row=> row.name,
        sortable: true,
    },
    {
       name:"gender",
       selector:row=> row.gender,
        sortable: true,
    },
    {
       name:"height",
       selector:row=> row.height,
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