var wms_layers = [];

var format_Lotfinal_0 = new ol.format.GeoJSON();
var features_Lotfinal_0 = format_Lotfinal_0.readFeatures(json_Lotfinal_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lotfinal_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotfinal_0.addFeatures(features_Lotfinal_0);
var lyr_Lotfinal_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotfinal_0, 
                style: style_Lotfinal_0,
                popuplayertitle: 'Lot final',
                interactive: true,
                title: '<img src="styles/legend/Lotfinal_0.png" /> Lot final'
            });
var format_batusempadanmerge_1 = new ol.format.GeoJSON();
var features_batusempadanmerge_1 = format_batusempadanmerge_1.readFeatures(json_batusempadanmerge_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batusempadanmerge_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batusempadanmerge_1.addFeatures(features_batusempadanmerge_1);
var lyr_batusempadanmerge_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batusempadanmerge_1, 
                style: style_batusempadanmerge_1,
                popuplayertitle: 'batu sempadan merge',
                interactive: true,
                title: '<img src="styles/legend/batusempadanmerge_1.png" /> batu sempadan merge'
            });

lyr_Lotfinal_0.setVisible(true);lyr_batusempadanmerge_1.setVisible(true);
var layersList = [lyr_Lotfinal_0,lyr_batusempadanmerge_1];
lyr_Lotfinal_0.set('fieldAliases', {'fid': 'fid', 'NO_LOT': 'NO_LOT', 'AREA': 'AREA', 'layer': 'layer', 'path': 'path', 'tsp — ha': 'tsp — ha', 'tsp — _1': 'tsp — _1', 'tsp — pe': 'tsp — pe', });
lyr_batusempadanmerge_1.set('fieldAliases', {'fid': 'fid', 'B': 'B', 'U': 'U', 'layer': 'layer', 'path': 'path', });
lyr_Lotfinal_0.set('fieldImages', {'fid': '', 'NO_LOT': '', 'AREA': '', 'layer': '', 'path': '', 'tsp — ha': '', 'tsp — _1': '', 'tsp — pe': '', });
lyr_batusempadanmerge_1.set('fieldImages', {'fid': '', 'B': '', 'U': '', 'layer': '', 'path': '', });
lyr_Lotfinal_0.set('fieldLabels', {'fid': 'no label', 'NO_LOT': 'header label - visible with data', 'AREA': 'no label', 'layer': 'no label', 'path': 'no label', 'tsp — ha': 'no label', 'tsp — _1': 'no label', 'tsp — pe': 'no label', });
lyr_batusempadanmerge_1.set('fieldLabels', {'fid': 'no label', 'B': 'no label', 'U': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_batusempadanmerge_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});