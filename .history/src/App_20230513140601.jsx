import './App.css'

import { faQuestion, faShare, faSpinner, faUser } from "@fortawesome/free-solid-svg-icons";
import Pagination from "react-js-pagination";
import Datatable from 'react-data-table-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputBox from './Components/InputBox';
import {
  useQuery,
} from '@tanstack/react-query'
import { useState } from 'react';
import { useDebounce } from './Hooks/useDebounce';

const  App= ()=> {
const [page, setPage]= useState(1)
const [searchQuery, setSearchQuery]= useState("")

const debouncedSearchTerm = useDebounce(searchQuery, 800);


let url = `https://swapi.dev/api/people/?page=${page}`
if (!!debouncedSearchTerm) {
  url += `&search=${debouncedSearchTerm}`;
}

  const { isLoading, error, data } = useQuery({
    queryKey: ['results',debouncedSearchTerm],
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
    
        return (
            <div>
           {!isLoading&&<InputBox value={searchQuery} placeholder="Search the User" onChange={(e)=> setSearchQuery(e.target.value)}/>} 
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
                 <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
            </div>
        )
   
}
export default App;