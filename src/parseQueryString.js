
function parseQueryString(q) { // parameter makes function unit testable

    // cutting of '?', details here https://developer.mozilla.org/en/window.location#Properties
    q = q || window.location.search.substring(1);

    var params = {};

    return params;
}