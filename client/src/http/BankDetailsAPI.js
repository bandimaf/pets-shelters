import { $authHost, $host } from ".";

export const addBankDetail = async (news) => {
    const {data} = await $authHost.post('api/news/add-news', news)
    return data
}

export const fetchBankDetails = async () => {
    const {data} = await $host.get('api/paymentReports/all-reports');
    data ? console.log(data) : console.log("null")
    return data
}

export const fetchOneBankDetail = async (id) => {
    const {data} = await $host.get('api/paymentReports/' + id)
    return data
}

export const updateBankDetail = async (id) => {
    const {data} = await $authHost.put('api/paymentReports/update-repor' + id)
    return data
}

export const deleteBankDetail = async (id) => {
    const {data} = await $authHost.delete('api/paymentReports/delete-report' + id)
    return data
}