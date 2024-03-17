import { Edit2, Link, Share2, Tag, Trash2 } from 'react-feather'
import { H3, LI, P, UL } from '../../../../AbstractElements'
import { Collection, Href, Title } from '../../../../utils/Constant'
import { FavDesciptionDataProp } from '../../../../Types/Apps/Bookmark/BookmarkTypes';

const FavDesciptionData = ({ myBookData}: FavDesciptionDataProp) => {
    const { website_url,desc } = myBookData;
  return (
    <div className="desciption-data">
      <div className="title-bookmark">
        <H3 className="title_0">{Title}</H3>
        <P className="weburl_0">{website_url}</P>
        <div className="hover-block">
          <UL className="simple-list flex-row">
            <LI><Link to={Href}><Edit2 /></Link></LI>
            <LI><Link to={Href}><Link /></Link></LI>
            <LI><Link to={Href}><Share2 /></Link></LI>
            <LI><Link to={Href}><Trash2 /></Link></LI>
            <LI className="pull-right text-end"><Link to={Href}><Tag /></Link></LI>
          </UL>
        </div>
        <div className="content-general">
          <P className="desc_0">{desc}</P>
          <span className="collection_0">{Collection}</span>
        </div>
      </div>
    </div>
  )
}

export default FavDesciptionData