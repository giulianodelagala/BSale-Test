var pagination = {
    keyword: '',
    totalRecords : 0,
    //records : [],
    //displayRecords : [],
    recPerPage : 12,
    page : 1,
    totalPages : 0,
    next : null,
    previous: null,
 }

 const URL_QUERY = "http://localhost:8000/list/";

$(document).ready(function() {
    url = URL_QUERY + '?page=1&search=';
    $.ajax({
        url: URL_QUERY
    }).then( data => {
            getValuesPagination(data,'');
            renderProduct (data);
            renderPagination();
        });

    // $( () => searchProducts(''));

    $('#searchToggleButton').click( () => {
        $('#searchModal').modal('show');
    });

    $('#searchButton').click( () => {
        //alert("Búsqueda: " + $('#searchKeyword').val());
        searchProducts('?page=1&search=' + $('#searchKeyword').val());
        $('#searchModal').modal('hide');
        return false;
    });
});

function renderProduct(data) {
    // console.log(data);
    $("#products").empty();

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

function searchProducts(keyword = '', page = 1) {
    const url = URL_QUERY + keyword;
    console.log(url);
    $.ajax({
        url: url
    }).then( data => {
        getValuesPagination(data, keyword, page);
        renderProduct (data);
        renderPagination();
    });
}

function getValuesPagination(data, keyword, page = 1) {
    pagination.keyword = keyword;
    pagination.totalRecords = data.count;
    pagination.next = data.next;
    pagination.previous = data.previous;
    pagination.totalPages = Math.ceil(pagination.totalRecords/pagination.recPerPage);
    pagination.page = page;
}

function renderPagination() {
    var $pag = $('#paginationBar');
    let prev = pagination.page - 1;
    let next = pagination.page + 1;
    $pag.empty();
    
    $pag.append(
        `<li class="page-item">
            <a onClick="searchProducts('?page=` + prev + '&search=' + pagination.keyword + `',` + prev + `)"
                class="page-link" role="button">Previous</a>
        </li>`
        );
    
    for (let i = 1; i <= pagination.totalPages; i++){
        if (pagination.page === i){
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
                <a onClick="searchProducts('?page=` + i + '&search=' + pagination.keyword + `',` + i + `)"
                    class="page-link" role="button">` + i + `</a>
                </li>`
            );
        }
    }
    $pag.append(
        `<li class="page-item">
            <a onClick="searchProducts('?page=` + next + '&search=' + pagination.keyword + `',` + next + `)"
                class="page-link" role="button">Next</a>
        </li>`
    );

    if (pagination.previous === null)
        $("#paginationBar li:first").addClass("disabled");
    if (pagination.next === null)
        $("#paginationBar li:last").addClass("disabled");        
}