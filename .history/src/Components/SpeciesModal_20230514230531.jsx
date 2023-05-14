import { Modal } from "antd";
import { useQuery } from "@tanstack/react-query";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faQuestion,
  faSpinner,
  
} from "@fortawesome/free-solid-svg-icons";

const SpeciesModal = ({ handleOk, open, handleCancel, speciesUrl }) => {
  const { isLoading, data } = useQuery({
    queryKey: ["species"],
    queryFn: () => fetch(speciesUrl).then((res) => res.json()),
  });
  
  if (isLoading) {
    return (
      <div>
        <FontAwesomeIcon icon={faSpinner} />
      </div>
    );
  }

  return (
    <Modal title="" open={open} onOk={handleOk} onCancel={handleCancel}>
      {!isLoading && (
        <table >
          <tr>
            <th>Type</th>
            <th>Languege</th>
            <th>Designation</th>
          </tr>
          <tr >
            <td>
              {data?.name === "Droid" && <FontAwesomeIcon icon={faQuestion} />}
            </td>
            <td>{data?.language}</td>
            <td>{data?.designation}</td>
          </tr>
        </table>
      )}
    </Modal>
  );
};

export default SpeciesModal;
