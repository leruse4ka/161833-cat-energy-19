ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
          center: [59.938635, 30.323118],
          zoom: 16
      }, {
          searchControlProvider: "yandex#search"
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      )

      myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {}, {
        iconLayout: "default#image",
        iconImageHref: "../img/map-pin.png",
        iconImageSize: [62, 53]
    });

  myMap.geoObjects
      .add(myPlacemark);
});
