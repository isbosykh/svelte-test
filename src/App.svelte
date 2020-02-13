<main>
    <Header/>
    <h1>Hello { name }!</h1>
    <Router { routes }/>
</main>

<script>
    import Header from "./components/Header/Header.svelte";
    import Router from 'svelte-spa-router';
    import { routes } from './routes/router';
    import {onMount} from "svelte"
    import {items, updateItems} from './stores/storeList'

    export let name;

    onMount(async () => {
        updateItems()
    });
</script>

<style lang="scss">
    main {
        text-align: center;
        margin: 0 auto 20px;

        @media (min-width: 640px) {
            max-width: none;
        }

        h1 {
            color: #ff3e00;
            text-transform: uppercase;
            font-size: 4em;
            font-weight: 100;
        }
    }
</style>