//
putcoord = function() {
  let found = document.head.textContent.match(/"geo":\[(.*?)]/);
  if ( found ) {
          let xy = found[1];
          let xyarr = xy.split(',');
          let elem = document.getElementById('divxy');
          if ( elem == null ) {
            let elems = document.querySelectorAll('div.info');
            if ( elems ) {
              elems[1].innerHTML = '<div class="info" id="divxy"><span class="infoName">Координаты:</span>'+xy+'&nbsp;<a href="http://wikimapia.org/#lang=ru&lat='+xyarr[0]+'&lon='+xyarr[1]+'&z=15&m=w&v=1" target="_blank">[W]</a></div>\n' + elems[1].innerHTML;
            }
          } else {
            elem.innerHTML = '<span class="infoName">Старые координаты (обновите страницу!):</span>'+xy
          }
  }
}
//
callback = function(mutationRecords) {
  for ( let mutationRecord of mutationRecords ) {
    if ( mutationRecord.attributeName ) {
      putcoord();
    }
  }
}
console.log('EasyPastvu: ver.1.3');
let observer = new MutationObserver( callback );
observer.observe( document.body, {subtree: true, attributes: true, characterData: true, attributeFilter: ["download"]} );


