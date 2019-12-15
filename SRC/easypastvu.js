//
putcoord = function() {
  let found = document.head.textContent.match(/"geo":\[(.*?)]/);
  if ( found ) {
          let xy = found[1];
          let elem = document.getElementById('divxy');
          if ( elem == null ) {
            let elems = document.querySelectorAll('div.info');
            if ( elems ) {
              elems[1].innerHTML = '<div class="info" id="divxy"><span class="infoName">Координаты:</span>'+xy+'</div>\n' + elems[1].innerHTML;
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
console.log('EasyPastvu: ver.1.21');
let observer = new MutationObserver( callback );
observer.observe( document.body, {subtree: true, attributes: true, characterData: true, attributeFilter: ["download"]} );


