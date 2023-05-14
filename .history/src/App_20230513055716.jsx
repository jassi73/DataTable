import './App.css'

import Datatable from 'react-data-table-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import {
  useQuery,
} from '@tanstack/react-query'
import { useState } from 'react';

const  App= ()=> {

const [searchQuery, setSearchQuery]= useState("")

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
      cell: ((row) => {
        if (row.name) {
            return <div>{row.name}<FontAwesomeIcon icon={faShare} /></div>;
        } else {
            return <div>{row.name}</div>;
        }
    })
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
    
        return (
            <div>
            <input type="text" placeholder="search the user" onChange={(e)=>setSearchQuery(e.target.value)}/>
                <Datatable
                    selectableRows
                    fixedHeader
                    pagination={50}
                    data={data?.results}
                    columns={columns}
                    responsive={true}
                    progressPending={isLoading}

                    
                />
            </div>
        )
   
}
export default App;