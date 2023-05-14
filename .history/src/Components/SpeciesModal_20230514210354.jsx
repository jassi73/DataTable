import { Modal } from 'antd';
import { useQuery } from "@tanstack/react-query";
import DataTable from 'react-data-table-component';

const SpeciesModal = ({handleOk, open,handleCancel , speciesUrl}) => {

    const { isLoading, data } = useQuery({
        queryKey: ["species"],
        queryFn: () => fetch(speciesUrl).then((res) => res.json()),
      });


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
    <Modal
      title="Title"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {isLoading? (<h5>Loading</h5>):(<h5>{data?.name}</h5>)}
      <DataTable
        selectableRows
        fixedHeader={true}
        data={data?.results}
        columns={columns}
        responsive
        progressPending={isLoading}
        // onRowClicked={(row) =>console.log("jassi", row)}
        progressComponent={<FontAwesomeIcon icon={faSpinner} />}
      />
    </Modal>
  )
}

export default SpeciesModal