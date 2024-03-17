import { Fragment, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, FormGroup, Input, Label, Modal, ModalBody, Row } from 'reactstrap'
import { AddTask, Cancel, Collection, Description, General, NewTask, Save, TaskTitle } from '../../../../utils/Constant'
import { CheckCircle } from 'react-feather'
import { FormDataTypes } from '../../../../Types/Apps/Tasks/TasksTypes';
import { useAppDispatch, useAppSelector } from '../../../../ReaduxToolkit/Hooks';
import { setAllTasks } from '../../../../ReaduxToolkit/Reducer/TasksSlice';
import { H3 } from '../../../../AbstractElements';

const NewTaskClass = () => {
  const {allTasks} = useAppSelector((state)=>state.tasks)
  const dispatch = useAppDispatch()
    const { register, handleSubmit,reset, formState: { errors } } = useForm<FormDataTypes>();
  
    const [addModal, setAddModal] = useState(false);
    const addToggle = () => {
      setAddModal(!addModal);
      reset({
        description:"",
        title:""
      })
    };
  
    const addTask:SubmitHandler<FormDataTypes>= (data) => {
      if (data.description !== "" && data.title !== "") {
        const taskTemp = {
          id:allTasks.length + 1,
          title: data.title,
          collection: "General",
          description: data.description,
        };
        dispatch(setAllTasks([...allTasks,taskTemp]))
        setAddModal(false);
        reset({
          description:"",
          title:""
        })
      }
    };
  return (
    <Fragment>
      <Button color='' className='badge-light-primary txt-primary btn-block btn-mail w-100' onClick={addToggle}>
        <CheckCircle className="me-2" /> {NewTask}
      </Button>
      <Modal isOpen={addModal} toggle={addToggle} size="lg">
        <div className='modal-header'>
          <H3 className='modal-title'>{AddTask}</H3>
          <Button color='transprant' className='btn-close' onClick={addToggle} ></Button>
        </div>
        <ModalBody>
          <form className="form-bookmark needs-validation" onSubmit={handleSubmit(addTask)}>
            <Row>
              <FormGroup className="col-md-12 create-group">
                <Label>{TaskTitle}</Label>
                <input className="form-control" type="text" {...register('title', { required: true })} />
                <span style={{ color: 'red' }}>{errors.title && 'Title is required'}</span>
              </FormGroup>
              <FormGroup className="col-md-12 create-group">
                <Label>{Collection}</Label>
                <Input className="js-example-disabled-results form-select" name="collection" type="select" >
                  <option value="general">{General}</option>
                  <option value="fs">{'Fs'}</option>
                </Input>
              </FormGroup>
              <FormGroup className="col-md-12 create-group">
                <Label>{Description}</Label>
                <input className="form-control" type="textarea" {...register('description', { required: true })} />
                <span style={{ color: 'red' }}>{errors.description && 'Description is required'}</span>
              </FormGroup>
            </Row>
            <Button color='secondary' className='me-1' >{Save}</Button>&nbsp;&nbsp;
            <Button color='primary' onClick={addToggle} >{Cancel}</Button>
          </form>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default NewTaskClass