import { Modal } from "antd";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faSpinner,
  
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const SpeciesModal = ({ handleOk, open, handleCancel, speciesUrl }) => {
  const getSpecies = async()=>{
    const result = axios.get(speciesUrl).then((res)=> res?.data)
    console.log(data)
  
  }

  useEffect(()=>{
    speciesUrl&&getSpecies()

  },[])
  // const { isLoading, data } = useQuery({
  //   queryKey: ["species"],
  //   queryFn: () => fetch(speciesUrl).then((res) => res.json()),
  // });
  
  // if (isLoading) {
  //   return (
  //     <div>
  //       <FontAwesomeIcon icon={faSpinner} />
  //     </div>
  //   );
  // }

  return (
    <Modal title="Species" open={open} onOk={handleOk} onCancel={handleCancel}>
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
