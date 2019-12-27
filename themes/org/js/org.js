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
(function(f, a, t, h, o, m){
    a[h]=a[h]||function(){
	(a[h].q=a[h].q||[]).push(arguments)
    };
    o=f.createElement('script'),
    m=f.getElementsByTagName('script')[0];
    o.async=1; o.src=t; o.id='fathom-script';
    m.parentNode.insertBefore(o,m)
})(document, window, '//stats.orgmode.org/tracker.js', 'fathom');
fathom('set', 'siteId', 'NWSQJ');
fathom('trackPageview');

function goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}
