import { Modal } from 'antd';
import { useQuery } from "@tanstack/react-query";

const SpeciesModal = ({handleOk, open,handleCancel }) => {

    const { isLoading, data } = useQuery({
        queryKey: ["users", debouncedSearchTerm, page],
        queryFn: () => fetch(url).then((res) => res.json()),
      });

  return (
    <Modal
      title="Title"
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <p>Jassi</p>
    </Modal>
  )
}

export default SpeciesModal