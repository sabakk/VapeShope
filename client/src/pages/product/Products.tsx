import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/rootReducer'
import { ProductState } from '../../redux/product/productReducer'
import { useEffect } from 'react'
import { allProductRequest } from '../../redux/product/productAction'
import { сartAddItem } from '../../redux/cart/cartAction'
import { ProductResponce } from '../../models/response/productResponce'
export default function Products() {
  const { products }: ProductState = useSelector(
    (state: AppState) => state.products
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allProductRequest())
  }, [dispatch])

  // const deleteByID = (id: string) => dispatch(deleteProductRequest(id))
  const addToCart = (product: ProductResponce) => dispatch(сartAddItem(product))

  return (
    <div>
      <button></button>
      {products.map((product) => (
        <div
          role="button"
          onClick={() => addToCart(product)}
          onKeyPress={() => addToCart(product)}
          key={product._id}
          tabIndex={0}
        >
          {<img width={50} src={product?.picture?.secure_url} alt="vape"></img>}
          {product.text}
        </div>
      ))}
    </div>
  )
}
