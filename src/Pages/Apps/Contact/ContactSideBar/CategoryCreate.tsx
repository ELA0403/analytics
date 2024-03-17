import { Button, Col, Form, Input, Modal, ModalBody, Row } from 'reactstrap'
import { useAppDispatch, useAppSelector } from '../../../../ReaduxToolkit/Hooks'
import { setCategoryModal } from '../../../../ReaduxToolkit/Reducer/ContactSlice'
import { H3 } from '../../../../AbstractElements'
import { AddCategory, Cancel, Save } from '../../../../utils/Constant'

const CategoryCreate = () => {
  const {categoryModal} =useAppSelector((state)=>state.contact)
  const dispatch = useAppDispatch()
  const categoryToggle = () => dispatch(setCategoryModal())
  return (
    <>
      <Button color='transparent' className='btn-category' onClick= {categoryToggle} >
        <span className="title"> + {AddCategory}</span>
      </Button>
      <Modal fade isOpen={categoryModal} toggle={categoryToggle}>
        <div className='modal-header'>
          <H3 className='modal-title'>{AddCategory}</H3>
          <Button color='transprant' className='btn-close' onClick= {categoryToggle}></Button>
        </div>
        <ModalBody>
          <Form className="form-bookmark">
            <Row className='g-2'>
              <Col md="12" className="mb-3">
                <Input type="text" required placeholder="Enter category name" autoComplete="off" value={""} />
              </Col>
            </Row>
            <Button color='secondary' onClick= {categoryToggle }>{Save}</Button>
            <Button color='primary' className= 'ms-1' onClick= {categoryToggle }>{Cancel}</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  )
}

export default CategoryCreate