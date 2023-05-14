import "./App.css";

import {
  faQuestion,
  faSpinner,
  faUser,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import Pagination from "react-js-pagination";
import Datatable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputBox from "./Components/InputBox";
import { useQueries, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDebounce } from "./Hooks/useDebounce";
import axios from "axios"
import SpeciesModal from "./Components/SpeciesModal";

const App = () => {

  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [openSpeciesModal, setOpenSpeciesModal] = useState(false)
  const [speciesUrl, setSpeciesUrl] = useState("")

  const debouncedSearchTerm = useDebounce(searchQuery, 800);
  
  let url = `https://swapi.dev/api/people/?page=${page}`;
  if (!!debouncedSearchTerm) {
    url += `&search=${debouncedSearchTerm}`;
  }
  const [userQuery, speciesQuery ] = useQueries({
    queries: [
      {
        queryKey: ['users'],
        queryFn: () =>
          axios
            .get(url)
            .then((res) => res.data),
      },

      {
        queryKey: ['species'],
        queryFn: () =>
          axios
            .get(speciesUrl)
            .then((res) => res.data),
      },
    ],
  });

 

  const openModal =(url)=>{
    setOpenSpeciesModal(true)
    setSpeciesUrl(url)
  }

  const handleCancel = ()=>{
    setOpenSpeciesModal(false)
  }
  const handleOk = ()=>{
    setOpenSpeciesModal(false)
  }
 

  const columns = [
    {
      name: "Type",
      cell: (row) => {
        if (row.gender === "male" || row.gender === "female") {
          return (
            <div>
              <FontAwesomeIcon icon={faUser} />
            </div>
          );
        } else {
          return (
            <div>
              <FontAwesomeIcon icon={faQuestion} />
            </div>
          );
        }
      },
    },
    {
      name: "Name",
      selector: (row) => (row.name ? row.name : ""),
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "Height",
      selector: (row) => row.height,
      sortable: true,
    },
    {
      name: "DOB",
      selector: (row) => row.birth_year,
      sortable: true,
    },
    {
      name: "Eye Color",
      selector: (row) => row.eye_color,
    },
    {
      name: "Hair Color",
      selector: (row) => row.hair_color,
    },
    {
      name: "Skin Color",
      selector: (row) => row.skin_color,
    },
    {
      name: "Mass",
      selector: (row) => row.mass,
    },
    {
      name: "Species",
      cell: (row) => {
        if (row?.species &&row?.species.length>0) {
          return (
            <div>
              <FontAwesomeIcon icon={faEye} onClick={()=>openModal(row?.species[0])} />
            </div>
          );
        } else {
          return (
            <div>
              <FontAwesomeIcon icon={faEyeSlash} />
            </div>
          );
        }
      },
    },
  
  ];

  return (
    <div>
      <div className="header">
        <h5>Users List</h5>
        <InputBox
          value={searchQuery}
          placeholder="Search the User"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Datatable
        selectableRows
        fixedHeader={true}
        data={userQuery?.data?.results}
        columns={columns}
        responsive
        pagination
        progressPending={userQuery?.isLoading}
        // onRowClicked={(row) =>console.log("jassi", row)}
        progressComponent={<FontAwesomeIcon icon={faSpinner} />}
      />
      <div>
       
      </div>
      <SpeciesModal open={openSpeciesModal} handleCancel={handleCancel} handleOk={handleOk} speciesUrl={speciesUrl} />
    </div>
  );
};
export default App;
