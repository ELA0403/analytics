import { scrollableListData } from '../../../../Data/Ui-Kits/ListsData'
import { ListGroupItem } from 'reactstrap'
import { H6, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'

const ScrollableListBody = () => {
  return (
    <>
    {scrollableListData &&
        scrollableListData.map((item, index) => (
          <ListGroupItem className="list-group-item-action list-hover-primary" key={index}
          >
            <div className="list-wrapper gap-0">
              <Image className="list-img" src={dynamicImage(item.img)} alt="profile" width={100} height={100}/>
              <div className="list-content">
                <H6>{item.head}</H6>
                <P>{item.mail}</P>
                <small className="text-muted">{item.small}</small>
              </div>
            </div>
          </ListGroupItem>
        ))}
    </>
  )
}

export default ScrollableListBody