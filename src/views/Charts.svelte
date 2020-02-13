<SvelteFC {...chartConfig} bind:chart={chartObj}/>

<script>
    import { onMount } from "svelte"
    import FusionCharts from 'fusioncharts'
    import Charts from 'fusioncharts/fusioncharts.charts'
    import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
    import SvelteFC, { fcRoot } from 'svelte-fusioncharts'
    import { items, updateItems } from '../stores/storeList'

    onMount(() => {
        updateItems()
    })

    // Always set FusionCharts as the first parameter
    fcRoot(FusionCharts, Charts, FusionTheme)

    let chartObj,
            dataSource = {
                "chart": {
                    "caption": 'Самые дорогие goods',
                    "subCaption": 'Выше - дороже',
                    "xAxisName": 'Товар',
                    "yAxisName": 'Стоимость (MMbbl)',
                    "numberSuffix": ' ₽',
                    "theme": 'fusion'
                },
                "data": $items.map(item => {
                    return {
                        "label": item.title,
                        "value": item.price
                    }
                })
            },
            chartConfig = {
                type: 'column2d',
                width: 600,
                height: 400,
                dataFormat: 'json',
                dataSource: dataSource
            }
</script>