var navbar = Vue.component('navbar', {
    props: ['carts'],
    template: `
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a class="navbar-brand" href="#">Travelonesia.com</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="" role="button" data-toggle="modal"  data-target=".modal-admin">Admin <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
                <div>
                    <a href="" class="btn btn-info" role="button" data-toggle="modal"  data-target=".modal-cart">
                        <span class="fa fa-shopping-cart animated swing"></span> Shopping Cart ({{carts.length}})
                    </a>
                </div>
            </div>
        </nav>
    </div>`
})

