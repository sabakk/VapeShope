import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/rootReducer'
import { ProductState } from '../../redux/product/productReducer'
import { useEffect } from 'react'
import {
  allProductRequest,
  deleteProductRequest,
} from '../../redux/product/productAction'

export default function Products() {
  const { products }: ProductState = useSelector(
    (state: AppState) => state.products
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allProductRequest())
  }, [dispatch])

  const deleteByID = (id: string) => dispatch(deleteProductRequest(id))

  return (
    <div>
      <button></button>
      {products.map((product) => (
        <div
          role="button"
          onClick={() => deleteByID(product._id)}
          onKeyPress={() => deleteByID(product._id)}
          key={product._id}
          tabIndex={0}
        >
          {product.text}
        </div>
      ))}
    </div>
  )
}
