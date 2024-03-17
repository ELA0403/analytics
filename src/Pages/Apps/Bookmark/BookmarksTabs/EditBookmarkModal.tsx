import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useAppDispatch, useAppSelector } from '../../../../ReaduxToolkit/Hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { AddNewBookMarkInterFace } from '../../../../Types/Apps/Bookmark/BookmarkTypes';
import { setEditModal, setEditRow, updateBookMark } from '../../../../ReaduxToolkit/Reducer/BookmarkTabSlice';
import { EditBookmark } from '../../../../utils/Constant';
import { H3 } from '../../../../AbstractElements';
import EditBookmarkModalForm from './EditBookmarkModalForm';

const EditBookmarkModal = () => {
    const { editRow, editModal } = useAppSelector((state) => state.bookmarkTab);
    const dispatch = useAppDispatch();
    const {register,handleSubmit,formState: { errors },setValue} = useForm<AddNewBookMarkInterFace>();
  
    useEffect(() => {
      if (editRow) {
        setValue("url", editRow.website_url || "");
        setValue("title", editRow.title || "");
        setValue("desc", editRow.desc || "");
      }
    }, [editRow, setValue]);
  
    const editToggle = () => {
      dispatch(setEditModal());
      dispatch(setEditRow({}));
    };
  
    const Updatenewbookmark = (id: number | undefined, data: AddNewBookMarkInterFace) => {
      dispatch(updateBookMark({ id: id, data: data }));
    };
  
    const updateBookMarkData: SubmitHandler<AddNewBookMarkInterFace> = (data) => {
      dispatch(setEditModal());
      Updatenewbookmark(editRow?.id, data);
    };
  return (
    <Modal isOpen={editModal} toggle={editToggle} size="lg">
      <ModalHeader toggle={editToggle}><H3>{EditBookmark}</H3></ModalHeader>
      <ModalBody>
        <EditBookmarkModalForm errors={errors} register={register} handleSubmit={handleSubmit} editToggle={editToggle} updateBookMarkData={updateBookMarkData}/>
      </ModalBody>
    </Modal>
  )
}

export default EditBookmarkModal