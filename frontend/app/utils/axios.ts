import axios from "axios";


const createDynamicInstance = () => {
    if (typeof window !== 'undefined') {
        // Get current hostname including subdomain
        const currentHost = window.location.hostname;
        const protocol = window.location.protocol;
        
        return axios.create({
            baseURL: `${protocol}//${currentHost}/api`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
    }
    
    // Fallback for SSR
    return axios.create({
        baseURL: '/api'
    });
};

// Create instance dynamically each time
export const getInstance = () => createDynamicInstance();
console.log(getInstance());

// Or create functions that use dynamic instance
const fetcher = (url: string) => getInstance().get(url).then(res => res.data).catch(err => err.response.data)
const poster = async (url: string, data: any) => getInstance().post(url, data).then(res => res).catch(err => err.response.data)
const putter = (url: string, data: any) => getInstance().put(url, data).then(res => res).catch(err => err.response.data)
const deleter = (url: string) => getInstance().delete(url).then(res => res).catch(err => err.response.data)

export { fetcher, poster, putter, deleter };