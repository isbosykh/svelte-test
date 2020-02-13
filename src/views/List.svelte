<div class="listView">
    <Sort {sortOptions}/>
    <List>
        {#each $items as item (item.id)}
            <li><Item {item}/></li>
        {/each}
    </List>
    <Pagination pagesList={$pages}/>
</div>

<script>
    import List from "../components/List/List.svelte"
    import {items, pages, updateItems} from '../stores/storeList'
    import Item from "../components/List/Item/Item.svelte"
    import Sort from "../components/List/Sort.svelte";
    import Pagination from "../components/Pagination/Pagination.svelte";

    let sortOptions = {
        name: 'price',
        options: [
            {
                value: null,
                title: 'Без сортировки'
            },
            {
                value: 'desc',
                title: 'По убыванию'
            },
            {
                value: 'asc',
                title: 'По возростанию'
            },
        ]
    }

    let nameField = ''
</script>