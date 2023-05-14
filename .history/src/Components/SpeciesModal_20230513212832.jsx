import { Modal } from 'antd';
const SpeciesModal = ({handleOk, open,handleCancel }) => {
  return (
    <Modal
      title="Title"
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <p>{modalText}</p>
    </Modal>
  )
}

export default SpeciesModal