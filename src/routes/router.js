import List from '../views/List.svelte'
import NewGood from '../views/NewGood.svelte'
import Charts from '../views/Charts.svelte'
import Cart from '../views/Cart.svelte'
import Item from '../views/Item.svelte'
import Pagination from '../views/Pagination.svelte'

const routes = {
    '/': List,
    '/new-good': NewGood,
    '/charts': Charts,
    '/cart': Cart,
    '/item/:id': Item,
    '/pagination': Pagination
};

export { routes }