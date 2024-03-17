import { useCallback, useState } from 'react';
import { ContactDetailsPropsType, UserCallbackUser } from '../../../../../Types/Apps/Contact/ContactTypes'
import { useAppDispatch, useAppSelector } from '../../../../../ReaduxToolkit/Hooks';
import { deletedUser, setHistory, setTempId } from '../../../../../ReaduxToolkit/Reducer/ContactSlice';
import SweetAlert from 'sweetalert2';
import { H3, Image, LI, P, UL } from '../../../../../AbstractElements';
import { Delete, Edit, Emailaddress, General, History, Href, MobileNo, Name, Print } from '../../../../../utils/Constant';
import SearchNotFoundClass from './SearchNotFoundClass';
import { Link } from 'react-router-dom';
import PrintModal from './PrintModal';

const ContactDetailsClass = ({ selectedUser, userEditCallback,setSelectedUser }:ContactDetailsPropsType) => {
  const {users} = useAppSelector((state)=> state.contact)
  const [printmodal, setPrintModal] = useState(false);
  const printModalToggle = () => setPrintModal(!printmodal);
  const dispatch=useAppDispatch()
  const toggleCallback = useCallback((toggle:boolean) => {
    setPrintModal(toggle);
  }, []);
    
  const editUsers = (usersData:UserCallbackUser) => {
    dispatch(setTempId(usersData.id));
    userEditCallback(true, usersData);
  };

  const deleteUser = (userId:number | undefined) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        dispatch(deletedUser(userId));
        const newUsers= users.filter((user) => user.id !== userId)
        setSelectedUser(newUsers[newUsers.length - 1])
        SweetAlert.fire('Deleted!','Your file has been deleted.','success');
      } else {
        SweetAlert.fire('Your imaginary file is safe!');
      }
    });
  };
  return (
    <>
      {selectedUser ?
        <div className="profile-mail">
          <div className="d-flex">
            <Image className= 'img-100 img-fluid m-r-20 rounded-circle update_img_0' src= {selectedUser.avatar} alt= ''  />
            <div className="flex-grow-1 mt-0">
              <H3>
                <span className="first_name_0">{selectedUser.name}</span>
                <span className="last_name_0">{selectedUser.surename}</span>
              </H3>
              <P className='email_add_0'>{selectedUser.name}{'@gmail.com'}</P>
              <UL className='simple-list flex-row' >
                <LI><Link to={Href} onClick={() => editUsers(selectedUser)}>{Edit}</Link></LI>
                <LI><Link to={Href} onClick={() => deleteUser(selectedUser.id)}>{Delete}</Link></LI>
                <LI><Link to={Href} onClick={()=>dispatch(setHistory())}>{History}</Link></LI>
                <LI><Link to={Href} onClick={() => printModalToggle()}>{Print}</Link></LI>
              </UL>
            </div>
          </div>
          <div className="email-general">
            <H3 className='mb-3'>{General}</H3>
            <UL className='simple-list' >
              <LI>{Name}<span className="font-primary first_name_0">{selectedUser.name}</span></LI>
              <LI>{MobileNo} <span className="font-primary mobile_num_0">{selectedUser.mobile}</span></LI>
              <LI>{Emailaddress}<span className="font-primary email_add_0">{`${selectedUser.name}@gmail.com`} </span></LI>
            </UL>
          </div>
        </div>
        :
        <SearchNotFoundClass />
      }
      {selectedUser && <PrintModal toggleCallback={toggleCallback} printModal={printmodal} selectedUser={selectedUser} />}
    </>
  )
}

export default ContactDetailsClass