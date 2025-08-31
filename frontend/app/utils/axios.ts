import axios from "axios";



const instance = axios.create({
  baseURL: 'http://laravel.test/api'
});

const fetcher = (url: string) => instance.get(url).then(res => res).catch(err => err.response.data)
const poster = async (url: string, data: any) => instance.post(url, data).then(res => res).catch(err => err.response.data)
const putter = (url: string, data: any) => instance.put(url, data).then(res => res).catch(err => err.response.data)
const deleter = (url: string) => instance.delete(url).then(res => res).catch(err => err.response.data)

export { instance, fetcher, poster, putter, deleter };