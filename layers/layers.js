ol.proj.proj4.register(proj4);
ol.proj.get("ESRI:102003").setExtent([-2315663.056419, 287835.207619, -2241271.357531, 354823.416090]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PercentofBuildingsSuitableforSolar_1 = new ol.format.GeoJSON();
var features_PercentofBuildingsSuitableforSolar_1 = format_PercentofBuildingsSuitableforSolar_1.readFeatures(json_PercentofBuildingsSuitableforSolar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_PercentofBuildingsSuitableforSolar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PercentofBuildingsSuitableforSolar_1.addFeatures(features_PercentofBuildingsSuitableforSolar_1);
var lyr_PercentofBuildingsSuitableforSolar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PercentofBuildingsSuitableforSolar_1, 
                style: style_PercentofBuildingsSuitableforSolar_1,
                interactive: false,
    title: 'Percent of Buildings Suitable for Solar<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_1_1.png" /> 0 - 50<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_1_2.png" /> 50 - 71<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_1_3.png" /> 71 - 79<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_1_4.png" /> 79 - 83<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_1_5.png" /> 83 - 87<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_1_6.png" /> 87 - 90<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_1_7.png" /> 90 - 93<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_1_8.png" /> 93 - 96<br />\
    <img src="styles/legend/PercentofBuildingsSuitableforSolar_1_9.png" /> 96 - 100<br />'
        });
var format_CityBoundaries_2 = new ol.format.GeoJSON();
var features_CityBoundaries_2 = format_CityBoundaries_2.readFeatures(json_CityBoundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_CityBoundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityBoundaries_2.addFeatures(features_CityBoundaries_2);
var lyr_CityBoundaries_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CityBoundaries_2, 
                style: style_CityBoundaries_2,
                interactive: false,
                title: '<img src="styles/legend/CityBoundaries_2.png" /> City Boundaries'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PercentofBuildingsSuitableforSolar_1.setVisible(true);lyr_CityBoundaries_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PercentofBuildingsSuitableforSolar_1,lyr_CityBoundaries_2];
