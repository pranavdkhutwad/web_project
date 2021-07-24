import "materialize-css/dist/css/materialize.min.css";
import $ from 'jquery';
import M from 'materialize-css';

import "./styles.css";

$(function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    const product = JSON.parse(localStorage.getItem('selectedProduct'));

    const html = `
        <div class="row">
            <div class="col s12 m3 l5">
            <div class="row">
                <div class="col s6 m3 l3 thumbnail-container">
                <div class="row">
                    <div class="col s12 m12 l12"><img width="100" src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=959&q=80" alt="image 1"></div>
                    <div class="col s12 m12 l12"><img width="100" src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=959&q=80" alt="image 1"></div>
                    <div class="col s12 m12 l12"><img width="100" src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=959&q=80" alt="image 1"></div>
                </div>
                </div>
                <div class="col s6 m9 l9">
                    <figure>
                        <img width="100%" src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=959&q=80" alt="Phone">
                        <figcaption>${product.title}</figcaption>
                    </figure>
                    <div class="row">
                        <div class="col s6 m6 l6">
                            <a class="waves-effect waves-light btn-large add-to-cart">Add To Cart</a>
                        </div>
                        <div class="col s6 m6 l6">
                            <a class="waves-effect waves-light btn-large buy-now">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="col s12 m9 l7">
            <h1>${product.title}</h1>
            <p>${product.description}</p>
            <article>
                Product Specification
            </article>
            </div>
        </div>
    `;

    $('.product-details').append(html);
});
