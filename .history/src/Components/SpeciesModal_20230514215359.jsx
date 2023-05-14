import { Modal } from 'antd';
import { useQuery } from "@tanstack/react-query";
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faQuestion, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';

const SpeciesModal = ({handleOk, open,handleCancel , speciesUrl}) => {

    const { isLoading, data } = useQuery({
        queryKey: ["species"],
        queryFn: () => fetch(speciesUrl).then((res) => res.json()),
      });
console.log(data)

      const columns = [
        {
          name: "Type",
          cell: (row) => {
            if (!row.name === "Droid") {
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
          name: "Languege",
          selector: (row) => row.language,
        //   sortable: true,
        },
        {
          name: "Height",
          selector: (row) => row.average_height,
          sortable: true,
        },
        {
          name: "Designation",
          selector: (row) => row.designation,
          sortable: true,
        },
      
      ];
    

  return (
    <Modal
      title="Title"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
    >

<table style="width:100%">
  <tr>
    <th>Type</th>
    <th>Languege</th>
    <th>Designation</th>
  </tr>
  <tr>
    <td>{data?.name==='Droid'&& <FontAwesomeIcon icon={faQuestion} />}</td>
    <td>{data?.language}</td>
    <td>{data?.designation}</td>
  </tr>
</table>
    </Modal>
  )
}

export default SpeciesModal