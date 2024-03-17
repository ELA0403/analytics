import { Link } from 'react-router-dom'
import { H3, P } from '../../../../AbstractElements'
import { useAppDispatch, useAppSelector } from '../../../../ReaduxToolkit/Hooks'
import { setHistory } from '../../../../ReaduxToolkit/Reducer/ContactSlice'
import { ContactCreated, ContactHistory, Href } from '../../../../utils/Constant'

const HistoryClass = () => {
  const {history} = useAppSelector((state)=>state.contact)
  const dispatch = useAppDispatch()
  return (
    <div id="right-history" className={history ? "show":""}>
      <div className="modal-header p-l-20 p-r-20">
        <H3 className="modal-title w-100">{ContactHistory}
          <span className="pull-right">
            <Link className="closehistory" to={Href} onClick={()=>dispatch(setHistory())}>
              <i className="icofont icofont-close"></i>
            </Link>
          </span>
        </H3>
      </div>
      <div className="history-details">
        <div className="text-center">
          <i className="icofont icofont-ui-edit"></i>
          <P>{'Contact has not been modified yet.'}</P>
        </div>
        <div className="d-flex">
          <i className="icofont icofont-star me-3"></i>
          <div className="flex-grow-1 mt-0">
            <H3 className="mt-0">{ContactCreated}</H3>
            <P className="mb-0">{'Contact is created via mail'}</P>
            <span className="f-12">Sep 10, 2022 4:00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryClass