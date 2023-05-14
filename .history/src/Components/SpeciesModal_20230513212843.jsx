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
      <p>Jassi</p>
    </Modal>
  )
}

export default SpeciesModal