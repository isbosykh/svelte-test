<label>
    <select class="sortByPrice" on:change={sort} name={sortOptions.name}>
        {#each sortOptions.options as option}
            <option value={option.value}>{option.title}</option>
        {/each}
    </select>
</label>

<script>
    import {setSortOptions, updateItems} from '../../stores/storeList'

    export let sortOptions

    function sort() {
        if (this.value !== 'null') {
            setSortOptions({_sort: this.name, _order: this.value})
            updateItems()
        } else {
            updateItems({})
        }
    }
</script>