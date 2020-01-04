putcoord = function() {
  let found = document.head.textContent.match(/"geo":\[(.*?)]/);
  if ( found ) {
    let xy = found[1];
    let xyarr = xy.split(',');
    let elem = document.getElementById('divxy');
    if ( elem == null ) {
      let newdiv = document.createElement('div');
      url = 'http://wikimapia.org/#lang=ru&lat='+xyarr[0]+'&lon='+xyarr[1]+'&z=15&m=w&v=1';
// Не работает, если вынести обработчики кликов в отдельные функции. Почему?
      newdiv.innerHTML = '<span class="infoName">Координаты:</span>'+xy+'&nbsp;<button onclick="let aux = document.createElement(\'input\'); aux.setAttribute(\'value\',\''+xy+'\'); document.body.appendChild(aux); aux.select(); document.execCommand(\'copy\'); document.body.removeChild(aux)" class="btn btn-xxs btn-primary" data-toggle="tooltip" data-placement="bottom" title="Скопировать координаты в буфер обмена">C</button>&nbsp;<button type="button" onclick="window.open(\''+url+'\')" class="btn btn-xxs btn-primary" data-toggle="tooltip" data-placement="bottom" title="Открыть Викимапию">W</button>';
      newdiv.classList.add('info');
      newdiv.id = 'divxy';
      let block = document.getElementsByClassName('infoBlock')[1];
      block.insertBefore(newdiv, block.firstChild);
    } else {
      elem.innerHTML = '<span class="infoName">Координаты:</span> ?,? <button type="button" onclick="location.reload()" class="btn btn-xxs btn-primary" data-toggle="tooltip" data-placement="bottom" title="Перезагрузить страницу">R</button>'
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
//
console.log('EasyPastvu: ver.1.4');
let observer = new MutationObserver( callback );
observer.observe( document.body, {subtree: true, attributes: true, characterData: true, attributeFilter: ["download"]} );


