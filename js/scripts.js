// Global pagination object values
var PAGINATION = {
    keyword: '',
    totalRecords : 0,
    recPerPage : 12,
    page : 1,
    totalPages : 0,
    next : null,
    previous: null,
 }

 const URL_QUERY = "https://bs-backend.herokuapp.com/list/";

jQuery.ajaxSetup({
    beforeSend: function() {
       $('#loader').show();
    },
    complete: function(){
       $('#loader').hide();
    },
    success: function() {}
});

$(document).ready(function() {

    //Initial Query
    $( () => searchProducts(''));

    //Show Search Modal
    $('#searchToggleButton').click( () => {
        $('#searchModal').modal('show');
    });

    //Search Button
    $('#searchButton').click( () => {
        searchProducts('?page=1&search=' + $('#searchKeyword').val());
        $('#searchModal').modal('hide');
        return false;
    });
});

function searchProducts(keyword = '', page = 1) {
    // Search Products related to keyword from REST API, updates pagination,
    // render Products card and pagination bar

    const url = URL_QUERY + keyword;
    // console.log(url);
    $("#products").append('<h4 class="text-primary" id="loader">Loading...</h4>');
    $.ajax({
        url: url
    }).then( data => {
        getValuesPagination(data, keyword, page);
        renderProduct (data);
        renderPagination();
    }).fail( () => {
        renderError();
    });
}

function renderProduct(data) {
    // Render products Cards from data object

    $("#products").empty();
    {
        data.results.map( (product) => {
            $("#products").append(
                `<div class="card m-2" style="width: 16rem;">
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

function getValuesPagination(data, keyword, page = 1) {
    // Update Pagination Object values

    PAGINATION.keyword = keyword;
    PAGINATION.totalRecords = data.count;
    PAGINATION.next = data.next;
    PAGINATION.previous = data.previous;
    PAGINATION.totalPages = Math.ceil(PAGINATION.totalRecords/PAGINATION.recPerPage);
    PAGINATION.page = page;
}

function renderPagination() {
    // Render pagination navbar from pagination object values

    var $pag = $('#paginationBar');
    let prev = PAGINATION.page - 1;
    let next = PAGINATION.page + 1;
    $pag.empty();
    
    // Previous pagination button
    $pag.append(
        `<li class="page-item">
            <a onClick="searchProducts('?page=` + prev + '&search=' + PAGINATION.keyword + `',` + prev + `)"
                class="page-link" role="button">Previous</a>
        </li>`
        );
    
    // Page numbers pagination buttons
    for (let i = 1; i <= PAGINATION.totalPages; i++){
        if (PAGINATION.page === i){
            $pag.append(
            `
            <li class="page-item active">
                <a class="page-link" href="#">` + i + `<span class="sr-only">(current)</span></a>
            </li>`
            );
        }
        else {
            $pag.append(
                `<li class="page-item">
                <a onClick="searchProducts('?page=` + i + '&search=' + PAGINATION.keyword + `',` + i + `)"
                    class="page-link" role="button">` + i + `</a>
                </li>`
            );
        }
    }

    // Next pagination button
    $pag.append(
        `<li class="page-item">
            <a onClick="searchProducts('?page=` + next + '&search=' + PAGINATION.keyword + `',` + next + `)"
                class="page-link" role="button">Next</a>
        </li>`
    );
    
    // Disable next 'n previous buttons according to actual page
    if (PAGINATION.previous === null)
        $("#paginationBar li:first").addClass("disabled");
    if (PAGINATION.next === null)
        $("#paginationBar li:last").addClass("disabled");        
}

function renderError(){
    var $pag = $('#paginationBar');
    $pag.append( '<h3 class="text-danger">Failed to load products...</h3>')
}

