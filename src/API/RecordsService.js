import axios from "axios";
import ServiceLinks from "../constants/ServiceLinks";
import axiosInstance from "../utils/axios";
import trimmer from '../utils/trimmer'

export default class RecordsService {
    static async getRecords(limit = 10, page = 1, filters = {}) {
        const trimmered = trimmer(filters)
        const response = await axios(ServiceLinks.routes.records, {
            params: {
                _limit: limit,
                _page: page,
                ...trimmered,
            }
        })
        return response
    }
    static async updateRecord(info) {
        const response = await axiosInstance.put(ServiceLinks.routes.updateRecord, { info })
        return response
    }
    static async addRecord(body) {
        const response = await axiosInstance.post(ServiceLinks.routes.addRecord, { body })
        return response
    }
}