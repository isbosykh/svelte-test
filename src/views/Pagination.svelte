<Pagination {paginationOptions}/>
<List>
    {#each $items as item (item.id)}
        <li><Item {item}/></li>
    {/each}
</List>

<script>
    import {onMount, afterUpdate} from "svelte"
    import List from "../components/List/List.svelte"
    import {items, itemsAmount, itemsSortOptions, pages, setSortOptions, updateItems} from '../stores/storeList'
    import Button from "../components/Button/Button.svelte"
    import Item from "../components/List/Item/Item.svelte"
    import {getGoods} from '../api/api'
    import Pagination from '../components/Pagination/Pagination.svelte'


    let paginationOptions = {
        pages: $pages
    }

    onMount(() => {
        updateItems()
    });

</script>

<style lang="scss">
</style>