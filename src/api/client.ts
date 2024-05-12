import axios from 'axios'
import { type Item } from '../models/Item'

// TODO: move to env variable
axios.defaults.baseURL = 'http://localhost:3000'

export const getItems = async () => {
    return (await axios.get('/items').then((res) => res.data)) as Item[]
}

export const createItem = async (item: Item) => {
    await axios.post('/items', item)
}

export const deleteItem = async (id: string) => {
    await axios.delete(`/items/${id}`)
}

export const updateItem = async (item: Item) => {
    await axios.put(`/items/${item.id}`, { ...item, lastModified: item.lastModified.toISOString() })
}
