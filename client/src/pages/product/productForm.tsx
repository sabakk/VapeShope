import React from 'react'

import { useDispatch } from 'react-redux'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {
  useForm,
  SubmitHandler,
  Controller,
  useFormState,
} from 'react-hook-form'
import { createProductRequest } from '../../redux/product/productAction'
import styles from './style.module.scss'

// import * as validation from './vaidation'

interface IProductForm {
  text: string
  price: number
  image: any | null
}

export const CreateProduct: React.FC = () => {
  const dispatch = useDispatch()

  const { handleSubmit, control } = useForm<IProductForm>()
  const { errors } = useFormState({
    control,
  })

  const onSubmit: SubmitHandler<IProductForm> = (data) =>
    dispatch(createProductRequest(data))

  return (
    <div className={styles.authform}>
      <Typography variant="h4" component="div">
        Create Liqueur Vape Flavor
      </Typography>

      <form className={styles.authform__form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="text"
          //   rules={validation.emailValidation}
          render={({ field }) => (
            <TextField
              label="Text"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              size="small"
              margin="normal"
              className={styles.authform__input}
              error={!!errors.text?.message}
              helperText={errors?.text?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="price"
          //   rules={validation.passwordValidation}
          render={({ field }) => (
            <TextField
              label="price"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              size="small"
              margin="normal"
              type="price"
              className={styles.authform__input}
              error={!!errors?.price?.message}
              helperText={errors?.price?.message}
            />
          )}
        />
        <Controller
          name="image"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              type="file"
              onChange={(e) => {
                field.onChange(e.target.files)
              }}
              multiple
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}
        >
          Войти
        </Button>
      </form>
    </div>
  )
}
