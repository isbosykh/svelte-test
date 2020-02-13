<div class="listComponent">
    <ul>
        <slot/>
    </ul>
</div>

<script>
</script>

<style lang="scss">
    .listComponent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        ul {
            margin: 0;
            padding: 0;
            display: grid;
            list-style: none;
            width: max-content;
            position: relative;
            grid-column-gap: 10px;
            grid-template-columns: 1fr 1fr 1fr;
            grid-row-gap: 10px;
        }
    }
</style>