import { useRef } from 'react';
import { PrintModalPropsTypes } from '../../../../../Types/Apps/Contact/ContactTypes'
import { Button, Modal, ModalBody } from 'reactstrap';
import { H3 } from '../../../../../AbstractElements';
import { Cancel, Print, PrintViews } from '../../../../../utils/Constant';
import PrintPreview from './PrintPreview';
import ReactToPrint from 'react-to-print';

const PrintModal = ({ printModal, selectedUser, toggleCallback }: PrintModalPropsTypes) => {
  const printModalToggle = () => {toggleCallback(false)};
  const componentRef = useRef();
  return (
    <Modal fade className="modal-bookmark" isOpen={printModal} toggle={printModalToggle}>
      <div className='modal-header'>
        <H3 className="modal-title">{PrintViews}</H3>
        <Button color="transprant" className="btn-close" onClick={printModalToggle}></Button>
      </div>
      <ModalBody className="list-persons">
        <PrintPreview selectedUser={selectedUser} />
        <ReactToPrint trigger={() => (
            <Button color="secondary" className="me-1">{Print}</Button>
          )}
          content={() => componentRef?.current || null}
        />
        <Button color="primary" onClick={printModalToggle}>{Cancel}</Button>
      </ModalBody>
    </Modal>
  )
}

export default PrintModal