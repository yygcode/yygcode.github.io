function CodeHighlightOn(elem, id)
{
    var target = document.getElementById(id);
    if(null != target) {
        elem.cacheClassElem = elem.className;
        elem.cacheClassTarget = target.className;
        target.className = "code-highlighted";
        elem.className   = "code-highlighted";
    }
}
function CodeHighlightOff(elem, id)
{
    var target = document.getElementById(id);
    if(elem.cacheClassElem)
        elem.className = elem.cacheClassElem;
    if(elem.cacheClassTarget)
        target.className = elem.cacheClassTarget;
}

document.addEventListener('DOMContentLoaded',function() {
    document.getElementById("table-of-contents").onclick = function() {
        var elem = document.getElementById("text-table-of-contents");
        elem.style.display = elem.style.display == "block" ? "none" : "block";
    }
});

var url = document.location.href;
var orgsource = url.substring(0, url.lastIndexOf("."))+".org.html";
function show_org_source(){
    document.location.href = orgsource;
}

document.addEventListener('DOMContentLoaded',function() {
    document.getElementById("table-of-contents").onclick = function() {
        var elem = document.getElementById("text-table-of-contents");
        elem.style.display = elem.style.display == "block" ? "none" : "block";
    }
});

var url = document.location.href;
var orgsource = url.substring(0, url.lastIndexOf("."))+".org.html";
function show_org_source(){
    document.location.href = orgsource;
}
