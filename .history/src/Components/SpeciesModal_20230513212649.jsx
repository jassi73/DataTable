import { Button, Modal } from 'antd';
const SpeciesModal = () => {
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