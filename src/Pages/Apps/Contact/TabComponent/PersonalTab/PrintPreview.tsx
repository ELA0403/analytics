import { H3, Image, P } from '../../../../../AbstractElements'
import { PrintPreviewPropsType } from '../../../../../Types/Apps/Contact/ContactTypes'
import { Emailaddress, General } from '../../../../../utils/Constant'

const PrintPreview = ({selectedUser}:PrintPreviewPropsType) => {
  return (
    <div className="profile-mail pt-0" id="DivIdToPrint">
        <div className="d-flex">
            <Image className= 'img-100 img-fluid m-r-20 rounded-circle' src= {`${selectedUser.avatar}`} alt= '' />
            <div className="flex-grow-1 mt-0">
                <H3>
                  <span id="printname">{selectedUser.name}</span>
                  <span id="printlast">{selectedUser.surename}</span>
                </H3>
                <P>{selectedUser.name}{'@gmail.com'}</P>
            </div >
            </div>
            <div className="email-general">
            <H3>{General}</H3>
            <P>{Emailaddress}:<span className="font-primary" id="mailadd">{selectedUser.surename}{'@gmail.com'}</span></P>
        </div>
    </div>
  )
}

export default PrintPreview