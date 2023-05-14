import "./App.css";

import {
  faQuestion,
  faShare,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Pagination from "react-js-pagination";
import Datatable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputBox from "./Components/InputBox";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDebounce } from "./Hooks/useDebounce";

const App = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearchTerm = useDebounce(searchQuery, 800);

  let url = `https://swapi.dev/api/species/?page=${page}`;
  if (!!debouncedSearchTerm) {
    url += `&search=${debouncedSearchTerm}`;
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["results", debouncedSearchTerm, page],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  const handlePageChange = (value) => {
    setPage(value);
  };

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
        data={data?.results}
        columns={columns}
        responsive
        pagination
        progressPending={isLoading}
        progressComponent={<FontAwesomeIcon icon={faSpinner} />}
      />
      <div>
        {/* <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={data?.count}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        /> */}
      </div>
    </div>
  );
};
export default App;
