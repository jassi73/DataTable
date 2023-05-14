import './App.css'

import { faQuestion, faShare, faSpinner, faUser } from "@fortawesome/free-solid-svg-icons";

import Datatable from 'react-data-table-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputBox from './Components/InputBox';
import {
  useQuery,
} from '@tanstack/react-query'
import { useState } from 'react';

const  App= ()=> {
const [page, setPage]= useState(4)
const [searchQuery, setSearchQuery]= useState("")
let url = `https://swapi.dev/api/people/?page=${page}`
if (!!searchQuery) {
  url += `?search=${searchQuery}`;
}

  const { isLoading, error, data } = useQuery({
    queryKey: ['results',searchQuery],
    queryFn: () =>
      fetch(url).then(
        (res) => res.json(),
      ),
  })

  
  const columns = [
    {
       name:"Type",
      cell: ((row) => {
        if (row.gender==="male"||row.gender==="female") {
            return <div><FontAwesomeIcon icon={faUser} /></div>;
        } else {
            return <div><FontAwesomeIcon icon={faQuestion} /></div>;
        }
    })
    },
    {
       name:"Name",
       selector:row=> row.name?row.name:"",
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
    console.log(data, error,isLoading)
        return (
            <div>
           {!isLoading&& data?.results.length>0&& <InputBox value={searchQuery} placeholder="Search the User" onChange={(e)=> setSearchQuery(e.target.value)}/>} 
                <Datatable
                    selectableRows
                    fixedHeader={true}
                    title="User List"
                    data={data?.results}
                    columns={columns}
                    responsive
                    progressPending={isLoading}
                    progressComponent={ <FontAwesomeIcon icon={faSpinner} />}

                    
                />
            </div>
        )
   
}
export default App;