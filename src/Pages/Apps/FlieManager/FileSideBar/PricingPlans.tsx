import { H5, H6, Image, LI, P, UL } from '../../../../AbstractElements'
import { Button } from 'reactstrap'
import { FiGrid } from "react-icons/fi";
import { dynamicImage } from '../../../../Service'
import { FREE, PricingPlan, Selected, TrialVersion } from '../../../../utils/Constant';

const PricingPlans = () => {
  return (
    <UL className='simple-list'>
      <LI>
        <div className="btn btn-outline-primary">
          <FiGrid />
          {PricingPlan}
        </div>
      </LI>
      <LI>
        <div className="pricing-plan">
          <H6>{TrialVersion} </H6>
          <H5>{FREE}</H5>
          <P>{'100GB Space'}</P>
          <Button size="xs" color="transparent" className="btn-outline-primary ">{Selected}</Button>
          <Image width={182} height={182} className="bg-img" src={dynamicImage('dashboard/folder.png')} alt=""/>
        </div>
      </LI>
    </UL>
  )
}

export default PricingPlans