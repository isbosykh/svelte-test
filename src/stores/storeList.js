import {readable, writable, derived} from 'svelte/store'
import {getGoods, addGood, delGood, editGood, getGood} from '../api/api'

export const itemsAmount = writable(0)

export const items = writable([])

export const pages = derived(itemsAmount, ($itemsAmount) => {
    let pages = []

    for (let i = 0; i <= Math.floor($itemsAmount / itemsSortOptions._limit); i++) {
        pages.push(i + 1)
    }

    return pages
})

export let itemsSortOptions = {
    _limit: 5,
    _page: 1
}

export function setSortOptions(options) {
    itemsSortOptions = Object.assign(itemsSortOptions, options)
}

export function updateItems() {
    getGoods(itemsSortOptions).then(response => {
        if (response) {
            items.set(response.items)
            itemsAmount.set(response.count)
        }
    })
}

export function createNewGood(good) {
    addGood(good).then((response) => response ? updateItems() : alert('Произошла ошибка соединения'))
}

export function editItemInItems(itemId, editedItem) {
    editGood(itemId, editedItem).then(response => {
        if (response) {
            updateItems()
        }
    })
}

export function delItemById(id) {
    delGood(id).then(response => {
        if (response) {
            updateItems()
        }
    })
}