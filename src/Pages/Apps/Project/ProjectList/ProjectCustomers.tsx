import { Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { CommonProjectInterFace } from '../../../../Types/Apps/ProjectList/ProjectListTypes'

const ProjectCustomers = ({ item }: CommonProjectInterFace) => {
  return (
    <div className='customers'>
        <UL className='simple-list' >
            <LI className='d-inline-block border-0' >
                <Image width={30} height={30} className='img-30 rounded-circle' src={dynamicImage(item.customers_img1)} alt='' />
            </LI>
            <LI className='d-inline-block border-0' >
                <Image width={30} height={30} className='img-30 rounded-circle' src={dynamicImage(item.customers_img2)} alt='' />
            </LI>
            <LI className='d-inline-block border-0' >
                <Image width={30} height={30} className='img-30 rounded-circle' src={dynamicImage(item.customers_img3)} alt='' />
            </LI>
            <LI className='d-inline-block border-0 ms-2' >
                <P className='f-12' >{`+${item.like} More`}</P>
            </LI>
        </UL>
    </div>
  )
}

export default ProjectCustomers