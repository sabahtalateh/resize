# Ресайзилка

## Не забудьте установить зависимости
```npm install```

## Перед запуском положить картинки для ресайза в папку input
```npm run resize {!width} {!height} {mode = contain} {jpeg_quality = 50} {postfix = s}```


`mode = contain` - подходит для ресайза картинок с планировками квартир, где надо чтобы вся картинка влезла


`mode = cover` - подходит для ресайза цветных картинок которые можно обрезать

## Перед последующими использованиями очистить старые картинки
```npm run clean_input
npm run clean_resized```

## Или одной командой
```npm run clean_input && npm run clean_resized```
