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


        
        const state = {
            records: data?.results
        }
       
    

  

    
        return (
            <div>
                <Datatable
                    
                    records={state}
                    columns={columns}
                    
                />
            </div>
        )
   
}
export default App;