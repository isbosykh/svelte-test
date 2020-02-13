<div class="pagination-btns">
    <ul class="pagination">
        {#each pagesList as page}
            <li><Button on:clicked={changePage(page)}>{page}</Button></li>
        {/each}
    </ul>
</div>

<script>
    import Button from "../Button/Button.svelte"
    import {items, itemsAmount, itemsSortOptions, setSortOptions, updateItems} from '../../stores/storeList'

    export let pagesList

    function changePage(page) {
        if (itemsSortOptions._page !== page) {
            setSortOptions({_page: page})
            updateItems()
        }
    }
</script>

<style lang="scss">
    .pagination-btns {
        margin: .5rem;
        display: flex;
        justify-content: center;

        .pagination {
            margin: 0;
            padding: 0;
            display: flex;
            list-style: none;

            li {
                margin-right: .5rem;
            }
        }
    }
</style>