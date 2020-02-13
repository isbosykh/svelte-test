<div class="itemView">
    <div class="item" class:editable>
        <div class="buttons">
            <button on:click={toCart} class="btn-rounded btn-toCart">
                <span>Add to cart?</span>
            </button>
            <button on:click={delItem} class="btn-rounded btn-delete">
                <span>Delete?</span>
            </button>
            <button on:click={() => editable = !editable} class="btn-rounded btn-edit">
                <span>Edit?</span>
            </button>
        </div>

        <img src="" alt="" class="image"/>

        {#if !editable}
            <div class="content">
                <h4 class="title">{ item.title }</h4>
                <p class="description">{ item.description }</p>
                <span class="price">{ item.price + ' ₽' }</span>
            </div>
        {/if}

        {#if editable}
            <form on:submit={editItem} class="content">
                <label>
                    <input class="input-field" bind:value={editedItem.title} placeholder={item.title} type="text">
                </label>
                <label class="field-description">
                    <textarea class="input-field" bind:value={editedItem.description} placeholder={item.description}></textarea>
                </label>
                <label>
                    <input class="input-field" bind:value={editedItem.price} placeholder={item.price} type="number">
                </label>
                <Button class="btn-save">Save</Button>
            </form>
        {/if}
    </div>
</div>

<script>
    import {onMount} from "svelte"
    import {getGood} from '../api/api'
    import {push, location} from 'svelte-spa-router'
    import {delItemById, editItemInItems} from '../stores/storeList'
    import {addToCart} from '../stores/cart'
    import Button from "../components/Button/Button.svelte";

    let editable = false

    let item = {}
    export let params = {}

    $: editedItem = item

    onMount(async () => {
        getGood(params.id).then(response => item = response)
    })

    function delItem() {
        delItemById(item.id)
        push('/')
    }

    function editItem() {
        editItemInItems(item.id, editedItem)
        editable = false
    }

    function toCart() {
        addToCart(item)
    }
</script>

<style lang="scss">
    .itemView {
        display: flex;
        justify-content: center;
    }
    .item {
        width: 480px;
        color: white;
        min-height: 640px;
        display: flex;
        text-align: left;
        position: relative;
        flex-direction: column;
        border-radius: .375rem;
        background-color: #282c32;
        box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);

        &.editable {

            .image {
                height: 30px;
            }

            .input-field {
                width: 100%;
                margin: .5rem 0;
            }

            .field-description {
                flex-grow: 1;
                display: flex;

                textarea {
                    margin: 0;
                    flex-grow: 1;
                    resize: none;
                }
            }

            :global(.btn-save) {
                background-color: palegreen;
            }
        }

        .buttons {
            top: 0;
            right: 0;
            width: 100px;
            height: 30px;
            display: flex;
            position: absolute;
            justify-content: space-between;

            .btn-rounded {
                width: 8rem;
                color: white;
                border: none;
                cursor: pointer;
                transition: .3s;
                text-align: left;
                position: absolute;
                white-space: nowrap;
                padding-right: 2.5rem;
                border-radius: .25rem;
                background-color: #ff1e00;
                clip-path: circle(.5rem at 90% 50%);

                &:hover {
                    clip-path: circle(100%);

                    &:after {
                        top: 0;
                        bottom: 0;
                        right: .3rem;
                        content: '✔';
                        margin: auto;
                        display: flex;
                        position: absolute;
                        align-items: center;
                    }
                }

                &.btn-delete {
                    right: 0;
                    background-color: #ff1e00;
                }

                &.btn-edit {
                    right: .8rem;
                    background-color: #ff8e00;
                }

                &.btn-toCart {
                    z-index: 2;
                    right: 1.6rem;
                    background-color: #00e676;
                }
            }
        }
    }

    .image {
        width: 100%;
        height: 340px;
        display: block;
        transition: .1s ease-in-out;
        background-color: aliceblue;
    }

    .content {
        flex-grow: 1;
        padding: 1rem;
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: space-between;

        h4, p {
            margin: 0;

            &.description {
                word-break: break-word;
            }

            &.title {
                margin-bottom: 1rem;
            }
        }

        .price {
            font-size: 1rem;
            text-align: right;
            margin-top: 1rem;
        }
    }
</style>