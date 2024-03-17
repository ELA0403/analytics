import { Edit2, Link, Share2, Tag, Trash2 } from 'react-feather'
import { H3, LI, P, UL } from '../../../../AbstractElements'
import { Href } from '../../../../utils/Constant'
import { DescriptionBookMarkPropsType } from '../../../../Types/Apps/Bookmark/BookmarkTypes'

const DesciptionData = ({ data, onHandleClick, removeFrombookmark,}: DescriptionBookMarkPropsType) => {
  const { title, website_url, id } = data;
  return (
    <div className="desciption-data">
      <div className="title-bookmark">
        <H3 className="title_0">{title}</H3>
        <P className="weburl_0">{website_url}</P>
        <div className="hover-block">
          <UL className="simple-list d-block">
            <LI><a href={Href} onClick={() => onHandleClick(data)}><Edit2 /></a></LI>
            <LI><a href={Href}><Link /></a></LI>
            <LI><a href={Href}><Share2 /></a></LI>
            <LI><a href={Href} onClick={() => removeFrombookmark(id)}><Trash2 /></a></LI>
            <LI className="pull-right text-end"><a href={Href}><Tag /></a></LI>
          </UL>
        </div>
        <div className="content-general">
          <P className="desc_0">{data.desc}</P>
          <span className="collection_0">{data.collection}</span>
        </div>
      </div>
    </div>
  )
}

export default DesciptionData