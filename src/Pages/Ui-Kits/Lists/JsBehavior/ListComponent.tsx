import { LI, UL } from '../../../../AbstractElements';
import { Contactus, Home, Profile, Settings } from '../../../../utils/Constant';
type propsType = {
    activeList: string,
    setActiveList: (data: string) => void;
}
const ListComponent = ({ activeList, setActiveList }: propsType) => {
  return (
    <UL>
        <LI className={`list-group-item-action bg-primary ${activeList === '1' ? 'active' : ""}`} onClick={() => setActiveList('1')}>{Home}</LI>
        <LI className={`list-group-item-action list-hover-primary ${activeList === '2' ? 'active' : ""}`} onClick={() => setActiveList('2') }>{Profile}</LI>
        <LI className={`list-group-item-action list-hover-primary ${activeList === '3' ? 'active' : ""}`} onClick={() => setActiveList('3')}>{Contactus}</LI>
        <LI className={`list-group-item-action list-hover-primary ${activeList === '4' ? 'active' : ""}`} onClick={() => setActiveList('4') }>{Settings}</LI>
    </UL>
  )
}

export default ListComponent