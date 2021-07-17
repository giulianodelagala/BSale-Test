$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8000/products/"
    }).then( data => renderProduct (data) );
});

function renderProduct(data) {
    // console.log(data);
    {
        data.results.map( (product) => {
            $("#products").append(
                `<div class="card" style="width: 16rem;">
                        <img class="card-img-top" src="` + product.url_image+ `" alt="`+ product.name + `">
                        <div class="card-body">
                            <p class="card-text text-center">` + product.name + `</p>
                          </div>
                        <hr/>
                        <div class="card-body row row-content col-10 offset-1">
                            <p >$` + product.price + `</p>
                            <div class="ml-auto">
                                <a href="#" class="card-link"><span class="fa fa-cart-plus fa-2x"></span></a>
                            </div>
                        </div>
                </div>`
            ); 
        } );
    }
    
}