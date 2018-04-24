var modalcart = Vue.component('modalcart', {
    props: ['carts', 'get-number-format', 'delete-item', 'checkout', 'qtyitemincarts'],
    template: `
    <section id="modal-shop-cart">
        <div class="modal fade bd-example-modal-lg modal-cart" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">Shooping Cart</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">

                    <table id="cart" class="table table-hover table-condensed">
                        <thead>
                            <tr>
                                <th style="width:50%">Product</th>
                                <th style="width:10%">Price</th>
                                <th style="width:8%">Quantity</th>
                                <th style="width:22%" class="text-center">Subtotal</th>
                                <th style="width:10%"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in carts">
                                <td data-th="Product">
                                    <div class="row-product">
                                        <div class="col-sm-5 hidden-xs row-product-inner"><img :src="item.image" alt="..." class="img-responsive shop-cart-image"/></div>
                                        <div class="col-sm-0 row-product-inner">
                                            <p class="nomargin">{{ item.name }}</p>
                                        </div>
                                    </div>
                                </td>
                                <td data-th="Price">{{ getNumberFormat(item.price) }}</td>
                                <td data-th="Quantity">
                                    <!-- <input type="number" class="form-control text-center" v-bind:value="cart.qty"> -->
                                    <p class="text-center">{{ qtyitemincarts(item) }}</p>
                                </td>
                                <td data-th="Subtotal" class="text-center">{{ getNumberFormat( item.qty_buy * item.price ) }}</td>
                                <td class="actions" data-th="">
                                    <!-- <button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button> -->
                                    <button class="btn btn-danger btn-sm" v-on:click="deleteItem(item)"><i class="fa fa-trash-o"></i></button>								
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><a href="" data-dismiss="modal" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>
                                <td colspan="2" class="hidden-xs"></td>
                                <td class="hidden-xs text-center"><strong>{{  }}</strong></td>
                                <td><a href="" @click="checkout()" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
            </div>
        </div>
    </section>
    `
})