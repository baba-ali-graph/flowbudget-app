import axios from 'axios'
export default async function updateBudgets(data, token) {
    let apiRequest = axios.create({headers: {'x-access-token': token}})
    let url = "api/v1/update-budget"
    let response = await apiRequest.post(url, {data})
    return response    
}