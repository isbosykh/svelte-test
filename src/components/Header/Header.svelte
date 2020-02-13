<header>
    <div class="left-menu">
        <h3>Деняк: {$profile.money} ₽</h3>
    </div>
    <nav>
        <Button on:clicked={() => push('/')}>Главная</Button>
        <Button on:clicked={() => push('/cart')}>Корзина</Button>
        <Button on:clicked={() => push('/charts')}>Графики</Button>
        <Button on:clicked={() => push('/new-good')}>Новый good</Button>
    </nav>
</header>

<script>
    import Button from "../Button/Button.svelte"
    import { push } from 'svelte-spa-router'
    import { profile } from '../../stores/profile'
</script>

<style lang="scss">
    header {
        height: 60px;
        color: white;
        display: flex;
        padding: 0 20px;
        align-items: center;
        background-color: #282c32;
        justify-content: space-between;

        :global(button) {
            margin-left: 10px;
        }
    }
</style>