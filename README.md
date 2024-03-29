# EasyPastvu
Это расширение для Firefox'а выводит координаты на страницах с фотографиями сайта [pastvu.com](https://pastvu.com).

**ВНИМАНИЕ: После выхода версии движка 2.0.13 (06.02.23), в которую добавлена возможность копирования координат, расширение потеряло свою актуальность!**
  
По техническим причинам пока обновлять координаты нужно вручную. Если вы видите под снимком надпись вида "**Координаты:** ?,? [R]" (или вообще не видите никаких координат), то обновите страницу (или нажмите кнопку [R]). Надпись сменится на "**Координаты:** x,y [C] [W]".

Кнопка [С] после координат копирует координаты в буфер обмена. Кнопка [W] открывает окно [Викимапии](https://wikimapia.org) в месте с этими координатами.

## Установка для Google Chrome
Существует техническая возможность установить расширение и в браузере Chrome. Для этого:
1. Создайте новый каталог и скопируйте туда файлы из архива [SRC/easypastvu-src.zip](https://github.com/vgiv/easypastvu/blob/master/SRC/easypastvu-src.zip);
2. Перейдите в браузере на страницу `chrome://extensions/`;
3. Включите **"Режим разработчика"** кнопкой в правой верхней части экрана;
4. Нажмите кнопку **"Загрузить распакованное расширение"** и выберете каталог, созданный вами в первом пункте.

Пункты 2-4 нужно будет повторять каждый раз после перезагрузки браузера.
