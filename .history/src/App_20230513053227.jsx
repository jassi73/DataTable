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
       name:"Type",
      //  selector:row=> row.name,
        cell:(row, index, column, id) => {
          <div>jassi</div>
        }
    },
    {
       name:"Name",
       selector:row=> row.name,
        sortable: true,
    },
    {
       name:"Gender",
       selector:row=> row.gender,
        sortable: true,
    },
    {
       name:"Height",
       selector:row=> row.height,
        sortable: true,
    },
    {
       name:"DOB",
       selector:row=> row.birth_year,
        sortable: true,
    },
    {
       name:"Eye Color",
       selector:row=> row.eye_color,
    },
    {
       name:"Hair Color",
       selector:row=> row.hair_color,
    },
    {
       name:"Skin Color",
       selector:row=> row.skin_color,
    },
    {
      name:"Mass",
      selector:row=> row.mass,
   },
    
];


        
        const state =data?.results
       
    

  

    
        return (
            <div>
                <Datatable
                    selectableRows
                    fixedHeader
                    pagination
                    data={state}
                    columns={columns}
                    responsive={true}

                    
                />
            </div>
        )
   
}
export default App;