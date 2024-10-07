import { $authHost, $host } from ".";

export const addNews = async (news) => {
    const {data} = await $authHost.post('api/news/add-news', news)
    return data
}

export const fetchNews = async () => {
    const {data} = await $host.get('api/news/all-news');
    data ? console.log(data) : console.log("null")
    return data
}

export const fetchOneNews = async (id) => {
    const {data} = await $host.get('api/news/' + id)
    return data
}

export const updateNews = async (id) => {
    const {data} = await $authHost.put('api/news/update-new' + id)
    return data
}

export const deleteNews = async (id) => {
    const {data} = await $authHost.delete('api/news/delete-news' + id)
    return data
}