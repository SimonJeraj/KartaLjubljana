var wms_layers = [];


        var lyr_Googlemaps_0 = new ol.layer.Tile({
            'title': 'Google maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Grid_1 = new ol.format.GeoJSON();
var features_Grid_1 = format_Grid_1.readFeatures(json_Grid_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grid_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grid_1.addFeatures(features_Grid_1);
var lyr_Grid_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grid_1, 
                style: style_Grid_1,
                popuplayertitle: "Grid",
                interactive: false,
                title: '<img src="styles/legend/Grid_1.png" /> Grid'
            });
var format_Razdelitevpocelicah_2 = new ol.format.GeoJSON();
var features_Razdelitevpocelicah_2 = format_Razdelitevpocelicah_2.readFeatures(json_Razdelitevpocelicah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Razdelitevpocelicah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Razdelitevpocelicah_2.addFeatures(features_Razdelitevpocelicah_2);
var lyr_Razdelitevpocelicah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Razdelitevpocelicah_2, 
                style: style_Razdelitevpocelicah_2,
                popuplayertitle: "Razdelitev po celicah",
                interactive: true,
    title: 'Razdelitev po celicah<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_0.png" /> 2<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_1.png" /> 4<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_2.png" /> 5<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_3.png" /> 7<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_4.png" /> 8<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_5.png" /> 9<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_6.png" /> 10<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_7.png" /> 11<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_8.png" /> 13<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_9.png" /> 14<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_10.png" /> 15<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_11.png" /> 16<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_12.png" /> 17<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_13.png" /> 19<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_14.png" /> 20<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_15.png" /> 21<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_16.png" /> 22<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_17.png" /> 23<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_18.png" /> 25<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_19.png" /> 26<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_20.png" /> 27<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_21.png" /> 28<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_22.png" /> 29<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_23.png" /> 31<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_24.png" /> 32<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_25.png" /> 33<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_26.png" /> 34<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_27.png" /> 35<br />\
    <img src="styles/legend/Razdelitevpocelicah_2_28.png" /> <br />'
        });

lyr_Googlemaps_0.setVisible(true);lyr_Grid_1.setVisible(true);lyr_Razdelitevpocelicah_2.setVisible(true);
var layersList = [lyr_Googlemaps_0,lyr_Grid_1,lyr_Razdelitevpocelicah_2];
lyr_Grid_1.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', });
lyr_Razdelitevpocelicah_2.set('fieldAliases', {'OZNAKA_VNOSA': 'OZNAKA_VNOSA', 'STABILIZACIJA': 'STABILIZACIJA', 'STATUS': 'STATUS', 'DATUM_ZAD_UPOR': 'DATUM_ZAD_UPOR', 'DRŽAVA': 'DRŽAVA', 'YGK': 'YGK', 'XGK': 'XGK', 'METODA_YXGK': 'METODA_YXGK', 'LETO_YXGK': 'LETO_YXGK', 'KO': 'KO', 'HNO_TRST': 'HNO_TRST', 'METODA_HNO_TRST': 'METODA_HNO_TRST', 'LETO_HNO_TRST': 'LETO_HNO_TRST', 'E': 'E', 'N': 'N', 'METODA_EN': 'METODA_EN', 'LETO_EN': 'LETO_EN', 'METODA_HEL': 'METODA_HEL', 'PROJEKT_HZ': 'PROJEKT_HZ', 'IME_TO': 'IME_TO', 'RED_MREZE_HZ_NAZIV': 'RED_MREZE_HZ_NAZIV', 'STEVILKA_HZ': 'STEVILKA_HZ', 'S': 'S', 'OPOMBA_HZ': 'OPOMBA_HZ', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', });
lyr_Grid_1.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', });
lyr_Razdelitevpocelicah_2.set('fieldImages', {'OZNAKA_VNOSA': 'Range', 'STABILIZACIJA': 'TextEdit', 'STATUS': 'TextEdit', 'DATUM_ZAD_UPOR': 'Range', 'DRŽAVA': 'TextEdit', 'YGK': 'TextEdit', 'XGK': 'TextEdit', 'METODA_YXGK': 'TextEdit', 'LETO_YXGK': 'Range', 'KO': 'Range', 'HNO_TRST': 'TextEdit', 'METODA_HNO_TRST': 'TextEdit', 'LETO_HNO_TRST': 'Range', 'E': 'Range', 'N': 'Range', 'METODA_EN': 'TextEdit', 'LETO_EN': 'Range', 'METODA_HEL': 'TextEdit', 'PROJEKT_HZ': 'TextEdit', 'IME_TO': 'TextEdit', 'RED_MREZE_HZ_NAZIV': 'TextEdit', 'STEVILKA_HZ': 'Range', 'S': 'TextEdit', 'OPOMBA_HZ': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', });
lyr_Grid_1.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', });
lyr_Razdelitevpocelicah_2.set('fieldLabels', {'OZNAKA_VNOSA': 'inline label - always visible', 'STABILIZACIJA': 'inline label - always visible', 'STATUS': 'hidden field', 'DATUM_ZAD_UPOR': 'hidden field', 'DRŽAVA': 'hidden field', 'YGK': 'inline label - always visible', 'XGK': 'inline label - always visible', 'METODA_YXGK': 'inline label - always visible', 'LETO_YXGK': 'inline label - always visible', 'KO': 'hidden field', 'HNO_TRST': 'inline label - always visible', 'METODA_HNO_TRST': 'inline label - always visible', 'LETO_HNO_TRST': 'inline label - always visible', 'E': 'inline label - always visible', 'N': 'inline label - always visible', 'METODA_EN': 'hidden field', 'LETO_EN': 'hidden field', 'METODA_HEL': 'hidden field', 'PROJEKT_HZ': 'hidden field', 'IME_TO': 'hidden field', 'RED_MREZE_HZ_NAZIV': 'inline label - always visible', 'STEVILKA_HZ': 'hidden field', 'S': 'hidden field', 'OPOMBA_HZ': 'hidden field', 'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', });
lyr_Razdelitevpocelicah_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});