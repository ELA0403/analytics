import { LI, UL } from '../../../../../AbstractElements'
import { Headphones, Menu, Paperclip, Search, Video } from 'react-feather'
import { useAppDispatch } from '../../../../../ReaduxToolkit/Hooks'
import { setToggleSideBar } from '../../../../../ReaduxToolkit/Reducer/ChatSlice'

const IconsMenuList = () => {
  const dispatch = useAppDispatch()
  return (
    <UL className="simple-list list-inline float-start float-sm-end chat-menu-icons flex-row">
      <LI className="list-inline-item">
        <Search />
      </LI>
      <LI className="list-inline-item">
        <Paperclip />
      </LI>
      <LI className="list-inline-item">
        <Headphones />
      </LI>
      <LI className="list-inline-item">
        <Video />
      </LI>
      <LI className="list-inline-item toogle-bar" >
        <Menu onClick={()=>dispatch(setToggleSideBar())}/>
      </LI>
    </UL>
  )
}

export default IconsMenuList