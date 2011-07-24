
function parseQueryString(q) { // parameter makes function unit testable

    // cutting of '?', details here https://developer.mozilla.org/en/window.location#Properties
    q = q || window.location.search.substring(1);

    var params = {},
        parts = q.split('&'),
        i, len = parts.length, s, val;

    for (i = 0; i < len; i += 1) {

        s = parts[i].split('=');
        val = s[1];

        // only int, float and string, add others if required
        params[s[0]] = parseInt(val, 10) || parseFloat(val) || s[1]; 
    }

    return params;
}