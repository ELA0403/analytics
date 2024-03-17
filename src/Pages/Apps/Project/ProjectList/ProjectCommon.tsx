import { Badge, Col, Progress } from 'reactstrap'
import { H3, Image, P} from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { CommonProjectInterFace } from '../../../../Types/Apps/ProjectList/ProjectListTypes'
import { Done } from '../../../../utils/Constant'
import ProjectDetails from './ProjectDetails'
import ProjectCustomers from './ProjectCustomers'

const ProjectCommon = ({ item }: CommonProjectInterFace) => {
  return (
    <Col xxl={4} md={6} >
      <div className='project-box'>
        <Badge color={`${item.badge === 'Done' ? 'success' : 'primary'}`}>{item.badge}</Badge>
        <H3>{item.title}</H3>
        <div className='d-flex'>
          <Image width={20} height={20} className='img-20 me-1 rounded-circle' src={dynamicImage(item.img)} alt='images' />
          <div className='flex-grow-1'>
            <P>{item.sites}</P>
          </div>
        </div>
        <P>{item.desc}</P>
        <ProjectDetails item={item}/>
        <ProjectCustomers item={item}/>
        <div className='project-status mt-4'>
          <div className='d-flex mb-0'>
            <P>{item.progress}% </P>
            <div className='text-end flex-grow-1'>
              <span>{Done}</span>
            </div>
          </div>
          <Progress className='sm-progress-bar' color={item.progress === '100' ? 'success' : 'primary'} value={item.progress} style={{ height: '5px' }} />
        </div>
      </div>
    </Col>
  )
}

export default ProjectCommon