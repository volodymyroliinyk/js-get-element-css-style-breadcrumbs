/*
 * @Example of result:
 *
 * 0: ".container-fluid .row"
 * 1: ".container-fluid .row .col-md-12 .conteiner-fluid .row"
 *
 * @param selector
 * @returns {*[]}
 */
function buildElementSelectorCssBreadcrumbs(selector) {
    var elements = document.querySelectorAll(selector);
    console.log('Elements with same selector:' + elements.length);

    if (elements.length > 0) {
        var allElementBreadcrumbs = [];

        for (var k in elements) {
            if (elements.hasOwnProperty(k)) {
                var parents = [];
                var parents2 = [];
                var elem = elements[k];

                while (elem.parentNode && elem.parentNode.nodeName.toLowerCase() != 'body') {
                    elem = elem.parentNode;
                    parents.push(elem);

                    var breadcrumbItem = (elem.getAttribute('id') != null ? ('#' + elem.getAttribute('id')) : '') + (elem.getAttribute('class') != null ? ('.' + elem.getAttribute('class').split(' ').join('.')) : '');

                    if (breadcrumbItem.length > 0) {
                        parents2.push(breadcrumbItem);
                    }
                }
            }
            var newBreadcrumb = parents2.reverse().join(' ') + ' ' + selector;

            if (allElementBreadcrumbs.indexOf(newBreadcrumb) == -1) {
                allElementBreadcrumbs.push(newBreadcrumb);
            }
        }
        console.log('Unique elements with same selector:' + allElementBreadcrumbs.length);

        return allElementBreadcrumbs;
    }
}

/* Possible run inside web browser console. */
console.log(buildElementSelectorCssBreadcrumbs(".selector"));