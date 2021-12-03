ymaps.ready(function () {
    var myMap = new ymaps.Map('map-iframe', {
        center: [59.938891, 30.323155],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'Наш офис'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/map-marker.png',
            // Размеры метки.
            iconImageSize: [370, 190],
            // Смещение левого верхнего угла иконки относительно
            // её 'ножки' (точки привязки).
            iconImageOffset: [-185, -190]
        });

    myMap.geoObjects
        .add(myPlacemark);
});