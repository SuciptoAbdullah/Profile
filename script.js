async function loadComponent(element, file) {
    const response = await fetch(file);
    const html = await response.text();
    $('body').html(html);
}

loadComponent('nav', './view/component/navbar.html');