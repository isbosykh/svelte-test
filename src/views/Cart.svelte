<div class="cart">
    {#if $cart.length !== 0}
        <div class="list">
            <List>
                {#each $cart as item (item.id)}
                    <li><Item {item}/></li>
                {/each}
            </List>
        </div>
    {:else}
        <h2>Корзина пуста :c</h2>
    {/if}
    <h3>{$sum} ₽ к оплате</h3>
    <Button on:clicked={() => buy()} class="btn-buy">Купить</Button>
</div>

<script>
    import {cart, sum} from '../stores/cart'
    import {profile} from '../stores/profile'
    import Item from "../components/List/Item/Item.svelte"
    import List from "../components/List/List.svelte"
    import Button from "../components/Button/Button.svelte"

    function buy() {
        let newSum = $profile.money - $sum
        if ($profile.money - $sum < 0) {

        } else {
            profile.update(current => {return {money: newSum}})
            cart.set([])
        }
    }
</script>

<style lang="scss">
    .cart {
        :global(.btn-buy) {
            color: white;
            background-color: #ff3e00;
        }

        :global(.list) {
            margin-bottom: 1rem;
        }
    }
</style>