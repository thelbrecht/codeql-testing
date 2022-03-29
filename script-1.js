
function a() {
    b();
    return "hello";
}

function b() {
    c();
    return "its me";
}

function c() {
    d();
}

function e() {
    return document.location.href;
}

function d() {
    var div = document.createElement(e())
    div.textContent = "I was wondering if after all these years you'd like to meet" + document.location.href
    return div
}

function f() {
    document.body.appendChild(d())
}
a();