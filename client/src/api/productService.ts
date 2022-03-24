import $api from './api'
import { AxiosResponse } from 'axios'
import { ProductResponce } from '../models/response/productResponce'

export default class ProductService {
  static async createImage(formData: any): Promise<AxiosResponse<any>> {
    return $api.post<any>('/upload', formData)
  }
  static async create(
    text: string,
    price: number,
    picture: any
  ): Promise<AxiosResponse<ProductResponce>> {
    return $api.post<ProductResponce>('/product', { text, price, picture })
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
