<button class="{ class_name }" on:click={emitEvent}>
    <slot/>
</button>

<script>
    import { createEventDispatcher } from 'svelte'

    let class_name = ''

    export { class_name as class }

    const dispatch = createEventDispatcher()

    function emitEvent() {
        return dispatch('clicked', {})
    }
</script>

<style>
    button {
        border: none;
        cursor: pointer;
        padding: .25rem 1rem;
    }
</style>