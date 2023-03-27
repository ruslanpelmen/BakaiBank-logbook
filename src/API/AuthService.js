import axiosInstance from '../utils/axios'
import ServiceLinks from '../constants/ServiceLinks'

export default class AuthService {
    static async signIn({ login, password }) {
        const response = await axiosInstance.post(ServiceLinks.routes.signIn, { login, password, })
        return response
    }
    static async signInWithToken() {
        const response = await axiosInstance.get(ServiceLinks.routes.signInWithToken)
        return response
    }
}