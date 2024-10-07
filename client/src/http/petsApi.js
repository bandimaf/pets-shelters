import { $authHost, $host } from ".";

export const addPet = async (pet) => {
    const {data} = await $authHost.post('api/pet/add-pet', pet)
    return data
}

export const fetchPets = async () => {
    const {data} = await $host.get('api/pet/all-pets');
    data ? console.log(data) : console.log("null")
    return data
}

export const fetchOnePet = async (id) => {
    const {data} = await $host.get('api/pet/' + id)
    return data
}

export const updatePet = async (id) => {
    const {data} = await $authHost.put('api/pet/update-pet' + id)
    return data
}

export const deletePet = async (id) => {
    const {data} = await $authHost.delete('api/pet/delete-pet' + id)
    return data
}