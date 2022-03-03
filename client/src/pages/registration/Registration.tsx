import { useDispatch } from 'react-redux'
import { registrationRequest } from '../../redux/auth/authAction'
export default function Registration() {
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Registration</h1>
      <button
        onClick={() =>
          dispatch(
            registrationRequest({
              email: 'wwsjdrfffw@eee.yt',
              password: 'dddsssaaa',
            })
          )
        }
      >
        Reg
      </button>
    </div>
  )
}
