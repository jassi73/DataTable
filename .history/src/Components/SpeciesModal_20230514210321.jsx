import { Modal } from 'antd';
import { useQuery } from "@tanstack/react-query";
import DataTable from 'react-data-table-component';

const SpeciesModal = ({handleOk, open,handleCancel , speciesUrl}) => {

    const { isLoading, data } = useQuery({
        queryKey: ["species"],
        queryFn: () => fetch(speciesUrl).then((res) => res.json()),
      });

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