lyr_PercentofBuildingsSuitableforSolar_1.set('fieldAliases', {'GISJOIN': 'GISJOIN', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'carbon off': 'carbon off', 'Qualified': 'Qualified', 'pct_qual': 'pct_qual', 'solardata_region_name': 'solardata_region_name', 'solardata_state_name': 'solardata_state_name', 'solardata_lat_max': 'solardata_lat_max', 'solardata_lat_min': 'solardata_lat_min', 'solardata_lng_max': 'solardata_lng_max', 'solardata_lng_min': 'solardata_lng_min', 'solardata_lat_avg': 'solardata_lat_avg', 'solardata_lng_avg': 'solardata_lng_avg', 'solardata_yearly_sunlight_kwh_kw_threshold_avg': 'solardata_yearly_sunlight_kwh_kw_threshold_avg', 'solardata_count_qualified': 'solardata_count_qualified', 'solardata_percent_covered': 'solardata_percent_covered', 'solardata_percent_qualified': 'solardata_percent_qualified', 'solardata_number_of_panels_n': 'solardata_number_of_panels_n', 'solardata_number_of_panels_s': 'solardata_number_of_panels_s', 'solardata_number_of_panels_e': 'solardata_number_of_panels_e', 'solardata_number_of_panels_w': 'solardata_number_of_panels_w', 'solardata_number_of_panels_f': 'solardata_number_of_panels_f', 'solardata_number_of_panels_median': 'solardata_number_of_panels_median', 'solardata_number_of_panels_total': 'solardata_number_of_panels_total', 'solardata_kw_median': 'solardata_kw_median', 'solardata_kw_total': 'solardata_kw_total', 'solardata_yearly_sunlight_kwh_n': 'solardata_yearly_sunlight_kwh_n', 'solardata_yearly_sunlight_kwh_s': 'solardata_yearly_sunlight_kwh_s', 'solardata_yearly_sunlight_kwh_e': 'solardata_yearly_sunlight_kwh_e', 'solardata_yearly_sunlight_kwh_w': 'solardata_yearly_sunlight_kwh_w', 'solardata_yearly_sunlight_kwh_f': 'solardata_yearly_sunlight_kwh_f', 'solardata_yearly_sunlight_kwh_median': 'solardata_yearly_sunlight_kwh_median', 'solardata_yearly_sunlight_kwh_total': 'solardata_yearly_sunlight_kwh_total', 'solardata_install_size_kw_buckets_json': 'solardata_install_size_kw_buckets_json', 'solardata_carbon_offset_metric_tons': 'solardata_carbon_offset_metric_tons', 'solardata_existing_installs_count': 'solardata_existing_installs_count', });
lyr_CityBoundaries_2.set('fieldAliases', {'GISJOIN': 'GISJOIN', 'STATEFP': 'STATEFP', 'PLACEFP': 'PLACEFP', 'PLACENS': 'PLACENS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'PCICBSA': 'PCICBSA', 'PCINECTA': 'PCINECTA', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PercentofBuildingsSuitableforSolar_1.set('fieldImages', {'GISJOIN': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'carbon off': 'Range', 'Qualified': 'Range', 'pct_qual': 'Range', 'solardata_region_name': 'TextEdit', 'solardata_state_name': 'TextEdit', 'solardata_lat_max': 'TextEdit', 'solardata_lat_min': 'TextEdit', 'solardata_lng_max': 'TextEdit', 'solardata_lng_min': 'TextEdit', 'solardata_lat_avg': 'TextEdit', 'solardata_lng_avg': 'TextEdit', 'solardata_yearly_sunlight_kwh_kw_threshold_avg': 'TextEdit', 'solardata_count_qualified': 'TextEdit', 'solardata_percent_covered': 'TextEdit', 'solardata_percent_qualified': 'TextEdit', 'solardata_number_of_panels_n': 'TextEdit', 'solardata_number_of_panels_s': 'TextEdit', 'solardata_number_of_panels_e': 'TextEdit', 'solardata_number_of_panels_w': 'TextEdit', 'solardata_number_of_panels_f': 'TextEdit', 'solardata_number_of_panels_median': 'TextEdit', 'solardata_number_of_panels_total': 'TextEdit', 'solardata_kw_median': 'TextEdit', 'solardata_kw_total': 'TextEdit', 'solardata_yearly_sunlight_kwh_n': 'TextEdit', 'solardata_yearly_sunlight_kwh_s': 'TextEdit', 'solardata_yearly_sunlight_kwh_e': 'TextEdit', 'solardata_yearly_sunlight_kwh_w': 'TextEdit', 'solardata_yearly_sunlight_kwh_f': 'TextEdit', 'solardata_yearly_sunlight_kwh_median': 'TextEdit', 'solardata_yearly_sunlight_kwh_total': 'TextEdit', 'solardata_install_size_kw_buckets_json': 'TextEdit', 'solardata_carbon_offset_metric_tons': 'TextEdit', 'solardata_existing_installs_count': 'TextEdit', });
lyr_CityBoundaries_2.set('fieldImages', {'GISJOIN': 'TextEdit', 'STATEFP': 'TextEdit', 'PLACEFP': 'TextEdit', 'PLACENS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'PCICBSA': 'TextEdit', 'PCINECTA': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PercentofBuildingsSuitableforSolar_1.set('fieldLabels', {'GISJOIN': 'no label', 'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'carbon off': 'no label', 'Qualified': 'no label', 'pct_qual': 'no label', 'solardata_region_name': 'no label', 'solardata_state_name': 'no label', 'solardata_lat_max': 'no label', 'solardata_lat_min': 'no label', 'solardata_lng_max': 'no label', 'solardata_lng_min': 'no label', 'solardata_lat_avg': 'no label', 'solardata_lng_avg': 'no label', 'solardata_yearly_sunlight_kwh_kw_threshold_avg': 'no label', 'solardata_count_qualified': 'no label', 'solardata_percent_covered': 'no label', 'solardata_percent_qualified': 'no label', 'solardata_number_of_panels_n': 'no label', 'solardata_number_of_panels_s': 'no label', 'solardata_number_of_panels_e': 'no label', 'solardata_number_of_panels_w': 'no label', 'solardata_number_of_panels_f': 'no label', 'solardata_number_of_panels_median': 'no label', 'solardata_number_of_panels_total': 'no label', 'solardata_kw_median': 'no label', 'solardata_kw_total': 'no label', 'solardata_yearly_sunlight_kwh_n': 'no label', 'solardata_yearly_sunlight_kwh_s': 'no label', 'solardata_yearly_sunlight_kwh_e': 'no label', 'solardata_yearly_sunlight_kwh_w': 'no label', 'solardata_yearly_sunlight_kwh_f': 'no label', 'solardata_yearly_sunlight_kwh_median': 'no label', 'solardata_yearly_sunlight_kwh_total': 'no label', 'solardata_install_size_kw_buckets_json': 'no label', 'solardata_carbon_offset_metric_tons': 'no label', 'solardata_existing_installs_count': 'no label', });
lyr_CityBoundaries_2.set('fieldLabels', {'GISJOIN': 'no label', 'STATEFP': 'no label', 'PLACEFP': 'no label', 'PLACENS': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'PCICBSA': 'no label', 'PCINECTA': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_CityBoundaries_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});