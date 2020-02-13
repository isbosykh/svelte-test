<div class="newGood">
    <form on:submit={createGood}>
        <label>
            <span>Title</span>
            <input bind:value={good.title} type="text" class="title">
        </label>
        <label>
            <span>Description</span>
            <input bind:value={good.description} type="text" class="description">
        </label>
        <label>
            <span>Price</span>
            <input bind:value={good.price} type="number" class="price">
        </label>
        <Button type="submit">Create good</Button>
    </form>
</div>

<script>
    import Button from "../components/Button/Button.svelte";
    import { push, location } from 'svelte-spa-router';
    import { createNewGood } from '../stores/storeList'

    let good = {
        title: '',
        description: '',
        price: 0
    };

    function createGood() {
        if (!Object.values(good).includes('')) {
            createNewGood(good)
            push('/')
        } else {
            alert('Не все поля заполнены')
        }

    }
</script>

<style lang="scss">
    form {
        width: 300px;
        margin: auto;

        label {
            display: flex;
            flex-direction: column;

            span {
                text-align: left;
            }
        }
    }
</style>