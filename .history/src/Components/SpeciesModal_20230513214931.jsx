import { Modal } from 'antd';
import { useQuery } from "@tanstack/react-query";

const SpeciesModal = ({handleOk, open,handleCancel , speciesUrl}) => {

    const { isLoading, data } = useQuery({
        queryKey: ["species"],
        queryFn: () => fetch(speciesUrl).then((res) => res.json()),
      });
console.log(data, isLoading, speciesUrl);
  return (
    <Modal
      title="Title"
      open={open}
      onOk={handleOk}
      confirmLoading={isLoading}
      onCancel={handleCancel}
    >
      {isLoading? (<h5>Loading</h5>):(<h5>{data?.name}</h5>)}
    </Modal>
  )
}

export default SpeciesModal