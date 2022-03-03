import { useDispatch } from 'react-redux'
import { loginRequest } from '../../redux/auth/authAction'
export default function Registration() {
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() =>
          dispatch(
            loginRequest({
              email: 'wwsjdrfffw@eee.yt',
              password: 'dddsssaaa',
            })
          )
        }
      >
        Login
      </button>
    </div>
  )
}
