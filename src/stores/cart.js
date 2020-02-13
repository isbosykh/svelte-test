import { writable, derived } from 'svelte/store';
import {delGood} from "../api/api";
import {items} from "./storeList"

export const cart = writable([])

export const sum = derived(cart, $cart => {
    if ($cart.length !== 0) {
        // Здесь используется богомерзкая переменная в то время как, казалос бы, можно юзать reduce. Но по какой-то причине reduce не давал должного результата
        let summ = 0
        $cart.map(i => summ += i.price)
        return summ
    } else return 0
})

export function addToCart(item) {
    cart.update($cart => {
        if (!$cart.includes(item)) {
            console.log('Item added to cart')
            console.log($cart)
            return [...$cart, item]
        } else {
            alert('Этот элемент уже есть в корзине')
            return $cart
        }
    })
}

export function delItemById(id) {
    cart.update($cart => {
        let f = $cart.findIndex((item) => item.id === id)
        return [...$cart.slice(0, f), ...$cart.slice(f + 1)]
    })
}