import { LI, UL } from '../../../../AbstractElements'

const ProductHover = () => {
  return (
    <div className="product-hover">
      <UL className='simple-list flex-row'>
        <LI>
          <i className="icon-link"></i>
        </LI>
        <LI>
          <i className="icon-import"></i>
        </LI>
      </UL>
    </div>
  )
}

export default ProductHover