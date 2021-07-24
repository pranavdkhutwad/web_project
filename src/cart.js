import "materialize-css/dist/css/materialize.min.css";
import $ from 'jquery';
import M from 'materialize-css';

import "./styles.css";

$(function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});
