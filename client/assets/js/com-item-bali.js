var itembali = Vue.component('itembali', {
    props: ['items-bali'],
    template: `
    <div class="content-container col-md-8 offset-md-2">
        <div class="content-head col-md-12">
            <h1 class="heading">BALI</h1>
        </div>
        <div class="content-items col-md-12">
            <div class="content-items-box" v-for="item in items-bali">
                <div class="content-items-image col-md-12">
                    <img class="items-image" :src="item.image">
                </div>
                <div clas="content-items-desc col-md-12">
                    <div class="items-name col-md-12">
                        <h3>{{ item.name }}</h3>
                    </div>
                    <div class="items-row col-md-12">
                        <div class="items-price col-md-8">
                            <p class="">Rp {{ getNumberFormat(item.price) }} Q: {{ item.qty_stock }}</p>
                        </div>
                        <button class="btn btn-info col-md-4" v-on:click="addToCart(item)">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})
