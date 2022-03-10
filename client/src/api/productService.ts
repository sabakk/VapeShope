import $api from './api'
import { AxiosResponse } from 'axios'
import { ProductResponce } from '../models/response/productResponce'

export default class ProductService {
  static async create(
    text: string,
    price: number
  ): Promise<AxiosResponse<ProductResponce>> {
    return $api.post<ProductResponce>('/product', { text, price })
  }
  static async getPropucts(): Promise<AxiosResponse<ProductResponce[]>> {
    return $api.get<ProductResponce[]>('/product')
  }
  static async getProduct(id: string): Promise<AxiosResponse<ProductResponce>> {
    return $api.get<ProductResponce>(`/product/${id}`)
  }
  static async deleteProduct(
    id: string
  ): Promise<AxiosResponse<ProductResponce>> {
    return $api.delete<ProductResponce>(`/product/${id}`)
  }
}
