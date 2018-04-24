var modaladmin = Vue.component('modaladmin', {
    props: ['add-item-success', 'item-name', 'item-price', 'item-location', 'item-qty-stock', 'submit-item'],
    template: `
    <section id="modal-admin">
        <div class="modal fade bd-example-modal-lg modal-admin" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">Admin Input Form</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>

                </div>
                <div class="modal-body">
                    <!-- <form> -->
                        <div class="md-form mb-4">
                            <div class="add-success">
                                <h5 class="add-success">{{ addItemSuccess }}</h5>
                            </div>
                        </div>        
                        <div class="form-group">
                            <label for="exampleInputEmail1">Trip name:</label>
                            <input type="text" class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter trip name..." v-model="itemName">
                            <small id="emailHelp" class="form-text text-muted">Psst, make it interesting !</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Trip price:</label>
                            <input type="text" class="form-control" id="" placeholder="Enter trip price..." v-model="itemPrice">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Trip Location:</label>
                            <select class="form-control" id="exampleFormControlSelect1" v-model="itemLocation" required>
                                <option value="Bali">Bali</option>
                                <option value="Lombok">Lombok</option>
                                <option value="Padang">Padang</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Trip Seats:</label>
                            <input type="text" class="form-control" id="" placeholder="Enter number of available trip seats..." v-model="itemQtyStock">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlFile1">Trip Thumbnail:</label>
                            <input type="file" class="form-control-file" id="image">
                        </div>
                        <button class="btn btn-info col-md-12" @click="submitItem()">Submit</button>
                    <!-- </form> -->

                </div>
            </div>
            </div>
        </div>
    </section>
    `
})