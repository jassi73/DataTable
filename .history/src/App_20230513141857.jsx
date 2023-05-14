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
import { useFetch } from './Hooks/useFetch';

const  App= ()=> {
const [page, setPage]= useState(1)
const [searchQuery, setSearchQuery]= useState("")

const debouncedSearchTerm = useDebounce(searchQuery, 800);

  const { isLoading, error, data } = useFetch(page, debouncedSearchTerm)

  const handlePageChange =(value)=>{
    setPage(value)

  }

  
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
                <div>

                <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={data?.count}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
                </div>

            </div>
        )
   
}
export default App;