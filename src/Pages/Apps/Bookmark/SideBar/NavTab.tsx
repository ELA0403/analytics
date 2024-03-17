import { Button, Nav } from 'reactstrap'
import { LI } from '../../../../AbstractElements'
import { setAddModal, setTagModal, updateActiveTabs } from '../../../../ReaduxToolkit/Reducer/BookmarkTabSlice'
import { useAppDispatch, useAppSelector } from '../../../../ReaduxToolkit/Hooks';
import { Bookmark, PlusCircle } from 'react-feather';
import { Href, NewBookmark, Tags, Views } from '../../../../utils/Constant';
import { sideBarData, sideBarData2 } from '../../../../Data/Apps/Bookmark/BookmarkData';
import BookmarkModal from './BookmarkModal';
import ModalTag from './ModalTag';

const NavTab = () => {
  const { activeTabs } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();
  const onHandleClick = (id: string) => {dispatch(updateActiveTabs(id));};
  return (
    <Nav className="main-menu" role="tablist">
      <LI>
        <Button className="badge-light-primary d-block w-100 btn-mail txt-primary" color='transparent' onClick={()=>dispatch(setAddModal())}>
          <Bookmark className="me-2"/>{NewBookmark}
          <BookmarkModal />
        </Button>
      </LI>
      <LI><span className="main-title f-w-700">{Views}</span></LI>
      {sideBarData.map((data, index) => (
        <LI key={index}>
          <a className={`show ${activeTabs === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} href={Href}>
            <span className="title"> {data.tittle}</span>
          </a>
        </LI>
      ))}
      <LI><hr /></LI>
      <LI>
        <span className="main-title f-w-700">{Tags}
          <span className="pull-right" onClick={()=>dispatch(setTagModal())}><a href={Href}><PlusCircle /></a></span>
        </span>
      </LI>
      <ModalTag />
      {sideBarData2.map((data, index) => (
        <LI key={index}>
          <a className={`show ${activeTabs === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} href={Href}>
            <span className="title"> {data.tittle}</span>
          </a>
        </LI>
      ))}
    </Nav>
  )
}

export default NavTab