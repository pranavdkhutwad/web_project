import $ from 'jquery';
import M from 'materialize-css';

import "materialize-css/dist/css/materialize.min.css";
import "./styles.css";

$(function() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    $('#search').on('focus', function() {
        $('.search-icon').addClass('active');
        $('.search-label').addClass('active');
    });

    $('#search').on('blur', function() {
        if (!$('#search').val()) {
            $('.search-label').removeClass('active');
        }
        $('.search-icon').removeClass('active');
        
    });

    $(document).on('click', '.home-card', function(event) {
        // Read clicked dom reference ID.
        const id = $(event.currentTarget).data('product-id');

        // Read products from local storage and convert into JS object.
        const products = JSON.parse(localStorage.getItem('products'));

        // Find clicked product from product object based on reference ID.
        const selectedProduct = products.find(product => product.id === id);
       
        // store selected product into local storage
        localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));

        // Redirect to product page.
        window.location.href = "product.html";
    });

    // Preparing DOM to show products.
    function prepareProductList(products) {
        const html = [];

        $.each(products, function(index, product) {

            html.push(`
                <div class="col s12 m4 l3">
                    <div class="card home-card" data-product-id="${ product.id }">
                    <div class="card-image">
                        <img src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=959&q=80" alt="Phone">
                        <span class="card-title">${product.title}</span>
                    </div>
                    <div class="card-content">
                        <p>${product.description}</p>
                    </div>
                    </div>
                </div>
            `);
        });

        return html.join('');
    }


    // Fetching products from the server.
    $.ajax('http://localhost:3000/products', {
        dataType: 'json',
        success: function(data) {
            
            const dataStr = JSON.stringify(data);
            localStorage.setItem('products', dataStr);

            const productList = prepareProductList(data);

            $('.product-list').append(productList);
        },
        error: function(jqXhr, textStatus, errorMessage) {
            $('.product-list').append('<span class="error-msg">Something is wrong</span>');
        }
    });
});
