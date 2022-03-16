import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/rootReducer'
import {
  cartDeleteItem,
  cartToggle,
  сartAddItem,
  cartRemoveItem,
} from '../../redux/cart/cartAction'
import { ProductResponce } from '../../models/response/productResponce'
import { CartState } from '../../redux/cart/cartReducer'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { Add, Remove } from '@mui/icons-material'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export const ShoppingCart = () => {
  const { cartItems, hidden }: CartState = useSelector(
    (state: AppState) => state.cart
  )

  const dispatch = useDispatch()

  const plusToCart = (product: ProductResponce) =>
    dispatch(сartAddItem(product))
  const minusFromCart = (product: ProductResponce) =>
    dispatch(cartDeleteItem(product))
  const removeFromCard = (product: ProductResponce) =>
    dispatch(cartRemoveItem(product))
  const toggleCart = () => dispatch(cartToggle())
  return (
    <div>
      <Modal
        open={hidden}
        onClose={toggleCart}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Items in the cart
          </Typography>

          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            {cartItems.map((value) => (
              <ListItem key={value._id} disableGutters>
                <ListItemText primary={value.text} />
                <IconButton onClick={() => minusFromCart(value)}>
                  <Remove />
                </IconButton>
                {value.quantity}
                <IconButton onClick={() => plusToCart(value)}>
                  <Add />
                </IconButton>
                <IconButton onClick={() => removeFromCard(value)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Modal>
    </div>
  )
}
