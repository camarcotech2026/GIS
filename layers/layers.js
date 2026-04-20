var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LimitesProvincias_1 = new ol.format.GeoJSON();
var features_LimitesProvincias_1 = format_LimitesProvincias_1.readFeatures(json_LimitesProvincias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesProvincias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesProvincias_1.addFeatures(features_LimitesProvincias_1);
var lyr_LimitesProvincias_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesProvincias_1, 
                style: style_LimitesProvincias_1,
                popuplayertitle: "Limites Provincias",
                interactive: true,
                title: '<img src="styles/legend/LimitesProvincias_1.png" /> Limites Provincias'
            });
var format_ConstruccionesIndustriales_2 = new ol.format.GeoJSON();
var features_ConstruccionesIndustriales_2 = format_ConstruccionesIndustriales_2.readFeatures(json_ConstruccionesIndustriales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConstruccionesIndustriales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConstruccionesIndustriales_2.addFeatures(features_ConstruccionesIndustriales_2);
var lyr_ConstruccionesIndustriales_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConstruccionesIndustriales_2, 
                style: style_ConstruccionesIndustriales_2,
                popuplayertitle: "Construcciones Industriales",
                interactive: true,
                title: '<img src="styles/legend/ConstruccionesIndustriales_2.png" /> Construcciones Industriales'
            });
var format_Minera_3 = new ol.format.GeoJSON();
var features_Minera_3 = format_Minera_3.readFeatures(json_Minera_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Minera_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Minera_3.addFeatures(features_Minera_3);
var lyr_Minera_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Minera_3, 
                style: style_Minera_3,
                popuplayertitle: "Minería",
                interactive: true,
                title: '<img src="styles/legend/Minera_3.png" /> Minería'
            });
var format_Turismo_4 = new ol.format.GeoJSON();
var features_Turismo_4 = format_Turismo_4.readFeatures(json_Turismo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Turismo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Turismo_4.addFeatures(features_Turismo_4);
var lyr_Turismo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Turismo_4, 
                style: style_Turismo_4,
                popuplayertitle: "Turismo",
                interactive: true,
                title: '<img src="styles/legend/Turismo_4.png" /> Turismo'
            });
var format_Punto_ET_Puerto_Madryn_no_label_5 = new ol.format.GeoJSON();
var features_Punto_ET_Puerto_Madryn_no_label_5 = format_Punto_ET_Puerto_Madryn_no_label_5.readFeatures(json_Punto_ET_Puerto_Madryn_no_label_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punto_ET_Puerto_Madryn_no_label_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punto_ET_Puerto_Madryn_no_label_5.addFeatures(features_Punto_ET_Puerto_Madryn_no_label_5);
var lyr_Punto_ET_Puerto_Madryn_no_label_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Punto_ET_Puerto_Madryn_no_label_5,
maxResolution:4200.6699228392945,
 minResolution:47.60759245884533,

                style: style_Punto_ET_Puerto_Madryn_no_label_5,
                popuplayertitle: "Punto_ET_ Puerto_Madryn_no_label",
                interactive: true,
                title: '<img src="styles/legend/Punto_ET_Puerto_Madryn_no_label_5.png" /> Punto_ET_ Puerto_Madryn_no_label'
            });
var format_Punto_ET_CH_CH_no_label_6 = new ol.format.GeoJSON();
var features_Punto_ET_CH_CH_no_label_6 = format_Punto_ET_CH_CH_no_label_6.readFeatures(json_Punto_ET_CH_CH_no_label_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punto_ET_CH_CH_no_label_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punto_ET_CH_CH_no_label_6.addFeatures(features_Punto_ET_CH_CH_no_label_6);
var lyr_Punto_ET_CH_CH_no_label_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Punto_ET_CH_CH_no_label_6,
maxResolution:4200.6699228392945,
 minResolution:47.60759245884533,

                style: style_Punto_ET_CH_CH_no_label_6,
                popuplayertitle: "Punto_ET_ CH_CH_no_label",
                interactive: true,
                title: '<img src="styles/legend/Punto_ET_CH_CH_no_label_6.png" /> Punto_ET_ CH_CH_no_label'
            });
var format_LMTETChoeleChoelETPuertoMadryn_7 = new ol.format.GeoJSON();
var features_LMTETChoeleChoelETPuertoMadryn_7 = format_LMTETChoeleChoelETPuertoMadryn_7.readFeatures(json_LMTETChoeleChoelETPuertoMadryn_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LMTETChoeleChoelETPuertoMadryn_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LMTETChoeleChoelETPuertoMadryn_7.addFeatures(features_LMTETChoeleChoelETPuertoMadryn_7);
var lyr_LMTETChoeleChoelETPuertoMadryn_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LMTETChoeleChoelETPuertoMadryn_7, 
                style: style_LMTETChoeleChoelETPuertoMadryn_7,
                popuplayertitle: "LMT - ET Choele-Choel - ET Puerto Madryn",
                interactive: true,
                title: '<img src="styles/legend/LMTETChoeleChoelETPuertoMadryn_7.png" /> LMT - ET Choele-Choel - ET Puerto Madryn'
            });
var format_LEAT_ETPLOMERVIVORATA_va_8 = new ol.format.GeoJSON();
var features_LEAT_ETPLOMERVIVORATA_va_8 = format_LEAT_ETPLOMERVIVORATA_va_8.readFeatures(json_LEAT_ETPLOMERVIVORATA_va_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LEAT_ETPLOMERVIVORATA_va_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEAT_ETPLOMERVIVORATA_va_8.addFeatures(features_LEAT_ETPLOMERVIVORATA_va_8);
var lyr_LEAT_ETPLOMERVIVORATA_va_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEAT_ETPLOMERVIVORATA_va_8, 
                style: style_LEAT_ETPLOMERVIVORATA_va_8,
                popuplayertitle: "LEAT_ETPLOMER VIVORATA_va",
                interactive: true,
                title: '<img src="styles/legend/LEAT_ETPLOMERVIVORATA_va_8.png" /> LEAT_ETPLOMER VIVORATA_va'
            });
var format_Punto_ET_Vivorata_no_label_9 = new ol.format.GeoJSON();
var features_Punto_ET_Vivorata_no_label_9 = format_Punto_ET_Vivorata_no_label_9.readFeatures(json_Punto_ET_Vivorata_no_label_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punto_ET_Vivorata_no_label_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punto_ET_Vivorata_no_label_9.addFeatures(features_Punto_ET_Vivorata_no_label_9);
var lyr_Punto_ET_Vivorata_no_label_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Punto_ET_Vivorata_no_label_9,
maxResolution:4200.6699228392945,
 minResolution:47.60759245884533,

                style: style_Punto_ET_Vivorata_no_label_9,
                popuplayertitle: "Punto_ET_Vivorata_no_label",
                interactive: true,
                title: '<img src="styles/legend/Punto_ET_Vivorata_no_label_9.png" /> Punto_ET_Vivorata_no_label'
            });
var format_Punto_ET_Plomer_no_label_10 = new ol.format.GeoJSON();
var features_Punto_ET_Plomer_no_label_10 = format_Punto_ET_Plomer_no_label_10.readFeatures(json_Punto_ET_Plomer_no_label_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punto_ET_Plomer_no_label_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punto_ET_Plomer_no_label_10.addFeatures(features_Punto_ET_Plomer_no_label_10);
var lyr_Punto_ET_Plomer_no_label_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Punto_ET_Plomer_no_label_10,
maxResolution:4200.6699228392945,
 minResolution:47.60759245884533,

                style: style_Punto_ET_Plomer_no_label_10,
                popuplayertitle: "Punto_ET_ Plomer_no_label",
                interactive: true,
                title: '<img src="styles/legend/Punto_ET_Plomer_no_label_10.png" /> Punto_ET_ Plomer_no_label'
            });
var format_VialPasoFrontera_11 = new ol.format.GeoJSON();
var features_VialPasoFrontera_11 = format_VialPasoFrontera_11.readFeatures(json_VialPasoFrontera_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VialPasoFrontera_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VialPasoFrontera_11.addFeatures(features_VialPasoFrontera_11);
var lyr_VialPasoFrontera_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VialPasoFrontera_11, 
                style: style_VialPasoFrontera_11,
                popuplayertitle: "Vial/ Paso Frontera",
                interactive: true,
                title: '<img src="styles/legend/VialPasoFrontera_11.png" /> Vial/ Paso Frontera'
            });
var format_CorredorMineroUspallataLaQuiaca_12 = new ol.format.GeoJSON();
var features_CorredorMineroUspallataLaQuiaca_12 = format_CorredorMineroUspallataLaQuiaca_12.readFeatures(json_CorredorMineroUspallataLaQuiaca_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorMineroUspallataLaQuiaca_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorMineroUspallataLaQuiaca_12.addFeatures(features_CorredorMineroUspallataLaQuiaca_12);
var lyr_CorredorMineroUspallataLaQuiaca_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorMineroUspallataLaQuiaca_12, 
                style: style_CorredorMineroUspallataLaQuiaca_12,
                popuplayertitle: "Corredor Minero Uspallata - La Quiaca",
                interactive: true,
                title: '<img src="styles/legend/CorredorMineroUspallataLaQuiaca_12.png" /> Corredor Minero Uspallata - La Quiaca'
            });
var format_CorredorMinero_13 = new ol.format.GeoJSON();
var features_CorredorMinero_13 = format_CorredorMinero_13.readFeatures(json_CorredorMinero_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorMinero_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorMinero_13.addFeatures(features_CorredorMinero_13);
var lyr_CorredorMinero_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorMinero_13, 
                style: style_CorredorMinero_13,
                popuplayertitle: "Corredor Minero",
                interactive: true,
                title: '<img src="styles/legend/CorredorMinero_13.png" /> Corredor Minero'
            });
var format_FFCCTranspatagnico_14 = new ol.format.GeoJSON();
var features_FFCCTranspatagnico_14 = format_FFCCTranspatagnico_14.readFeatures(json_FFCCTranspatagnico_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FFCCTranspatagnico_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FFCCTranspatagnico_14.addFeatures(features_FFCCTranspatagnico_14);
var lyr_FFCCTranspatagnico_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FFCCTranspatagnico_14, 
                style: style_FFCCTranspatagnico_14,
                popuplayertitle: "FFCC - Transpatagónico",
                interactive: true,
                title: '<img src="styles/legend/FFCCTranspatagnico_14.png" /> FFCC - Transpatagónico'
            });
var format_FFCCLneaUrquizaInterurbano_15 = new ol.format.GeoJSON();
var features_FFCCLneaUrquizaInterurbano_15 = format_FFCCLneaUrquizaInterurbano_15.readFeatures(json_FFCCLneaUrquizaInterurbano_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FFCCLneaUrquizaInterurbano_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FFCCLneaUrquizaInterurbano_15.addFeatures(features_FFCCLneaUrquizaInterurbano_15);
var lyr_FFCCLneaUrquizaInterurbano_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FFCCLneaUrquizaInterurbano_15, 
                style: style_FFCCLneaUrquizaInterurbano_15,
                popuplayertitle: "FFCC - Línea Urquiza - Interurbano",
                interactive: true,
                title: '<img src="styles/legend/FFCCLneaUrquizaInterurbano_15.png" /> FFCC - Línea Urquiza - Interurbano'
            });
var format_FFCCC14C13_16 = new ol.format.GeoJSON();
var features_FFCCC14C13_16 = format_FFCCC14C13_16.readFeatures(json_FFCCC14C13_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FFCCC14C13_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FFCCC14C13_16.addFeatures(features_FFCCC14C13_16);
var lyr_FFCCC14C13_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FFCCC14C13_16, 
                style: style_FFCCC14C13_16,
                popuplayertitle: "FFCC - C14 - C13",
                interactive: true,
                title: '<img src="styles/legend/FFCCC14C13_16.png" /> FFCC - C14 - C13'
            });
var format_FFCCLneaSanMartnInterurbano_17 = new ol.format.GeoJSON();
var features_FFCCLneaSanMartnInterurbano_17 = format_FFCCLneaSanMartnInterurbano_17.readFeatures(json_FFCCLneaSanMartnInterurbano_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FFCCLneaSanMartnInterurbano_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FFCCLneaSanMartnInterurbano_17.addFeatures(features_FFCCLneaSanMartnInterurbano_17);
var lyr_FFCCLneaSanMartnInterurbano_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FFCCLneaSanMartnInterurbano_17, 
                style: style_FFCCLneaSanMartnInterurbano_17,
                popuplayertitle: "FFCC - Línea San Martín - Interurbano",
                interactive: true,
                title: '<img src="styles/legend/FFCCLneaSanMartnInterurbano_17.png" /> FFCC - Línea San Martín - Interurbano'
            });
var format_Puertos_18 = new ol.format.GeoJSON();
var features_Puertos_18 = format_Puertos_18.readFeatures(json_Puertos_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puertos_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puertos_18.addFeatures(features_Puertos_18);
var lyr_Puertos_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puertos_18, 
                style: style_Puertos_18,
                popuplayertitle: "Puertos",
                interactive: true,
                title: '<img src="styles/legend/Puertos_18.png" /> Puertos'
            });
var format_RutaSegura_19 = new ol.format.GeoJSON();
var features_RutaSegura_19 = format_RutaSegura_19.readFeatures(json_RutaSegura_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RutaSegura_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RutaSegura_19.addFeatures(features_RutaSegura_19);
var lyr_RutaSegura_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RutaSegura_19, 
                style: style_RutaSegura_19,
                popuplayertitle: "Ruta Segura",
                interactive: true,
                title: '<img src="styles/legend/RutaSegura_19.png" /> Ruta Segura'
            });
var format_RN181a_20 = new ol.format.GeoJSON();
var features_RN181a_20 = format_RN181a_20.readFeatures(json_RN181a_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RN181a_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RN181a_20.addFeatures(features_RN181a_20);
var lyr_RN181a_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RN181a_20, 
                style: style_RN181a_20,
                popuplayertitle: "RN 181a",
                interactive: true,
                title: '<img src="styles/legend/RN181a_20.png" /> RN 181a'
            });
var format_RN181b_21 = new ol.format.GeoJSON();
var features_RN181b_21 = format_RN181b_21.readFeatures(json_RN181b_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RN181b_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RN181b_21.addFeatures(features_RN181b_21);
var lyr_RN181b_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RN181b_21, 
                style: style_RN181b_21,
                popuplayertitle: "RN 181b",
                interactive: true,
                title: '<img src="styles/legend/RN181b_21.png" /> RN 181b'
            });
var format_Crema_22 = new ol.format.GeoJSON();
var features_Crema_22 = format_Crema_22.readFeatures(json_Crema_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crema_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crema_22.addFeatures(features_Crema_22);
var lyr_Crema_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Crema_22, 
                style: style_Crema_22,
                popuplayertitle: "Crema",
                interactive: true,
                title: '<img src="styles/legend/Crema_22.png" /> Crema'
            });
var format_AutopistaAutovia_23 = new ol.format.GeoJSON();
var features_AutopistaAutovia_23 = format_AutopistaAutovia_23.readFeatures(json_AutopistaAutovia_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AutopistaAutovia_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AutopistaAutovia_23.addFeatures(features_AutopistaAutovia_23);
var lyr_AutopistaAutovia_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AutopistaAutovia_23, 
                style: style_AutopistaAutovia_23,
                popuplayertitle: "Autopista-Autovia",
                interactive: true,
                title: '<img src="styles/legend/AutopistaAutovia_23.png" /> Autopista-Autovia'
            });
var format_Pavimentacin2carriles_24 = new ol.format.GeoJSON();
var features_Pavimentacin2carriles_24 = format_Pavimentacin2carriles_24.readFeatures(json_Pavimentacin2carriles_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pavimentacin2carriles_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pavimentacin2carriles_24.addFeatures(features_Pavimentacin2carriles_24);
var lyr_Pavimentacin2carriles_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pavimentacin2carriles_24, 
                style: style_Pavimentacin2carriles_24,
                popuplayertitle: "Pavimentación 2 carriles",
                interactive: true,
                title: '<img src="styles/legend/Pavimentacin2carriles_24.png" /> Pavimentación 2 carriles'
            });
var format_AguaySaneamiento_25 = new ol.format.GeoJSON();
var features_AguaySaneamiento_25 = format_AguaySaneamiento_25.readFeatures(json_AguaySaneamiento_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AguaySaneamiento_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AguaySaneamiento_25.addFeatures(features_AguaySaneamiento_25);
var lyr_AguaySaneamiento_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AguaySaneamiento_25, 
                style: style_AguaySaneamiento_25,
                popuplayertitle: "Agua y Saneamiento",
                interactive: true,
                title: '<img src="styles/legend/AguaySaneamiento_25.png" /> Agua y Saneamiento'
            });
var format_MitigacindeExtremosHdricos_26 = new ol.format.GeoJSON();
var features_MitigacindeExtremosHdricos_26 = format_MitigacindeExtremosHdricos_26.readFeatures(json_MitigacindeExtremosHdricos_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MitigacindeExtremosHdricos_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MitigacindeExtremosHdricos_26.addFeatures(features_MitigacindeExtremosHdricos_26);
var lyr_MitigacindeExtremosHdricos_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MitigacindeExtremosHdricos_26, 
                style: style_MitigacindeExtremosHdricos_26,
                popuplayertitle: "Mitigación de Extremos Hídricos",
                interactive: true,
                title: '<img src="styles/legend/MitigacindeExtremosHdricos_26.png" /> Mitigación de Extremos Hídricos'
            });
var format_AguaySaneamiento_27 = new ol.format.GeoJSON();
var features_AguaySaneamiento_27 = format_AguaySaneamiento_27.readFeatures(json_AguaySaneamiento_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AguaySaneamiento_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AguaySaneamiento_27.addFeatures(features_AguaySaneamiento_27);
var lyr_AguaySaneamiento_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AguaySaneamiento_27, 
                style: style_AguaySaneamiento_27,
                popuplayertitle: "Agua y Saneamiento",
                interactive: true,
                title: '<img src="styles/legend/AguaySaneamiento_27.png" /> Agua y Saneamiento'
            });
var format_AguaySaneamiento_28 = new ol.format.GeoJSON();
var features_AguaySaneamiento_28 = format_AguaySaneamiento_28.readFeatures(json_AguaySaneamiento_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AguaySaneamiento_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AguaySaneamiento_28.addFeatures(features_AguaySaneamiento_28);
var lyr_AguaySaneamiento_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AguaySaneamiento_28, 
                style: style_AguaySaneamiento_28,
                popuplayertitle: "Agua y Saneamiento",
                interactive: true,
                title: '<img src="styles/legend/AguaySaneamiento_28.png" /> Agua y Saneamiento'
            });
var format_Seguridad_29 = new ol.format.GeoJSON();
var features_Seguridad_29 = format_Seguridad_29.readFeatures(json_Seguridad_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seguridad_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seguridad_29.addFeatures(features_Seguridad_29);
var lyr_Seguridad_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Seguridad_29, 
                style: style_Seguridad_29,
                popuplayertitle: "Seguridad",
                interactive: true,
                title: '<img src="styles/legend/Seguridad_29.png" /> Seguridad'
            });
var format_DesarrolloUrbanoAmbiental_30 = new ol.format.GeoJSON();
var features_DesarrolloUrbanoAmbiental_30 = format_DesarrolloUrbanoAmbiental_30.readFeatures(json_DesarrolloUrbanoAmbiental_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesarrolloUrbanoAmbiental_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesarrolloUrbanoAmbiental_30.addFeatures(features_DesarrolloUrbanoAmbiental_30);
var lyr_DesarrolloUrbanoAmbiental_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesarrolloUrbanoAmbiental_30, 
                style: style_DesarrolloUrbanoAmbiental_30,
                popuplayertitle: "Desarrollo Urbano Ambiental",
                interactive: true,
                title: '<img src="styles/legend/DesarrolloUrbanoAmbiental_30.png" /> Desarrollo Urbano Ambiental'
            });
var format_Infraestructuraescolar_31 = new ol.format.GeoJSON();
var features_Infraestructuraescolar_31 = format_Infraestructuraescolar_31.readFeatures(json_Infraestructuraescolar_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infraestructuraescolar_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infraestructuraescolar_31.addFeatures(features_Infraestructuraescolar_31);
var lyr_Infraestructuraescolar_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infraestructuraescolar_31, 
                style: style_Infraestructuraescolar_31,
                popuplayertitle: "Infraestructura escolar",
                interactive: true,
                title: '<img src="styles/legend/Infraestructuraescolar_31.png" /> Infraestructura escolar'
            });
var format_Salud_32 = new ol.format.GeoJSON();
var features_Salud_32 = format_Salud_32.readFeatures(json_Salud_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Salud_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Salud_32.addFeatures(features_Salud_32);
var lyr_Salud_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Salud_32, 
                style: style_Salud_32,
                popuplayertitle: "Salud",
                interactive: true,
                title: '<img src="styles/legend/Salud_32.png" /> Salud'
            });
var group_InfraestructuraSocial = new ol.layer.Group({
                                layers: [lyr_Seguridad_29,lyr_DesarrolloUrbanoAmbiental_30,lyr_Infraestructuraescolar_31,lyr_Salud_32,],
                                fold: "open",
                                title: "Infraestructura Social"});
var group_RecursosHdricos = new ol.layer.Group({
                                layers: [lyr_AguaySaneamiento_25,lyr_MitigacindeExtremosHdricos_26,lyr_AguaySaneamiento_27,lyr_AguaySaneamiento_28,],
                                fold: "open",
                                title: "Recursos Hídricos"});
var group_ResiduosSlidosUrbanosRSU = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Residuos Sólidos Urbanos (RSU)"});
var group_Vial = new ol.layer.Group({
                                layers: [lyr_RutaSegura_19,lyr_RN181a_20,lyr_RN181b_21,lyr_Crema_22,lyr_AutopistaAutovia_23,lyr_Pavimentacin2carriles_24,],
                                fold: "open",
                                title: "Vial"});
var group_TransporteyLogstica = new ol.layer.Group({
                                layers: [lyr_Puertos_18,],
                                fold: "open",
                                title: "Transporte y Logística"});
var group_Logstica = new ol.layer.Group({
                                layers: [lyr_VialPasoFrontera_11,lyr_CorredorMineroUspallataLaQuiaca_12,lyr_CorredorMinero_13,lyr_FFCCTranspatagnico_14,lyr_FFCCLneaUrquizaInterurbano_15,lyr_FFCCC14C13_16,lyr_FFCCLneaSanMartnInterurbano_17,],
                                fold: "open",
                                title: "Logística"});
var group_Almacenamiento = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Almacenamiento"});
var group_Riego = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Riego"});
var group_Elctrica = new ol.layer.Group({
                                layers: [lyr_Punto_ET_Puerto_Madryn_no_label_5,lyr_Punto_ET_CH_CH_no_label_6,lyr_LMTETChoeleChoelETPuertoMadryn_7,lyr_LEAT_ETPLOMERVIVORATA_va_8,lyr_Punto_ET_Vivorata_no_label_9,lyr_Punto_ET_Plomer_no_label_10,],
                                fold: "open",
                                title: "Eléctrica"});
var group_InfraestructuraparalaProduccin = new ol.layer.Group({
                                layers: [lyr_ConstruccionesIndustriales_2,lyr_Minera_3,lyr_Turismo_4,],
                                fold: "open",
                                title: "Infraestructura para la Producción"});

lyr_ESRISatellite_0.setVisible(true);lyr_LimitesProvincias_1.setVisible(true);lyr_ConstruccionesIndustriales_2.setVisible(false);lyr_Minera_3.setVisible(false);lyr_Turismo_4.setVisible(true);lyr_Punto_ET_Puerto_Madryn_no_label_5.setVisible(false);lyr_Punto_ET_CH_CH_no_label_6.setVisible(false);lyr_LMTETChoeleChoelETPuertoMadryn_7.setVisible(false);lyr_LEAT_ETPLOMERVIVORATA_va_8.setVisible(true);lyr_Punto_ET_Vivorata_no_label_9.setVisible(false);lyr_Punto_ET_Plomer_no_label_10.setVisible(false);lyr_VialPasoFrontera_11.setVisible(true);lyr_CorredorMineroUspallataLaQuiaca_12.setVisible(true);lyr_CorredorMinero_13.setVisible(true);lyr_FFCCTranspatagnico_14.setVisible(false);lyr_FFCCLneaUrquizaInterurbano_15.setVisible(false);lyr_FFCCC14C13_16.setVisible(false);lyr_FFCCLneaSanMartnInterurbano_17.setVisible(false);lyr_Puertos_18.setVisible(true);lyr_RutaSegura_19.setVisible(true);lyr_RN181a_20.setVisible(true);lyr_RN181b_21.setVisible(true);lyr_Crema_22.setVisible(true);lyr_AutopistaAutovia_23.setVisible(true);lyr_Pavimentacin2carriles_24.setVisible(true);lyr_AguaySaneamiento_25.setVisible(false);lyr_MitigacindeExtremosHdricos_26.setVisible(false);lyr_AguaySaneamiento_27.setVisible(false);lyr_AguaySaneamiento_28.setVisible(false);lyr_Seguridad_29.setVisible(false);lyr_DesarrolloUrbanoAmbiental_30.setVisible(false);lyr_Infraestructuraescolar_31.setVisible(true);lyr_Salud_32.setVisible(false);
var layersList = [lyr_ESRISatellite_0,lyr_LimitesProvincias_1,group_InfraestructuraparalaProduccin,group_Elctrica,group_Logstica,group_TransporteyLogstica,group_Vial,group_RecursosHdricos,group_InfraestructuraSocial];
lyr_LimitesProvincias_1.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', 'layer': 'layer', 'path': 'path', });
lyr_ConstruccionesIndustriales_2.set('fieldAliases', {'UBICACI': 'Ubicación', 'DESCRIPCI�': 'Descripción', 'TIPO DE OB': 'Tipo de Obra', 'MONTO': 'Monto', 'X': 'X', 'Y': 'Y', });
lyr_Minera_3.set('fieldAliases', {'PROYECTO': 'Descripción', 'PROVINCIA': 'Provincia', 'Lat': 'Lat', 'Long': 'Long', 'Etapa_actu': 'Tipo de Obra', 'Elemento_p': 'Elemento', });
lyr_Turismo_4.set('fieldAliases', {'UBICACIÓN': 'Ubicación', 'DESCRIPCI�': 'Descripción', 'TIPO DE OB': 'Tipo de Obra', 'MONTO': 'Monto ($)', 'X': 'X', 'Y': 'Y', 'COORDENADA': 'COORDENADA', });
lyr_Punto_ET_Puerto_Madryn_no_label_5.set('fieldAliases', {'id': 'id', });
lyr_Punto_ET_CH_CH_no_label_6.set('fieldAliases', {'id': 'id', });
lyr_LMTETChoeleChoelETPuertoMadryn_7.set('fieldAliases', {'id': 'id', 'DESCRIPCIO': 'Descripción', 'OBSERVACIO': 'Observaciones', 'LONGITUD': 'Longitud', });
lyr_LEAT_ETPLOMERVIVORATA_va_8.set('fieldAliases', {'id': 'id', 'Descripcio': 'Descripción', 'Observacio': 'Observaciones', 'Etapa N°1': 'Etapa N°1', 'Monto 1': 'Monto Etapa N°1 (USD)', 'Etapa N°2': 'Etapa N°2', 'Monto 2': 'Monto Etapa N°2 (USD)', 'Etapa N°3': 'Etapa N°3', 'Monto 3': 'Monto Etapa N°3 (USD)', 'Etapa N°4': 'Etapa N°4', 'Monto 4': 'Monto Etapa N°4 (USD)', 'Etapa N°5': 'Etapa N°5', 'Monto 5': 'Monto Etapa N°5 (USD)', 'Etapa N°6': 'Etapa N°6', 'Monto 6': 'Monto Etapa N°6 (USD)', 'Etapa N°7': 'Etapa N°7', 'Monto 7': 'Monto Etapa N°7 (USD)', 'Etapa N°8': 'Etapa N°8', 'Monto 8': 'Monto Etapa N°8 (USD)', 'Etapa N°9': 'Etapa N°9', 'Monto 9': 'Monto Etapa N°9 (USD)', 'Etapa N�_1': 'Etapa N°10', 'Long': 'Longitud', 'Monto 10': 'Monto Etapa N°10 (USD)', });
lyr_Punto_ET_Vivorata_no_label_9.set('fieldAliases', {'id': 'id', });
lyr_Punto_ET_Plomer_no_label_10.set('fieldAliases', {'id': 'id', });
lyr_VialPasoFrontera_11.set('fieldAliases', {'rtn': 'Ruta Nacional N°', 'Sector Eco': 'Sector Económico', 'Sector Tra': 'Sector de Transporte', 'Descrip': 'Descripción', 'Tipo de Ob': 'Tipo de Obra', 'Objetivo': ' Objetivos', 'Monto(usd)': 'Monto (USD)', 'layer': 'layer', });
lyr_CorredorMineroUspallataLaQuiaca_12.set('fieldAliases', {'Name': 'Name', 'Sector Eco': 'Sector Económico', 'Sector Tra': 'Sector de Transporte', 'Descripcio': 'Descripción', 'Tipo de Ob': 'Tipo de Obra', 'Objetivos': 'Objetivos', 'Monto(USD)': 'Monto(USD)', });
lyr_CorredorMinero_13.set('fieldAliases', {'NRO': 'NRO', 'NOMBRE': 'Descripción', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'MINERAL PR': 'Elemento', 'PROVINCIA': 'Ubicación', 'ESTADO': 'Estado', 'CONTROLANT': 'CONTROLANT', 'PORCENTAJE': 'PORCENTAJE', 'ORIGEN 1': 'ORIGEN 1', 'CONTROLA_1': 'CONTROLA_1', 'ORIGEN 2': 'ORIGEN 2', 'PORCENTA_1': 'PORCENTA_1', 'CONTROLA_2': 'CONTROLA_2', 'PORCENTA_2': 'PORCENTA_2', 'ORIGEN 3': 'ORIGEN 3', });
lyr_FFCCTranspatagnico_14.set('fieldAliases', {'SectorEco': 'Sector Económico', 'Sector Tra': 'Sector de Transporte', 'Descrip': 'Descripción', 'Tipo de Ob': 'Tipo de Obra', 'Objetivos': 'Objetivos', 'Monto(usd)': 'Monto (USD)', });
lyr_FFCCLneaUrquizaInterurbano_15.set('fieldAliases', {'Sector Tra': 'Sector de Transporte', 'Descripci�': 'Descripción', 'Tipo de Ob': 'Tipo de Obra', 'Monto(usd)': 'Monto (USD)', 'Objetivos': 'Objetivos', 'Sector Eco': 'Sector Económico', });
lyr_FFCCC14C13_16.set('fieldAliases', {'Sector Eco': 'Sector Económico', 'Sector Tra': 'Sector de Transporte', 'Descripcio': 'Descripción', 'Tipo de Ob': 'Tipo de Obra', 'Objetivos': 'Objetivos', 'Monto(usd)': 'Monto (USD)', });
lyr_FFCCLneaSanMartnInterurbano_17.set('fieldAliases', {'Sector Eco': 'Sector Económico', 'Sector Tra': 'Sector de Transporte', 'Descripcio': 'Descripción', 'Tipo de Ob': 'Tipo de Obra', 'Objetivos': 'Objetivos', 'Monto(usd)': 'Monto (USD)', });
lyr_Puertos_18.set('fieldAliases', {'PROVINCIA': 'Ubicación', 'DESCRIPCI�': 'Descripción', 'TIPO DE OB': 'Tipo de Obra', 'MONTO': 'Monto ($)', 'X': 'X', 'Y': 'Y', });
lyr_RutaSegura_19.set('fieldAliases', {'fid': 'fid', 'Nro.': 'Nro.', 'Ruta N°': 'Ruta N°', '__Km inici': '__Km inici', '__Km fin': '__Km fin', '__Long.(km': '__Long.(km', 'Ubicación': 'Ubicación', '__Rubro': '__Rubro', '__Tipo de': '__Tipo de', 'Descripci�': 'Descripción', '__Observac': '__Observac', 'Variante': 'Variante', 'Monto (  )': 'Monto (  )', 'Tramo': 'Tramo', 'Tipo de Ob': 'Tipo de Obra', 'Monto ( _1': 'Monto ($)', });
lyr_RN181a_20.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RN181b_21.set('fieldAliases', {'fid': 'fid', 'Name': 'Ruta N°', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Crema_22.set('fieldAliases', {'fid': 'fid', 'Nro.': 'Nro.', '__Ruta': 'Ruta N°', '__Km inici': '__Km inici', '__Km fin': '__Km fin', '__Long.(km': '__Long.(km', '__Provinci': 'Ubicación', '__Rubro': '__Rubro', '__Tipo de': '__Tipo de', '__Nombre': 'Descripción', '__Observac': '__Observac', '__Variante': '__Variante', '__Monto': '__Monto', 'Tramo': 'Tramo', 'Tipo de Ob': 'Tipo de Obra', '__Monto_1': 'Monto ($)', });
lyr_AutopistaAutovia_23.set('fieldAliases', {'fid': 'fid', 'Nro.': 'Nro.', '__Ruta': 'Ruta N°', '__Km inici': '__Km inici', '__Km fin': '__Km fin', '__Long.(km': '__Long.(km', '__Provinci': 'Ubicación', '__Rubro': '__Rubro', '__Tipo de': 'Tipo de Obra', '__Nombre': 'Descripción', '__Observac': 'Observaciones', '__Variante': 'Variante', '__Monto': 'Monto ($ )', 'layer': 'layer', 'path': 'path', 'Tramo': 'Tramo', 'Monto (': 'Monto (', 'Monto (_1': 'Monto ($)', });
lyr_Pavimentacin2carriles_24.set('fieldAliases', {'fid': 'fid', 'Nro.': 'Nro.', '__Ruta': 'Ruta N°', 'Iniico': 'Iniico', 'Fin': 'Fin', 'Long': 'Long', '__Provinci': 'Ubicación', '__Rubro': '__Rubro', '__Tipo de': 'Tipo de Obra', '__Nombre': 'Descripción', '__Variante': 'Variante', '__Monto': 'Monto (  )', 'layer': 'layer', 'path': 'path', 'Tramo': 'Tramo', 'Monto': 'Monto', });
lyr_AguaySaneamiento_25.set('fieldAliases', {'id': 'id', 'Des': 'Descripción', 'tipo_obra': 'Tipo de Obra', 'plan_agrup': 'plan_agrup', 'sector': 'Sector', 'agrupamien': 'agrupamien', 'area_susta': 'area_susta', 'estado': 'Estado', 'monto_tota': 'Monto', 'avance_fin': 'Avance Fin', 'avance_fis': 'Avance Fis', 'fecha_inic': 'fecha_inic', 'fecha_fin': 'fecha_fin', 'nombre_pla': 'nombre_pla', 'organismo_': 'organismo_', 'Objeto': 'Objeto', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'Ubicación', 'SAG': 'SAG', });
lyr_MitigacindeExtremosHdricos_26.set('fieldAliases', {'Name': 'Tipo de Obra', 'descriptio': 'Descripción', });
lyr_AguaySaneamiento_27.set('fieldAliases', {'fiid': 'fiid', 'nombre_obr': 'Descripción', 'tipo_obra': 'Tipo de Obra', 'plan_agrup': 'plan_agrup', 'sector': 'Sector', 'agrupamien': 'agrupamien', 'area_susta': 'area_susta', 'estado': 'Estado', 'monto_tota': 'Monto', 'avance_fin': 'Avance Fin', 'avance_fis': 'Avance Fis', 'fecha_inic': 'fecha_inic', 'fecha_fin': 'fecha_fin', 'nombre_pla': 'nombre_pla', 'organismo_': 'organismo_', 'NAM': 'Ubicación', });
lyr_AguaySaneamiento_28.set('fieldAliases', {'Id': 'Id', 'Descripci?': 'Descripción', 'Tipo de Ob': 'Tipo de Obra', 'Plan': 'Plan', 'Sector': 'Sector', 'Agrupamien': 'Agrupamiento', 'area_susta': 'area_susta', 'Estado': 'Estado', 'Monto ($)': 'Monto ($)', 'Avance fin': 'Avance Fin', 'Avance fis': 'Avance Fis', 'fecha_inic': 'fecha_inic', 'fecha_fin': 'fecha_fin', 'nombre_pla': 'nombre_pla', 'organismo_': 'organismo_', 'Ubicación': 'Ubicación', });
lyr_Seguridad_29.set('fieldAliases', {'PROVINCIA': 'Provincia', 'UBICACIÓN': 'Ubicación', 'DESCRIPCI�': 'Descripción', 'MONTO ($)': 'Monto ($)', 'X': 'X', 'Y': 'Y', });
lyr_DesarrolloUrbanoAmbiental_30.set('fieldAliases', {'REGION': 'Región', 'PROVINCIA': 'Provincia', 'UBICACION': 'Ubicación', 'PROYECTO': 'PROYECTO', 'DESCRIPCIO': 'DESCRIPCIO', 'ESTADO': 'Estado', 'MONTO': 'Monto ($)', 'FUENTE': 'FUENTE', 'X': 'X', 'Y': 'Y', });
lyr_Infraestructuraescolar_31.set('fieldAliases', {'PROVINCIA': 'Ubicación', 'Infraestru': 'Infraestructura edilicia para nivel Inicial', 'Infraest_1': 'Infraestructura edilicia para nivel Primario', 'Infraest_2': 'Infraestructura edilicia para nivel Secundario', 'Infraest_3': 'Infraestructura edilicia para 10 años (Mantenimiento)', 'x': 'x', 'y': 'y', 'FUENTE': 'FUENTE', });
lyr_Salud_32.set('fieldAliases', {'UBICACIÓN': 'Ubicación', 'DESCRIPCI�': 'Descripción', 'TIPO DE OB': 'Tipo de Obra', 'MONTO': 'Monto', 'FUENTE': 'FUENTE', 'NOTAS': 'NOTAS', 'X': 'X', 'Y': 'Y', 'Monto_1': 'Monto', });
lyr_LimitesProvincias_1.set('fieldImages', {'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ConstruccionesIndustriales_2.set('fieldImages', {'UBICACI': 'TextEdit', 'DESCRIPCI�': 'TextEdit', 'TIPO DE OB': 'TextEdit', 'MONTO': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', });
lyr_Minera_3.set('fieldImages', {'PROYECTO': 'TextEdit', 'PROVINCIA': 'TextEdit', 'Lat': 'Hidden', 'Long': 'Hidden', 'Etapa_actu': 'TextEdit', 'Elemento_p': 'TextEdit', });
lyr_Turismo_4.set('fieldImages', {'UBICACIÓN': 'TextEdit', 'DESCRIPCI�': 'TextEdit', 'TIPO DE OB': 'TextEdit', 'MONTO': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', 'COORDENADA': 'Hidden', });
lyr_Punto_ET_Puerto_Madryn_no_label_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Punto_ET_CH_CH_no_label_6.set('fieldImages', {'id': 'TextEdit', });
lyr_LMTETChoeleChoelETPuertoMadryn_7.set('fieldImages', {'id': 'Hidden', 'DESCRIPCIO': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_LEAT_ETPLOMERVIVORATA_va_8.set('fieldImages', {'id': 'Hidden', 'Descripcio': 'TextEdit', 'Observacio': 'Hidden', 'Etapa N°1': 'TextEdit', 'Monto 1': 'TextEdit', 'Etapa N°2': 'TextEdit', 'Monto 2': 'TextEdit', 'Etapa N°3': 'TextEdit', 'Monto 3': 'TextEdit', 'Etapa N°4': 'TextEdit', 'Monto 4': 'TextEdit', 'Etapa N°5': 'TextEdit', 'Monto 5': 'TextEdit', 'Etapa N°6': 'TextEdit', 'Monto 6': 'TextEdit', 'Etapa N°7': 'TextEdit', 'Monto 7': 'TextEdit', 'Etapa N°8': 'TextEdit', 'Monto 8': 'TextEdit', 'Etapa N°9': 'TextEdit', 'Monto 9': 'TextEdit', 'Etapa N�_1': 'TextEdit', 'Long': 'Hidden', 'Monto 10': 'TextEdit', });
lyr_Punto_ET_Vivorata_no_label_9.set('fieldImages', {'id': 'TextEdit', });
lyr_Punto_ET_Plomer_no_label_10.set('fieldImages', {'id': 'TextEdit', });
lyr_VialPasoFrontera_11.set('fieldImages', {'rtn': 'TextEdit', 'Sector Eco': 'TextEdit', 'Sector Tra': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo de Ob': 'TextEdit', 'Objetivo': 'TextEdit', 'Monto(usd)': 'TextEdit', 'layer': 'Hidden', });
lyr_CorredorMineroUspallataLaQuiaca_12.set('fieldImages', {'Name': 'Hidden', 'Sector Eco': 'TextEdit', 'Sector Tra': 'TextEdit', 'Descripcio': 'TextEdit', 'Tipo de Ob': 'TextEdit', 'Objetivos': 'TextEdit', 'Monto(USD)': 'TextEdit', });
lyr_CorredorMinero_13.set('fieldImages', {'NRO': 'Hidden', 'NOMBRE': 'TextEdit', 'LATITUD': 'Hidden', 'LONGITUD': 'Hidden', 'MINERAL PR': 'TextEdit', 'PROVINCIA': 'TextEdit', 'ESTADO': 'TextEdit', 'CONTROLANT': 'Hidden', 'PORCENTAJE': 'Hidden', 'ORIGEN 1': 'Hidden', 'CONTROLA_1': 'Hidden', 'ORIGEN 2': 'Hidden', 'PORCENTA_1': 'Hidden', 'CONTROLA_2': 'Hidden', 'PORCENTA_2': 'Hidden', 'ORIGEN 3': 'Hidden', });
lyr_FFCCTranspatagnico_14.set('fieldImages', {'SectorEco': 'TextEdit', 'Sector Tra': 'TextEdit', 'Descrip': 'TextEdit', 'Tipo de Ob': 'TextEdit', 'Objetivos': 'TextEdit', 'Monto(usd)': 'TextEdit', });
lyr_FFCCLneaUrquizaInterurbano_15.set('fieldImages', {'Sector Tra': 'TextEdit', 'Descripci�': 'TextEdit', 'Tipo de Ob': 'TextEdit', 'Monto(usd)': 'TextEdit', 'Objetivos': 'TextEdit', 'Sector Eco': 'TextEdit', });
lyr_FFCCC14C13_16.set('fieldImages', {'Sector Eco': 'TextEdit', 'Sector Tra': 'TextEdit', 'Descripcio': 'TextEdit', 'Tipo de Ob': 'TextEdit', 'Objetivos': 'TextEdit', 'Monto(usd)': 'TextEdit', });
lyr_FFCCLneaSanMartnInterurbano_17.set('fieldImages', {'Sector Eco': 'TextEdit', 'Sector Tra': 'TextEdit', 'Descripcio': 'TextEdit', 'Tipo de Ob': 'TextEdit', 'Objetivos': 'TextEdit', 'Monto(usd)': 'TextEdit', });
lyr_Puertos_18.set('fieldImages', {'PROVINCIA': 'TextEdit', 'DESCRIPCI�': 'TextEdit', 'TIPO DE OB': 'TextEdit', 'MONTO': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', });
lyr_RutaSegura_19.set('fieldImages', {'fid': 'Hidden', 'Nro.': 'TextEdit', 'Ruta N°': 'TextEdit', '__Km inici': 'Hidden', '__Km fin': 'Hidden', '__Long.(km': 'Hidden', 'Ubicación': 'TextEdit', '__Rubro': 'TextEdit', '__Tipo de': 'Hidden', 'Descripci�': 'TextEdit', '__Observac': 'Hidden', 'Variante': 'Hidden', 'Monto (  )': 'Hidden', 'Tramo': 'TextEdit', 'Tipo de Ob': 'TextEdit', 'Monto ( _1': 'TextEdit', });
lyr_RN181a_20.set('fieldImages', {'fid': 'Hidden', 'Name': 'Hidden', 'descriptio': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_RN181b_21.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'descriptio': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Crema_22.set('fieldImages', {'fid': 'Hidden', 'Nro.': 'Hidden', '__Ruta': 'TextEdit', '__Km inici': 'Hidden', '__Km fin': 'Hidden', '__Long.(km': 'Hidden', '__Provinci': 'TextEdit', '__Rubro': 'Hidden', '__Tipo de': 'Hidden', '__Nombre': 'TextEdit', '__Observac': 'Hidden', '__Variante': 'Hidden', '__Monto': 'Hidden', 'Tramo': 'TextEdit', 'Tipo de Ob': 'TextEdit', '__Monto_1': 'TextEdit', });
lyr_AutopistaAutovia_23.set('fieldImages', {'fid': 'Hidden', 'Nro.': 'Hidden', '__Ruta': 'TextEdit', '__Km inici': 'Hidden', '__Km fin': 'Hidden', '__Long.(km': 'Hidden', '__Provinci': 'TextEdit', '__Rubro': 'Hidden', '__Tipo de': 'TextEdit', '__Nombre': 'TextEdit', '__Observac': 'TextEdit', '__Variante': 'TextEdit', '__Monto': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', 'Tramo': 'TextEdit', 'Monto (': 'Hidden', 'Monto (_1': 'TextEdit', });
lyr_Pavimentacin2carriles_24.set('fieldImages', {'fid': 'Hidden', 'Nro.': 'Hidden', '__Ruta': 'TextEdit', 'Iniico': 'Hidden', 'Fin': 'Hidden', 'Long': 'Hidden', '__Provinci': 'TextEdit', '__Rubro': 'Hidden', '__Tipo de': 'TextEdit', '__Nombre': 'TextEdit', '__Variante': 'TextEdit', '__Monto': 'TextEdit', 'layer': 'Hidden', 'path': 'Hidden', 'Tramo': 'TextEdit', 'Monto': 'TextEdit', });
lyr_AguaySaneamiento_25.set('fieldImages', {'id': 'Hidden', 'Des': 'TextEdit', 'tipo_obra': 'TextEdit', 'plan_agrup': 'Hidden', 'sector': 'TextEdit', 'agrupamien': 'Hidden', 'area_susta': 'Hidden', 'estado': 'TextEdit', 'monto_tota': 'TextEdit', 'avance_fin': 'TextEdit', 'avance_fis': 'TextEdit', 'fecha_inic': 'Hidden', 'fecha_fin': 'Hidden', 'nombre_pla': 'Hidden', 'organismo_': 'Hidden', 'Objeto': 'Hidden', 'FNA': 'Hidden', 'GNA': 'Hidden', 'NAM': 'TextEdit', 'SAG': 'Hidden', });
lyr_MitigacindeExtremosHdricos_26.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_AguaySaneamiento_27.set('fieldImages', {'fiid': 'TextEdit', 'nombre_obr': 'TextEdit', 'tipo_obra': 'TextEdit', 'plan_agrup': 'Hidden', 'sector': 'TextEdit', 'agrupamien': 'Hidden', 'area_susta': 'Hidden', 'estado': 'TextEdit', 'monto_tota': 'TextEdit', 'avance_fin': 'TextEdit', 'avance_fis': 'TextEdit', 'fecha_inic': 'Hidden', 'fecha_fin': 'Hidden', 'nombre_pla': 'Hidden', 'organismo_': 'Hidden', 'NAM': 'TextEdit', });
lyr_AguaySaneamiento_28.set('fieldImages', {'Id': 'Hidden', 'Descripci?': 'TextEdit', 'Tipo de Ob': 'TextEdit', 'Plan': 'Hidden', 'Sector': 'Hidden', 'Agrupamien': 'Hidden', 'area_susta': 'Hidden', 'Estado': 'TextEdit', 'Monto ($)': 'TextEdit', 'Avance fin': 'TextEdit', 'Avance fis': 'TextEdit', 'fecha_inic': 'Hidden', 'fecha_fin': 'Hidden', 'nombre_pla': 'Hidden', 'organismo_': 'Hidden', 'Ubicación': 'TextEdit', });
lyr_Seguridad_29.set('fieldImages', {'PROVINCIA': 'TextEdit', 'UBICACIÓN': 'TextEdit', 'DESCRIPCI�': 'TextEdit', 'MONTO ($)': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', });
lyr_DesarrolloUrbanoAmbiental_30.set('fieldImages', {'REGION': 'Hidden', 'PROVINCIA': 'TextEdit', 'UBICACION': 'TextEdit', 'PROYECTO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'ESTADO': 'TextEdit', 'MONTO': 'TextEdit', 'FUENTE': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', });
lyr_Infraestructuraescolar_31.set('fieldImages', {'PROVINCIA': 'TextEdit', 'Infraestru': 'TextEdit', 'Infraest_1': 'TextEdit', 'Infraest_2': 'TextEdit', 'Infraest_3': 'TextEdit', 'x': 'Hidden', 'y': 'Hidden', 'FUENTE': 'Hidden', });
lyr_Salud_32.set('fieldImages', {'UBICACIÓN': 'TextEdit', 'DESCRIPCI�': 'TextEdit', 'TIPO DE OB': 'TextEdit', 'MONTO': 'Hidden', 'FUENTE': 'Hidden', 'NOTAS': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'Monto_1': 'TextEdit', });
lyr_LimitesProvincias_1.set('fieldLabels', {'GID_0': 'inline label - always visible', 'COUNTRY': 'inline label - always visible', 'GID_1': 'inline label - always visible', 'NAME_1': 'inline label - always visible', 'VARNAME_1': 'inline label - always visible', 'NL_NAME_1': 'inline label - always visible', 'TYPE_1': 'inline label - always visible', 'ENGTYPE_1': 'inline label - always visible', 'CC_1': 'inline label - always visible', 'HASC_1': 'inline label - always visible', 'ISO_1': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'inline label - always visible', });
lyr_ConstruccionesIndustriales_2.set('fieldLabels', {'UBICACI': 'inline label - always visible', 'DESCRIPCI�': 'inline label - always visible', 'TIPO DE OB': 'inline label - always visible', 'MONTO': 'inline label - always visible', });
lyr_Minera_3.set('fieldLabels', {'PROYECTO': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'Etapa_actu': 'inline label - always visible', 'Elemento_p': 'inline label - always visible', });
lyr_Turismo_4.set('fieldLabels', {'UBICACIÓN': 'inline label - always visible', 'DESCRIPCI�': 'inline label - always visible', 'TIPO DE OB': 'inline label - always visible', 'MONTO': 'inline label - always visible', });
lyr_Punto_ET_Puerto_Madryn_no_label_5.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Punto_ET_CH_CH_no_label_6.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_LMTETChoeleChoelETPuertoMadryn_7.set('fieldLabels', {'DESCRIPCIO': 'inline label - always visible', 'OBSERVACIO': 'inline label - always visible', 'LONGITUD': 'inline label - always visible', });
lyr_LEAT_ETPLOMERVIVORATA_va_8.set('fieldLabels', {'Descripcio': 'inline label - always visible', 'Etapa N°1': 'inline label - always visible', 'Monto 1': 'inline label - always visible', 'Etapa N°2': 'inline label - always visible', 'Monto 2': 'inline label - always visible', 'Etapa N°3': 'inline label - always visible', 'Monto 3': 'inline label - always visible', 'Etapa N°4': 'inline label - always visible', 'Monto 4': 'inline label - always visible', 'Etapa N°5': 'inline label - always visible', 'Monto 5': 'inline label - always visible', 'Etapa N°6': 'inline label - always visible', 'Monto 6': 'inline label - always visible', 'Etapa N°7': 'inline label - always visible', 'Monto 7': 'inline label - always visible', 'Etapa N°8': 'inline label - always visible', 'Monto 8': 'inline label - always visible', 'Etapa N°9': 'inline label - always visible', 'Monto 9': 'inline label - always visible', 'Etapa N�_1': 'inline label - always visible', 'Monto 10': 'inline label - always visible', });
lyr_Punto_ET_Vivorata_no_label_9.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Punto_ET_Plomer_no_label_10.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_VialPasoFrontera_11.set('fieldLabels', {'rtn': 'inline label - always visible', 'Sector Eco': 'inline label - always visible', 'Sector Tra': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo de Ob': 'inline label - always visible', 'Objetivo': 'inline label - always visible', 'Monto(usd)': 'inline label - always visible', });
lyr_CorredorMineroUspallataLaQuiaca_12.set('fieldLabels', {'Sector Eco': 'inline label - always visible', 'Sector Tra': 'inline label - always visible', 'Descripcio': 'inline label - always visible', 'Tipo de Ob': 'inline label - always visible', 'Objetivos': 'inline label - always visible', 'Monto(USD)': 'inline label - always visible', });
lyr_CorredorMinero_13.set('fieldLabels', {'NOMBRE': 'inline label - always visible', 'MINERAL PR': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'ESTADO': 'inline label - always visible', });
lyr_FFCCTranspatagnico_14.set('fieldLabels', {'SectorEco': 'inline label - always visible', 'Sector Tra': 'inline label - always visible', 'Descrip': 'inline label - always visible', 'Tipo de Ob': 'inline label - always visible', 'Objetivos': 'inline label - always visible', 'Monto(usd)': 'inline label - always visible', });
lyr_FFCCLneaUrquizaInterurbano_15.set('fieldLabels', {'Sector Tra': 'inline label - always visible', 'Descripci�': 'inline label - always visible', 'Tipo de Ob': 'inline label - always visible', 'Monto(usd)': 'inline label - always visible', 'Objetivos': 'inline label - always visible', 'Sector Eco': 'inline label - always visible', });
lyr_FFCCC14C13_16.set('fieldLabels', {'Sector Eco': 'inline label - always visible', 'Sector Tra': 'inline label - always visible', 'Descripcio': 'inline label - always visible', 'Tipo de Ob': 'inline label - always visible', 'Objetivos': 'inline label - always visible', 'Monto(usd)': 'inline label - always visible', });
lyr_FFCCLneaSanMartnInterurbano_17.set('fieldLabels', {'Sector Eco': 'inline label - always visible', 'Sector Tra': 'inline label - always visible', 'Descripcio': 'inline label - always visible', 'Tipo de Ob': 'inline label - always visible', 'Objetivos': 'inline label - always visible', 'Monto(usd)': 'inline label - always visible', });
lyr_Puertos_18.set('fieldLabels', {'PROVINCIA': 'inline label - always visible', 'DESCRIPCI�': 'inline label - always visible', 'TIPO DE OB': 'inline label - always visible', 'MONTO': 'inline label - always visible', });
lyr_RutaSegura_19.set('fieldLabels', {'Nro.': 'inline label - always visible', 'Ruta N°': 'inline label - always visible', 'Ubicación': 'inline label - always visible', '__Rubro': 'inline label - always visible', 'Descripci�': 'inline label - always visible', 'Tramo': 'inline label - always visible', 'Tipo de Ob': 'inline label - always visible', 'Monto ( _1': 'inline label - always visible', });
lyr_RN181a_20.set('fieldLabels', {});
lyr_RN181b_21.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Crema_22.set('fieldLabels', {'__Ruta': 'inline label - always visible', '__Provinci': 'inline label - always visible', '__Nombre': 'inline label - always visible', 'Tramo': 'inline label - always visible', 'Tipo de Ob': 'inline label - always visible', '__Monto_1': 'inline label - always visible', });
lyr_AutopistaAutovia_23.set('fieldLabels', {'__Ruta': 'inline label - always visible', '__Provinci': 'inline label - always visible', '__Tipo de': 'inline label - always visible', '__Nombre': 'inline label - always visible', '__Observac': 'inline label - always visible', '__Variante': 'inline label - always visible', 'Tramo': 'inline label - always visible', 'Monto (_1': 'inline label - always visible', });
lyr_Pavimentacin2carriles_24.set('fieldLabels', {'__Ruta': 'inline label - always visible', '__Provinci': 'inline label - always visible', '__Tipo de': 'inline label - always visible', '__Nombre': 'inline label - always visible', '__Variante': 'inline label - always visible', '__Monto': 'inline label - always visible', 'Tramo': 'inline label - always visible', 'Monto': 'inline label - always visible', });
lyr_AguaySaneamiento_25.set('fieldLabels', {'Des': 'inline label - always visible', 'tipo_obra': 'inline label - always visible', 'sector': 'inline label - always visible', 'estado': 'inline label - always visible', 'monto_tota': 'inline label - always visible', 'avance_fin': 'inline label - always visible', 'avance_fis': 'inline label - always visible', 'NAM': 'inline label - always visible', });
lyr_MitigacindeExtremosHdricos_26.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', });
lyr_AguaySaneamiento_27.set('fieldLabels', {'fiid': 'inline label - always visible', 'nombre_obr': 'inline label - always visible', 'tipo_obra': 'inline label - always visible', 'sector': 'inline label - always visible', 'estado': 'inline label - always visible', 'monto_tota': 'inline label - always visible', 'avance_fin': 'inline label - always visible', 'avance_fis': 'inline label - always visible', 'NAM': 'inline label - always visible', });
lyr_AguaySaneamiento_28.set('fieldLabels', {'Descripci?': 'inline label - always visible', 'Tipo de Ob': 'inline label - always visible', 'Estado': 'inline label - always visible', 'Monto ($)': 'inline label - always visible', 'Avance fin': 'inline label - always visible', 'Avance fis': 'inline label - always visible', 'Ubicación': 'inline label - always visible', });
lyr_Seguridad_29.set('fieldLabels', {'PROVINCIA': 'inline label - always visible', 'UBICACIÓN': 'inline label - always visible', 'DESCRIPCI�': 'inline label - always visible', 'MONTO ($)': 'inline label - always visible', });
lyr_DesarrolloUrbanoAmbiental_30.set('fieldLabels', {'PROVINCIA': 'inline label - always visible', 'UBICACION': 'inline label - always visible', 'PROYECTO': 'inline label - always visible', 'DESCRIPCIO': 'inline label - always visible', 'ESTADO': 'inline label - always visible', 'MONTO': 'inline label - always visible', });
lyr_Infraestructuraescolar_31.set('fieldLabels', {'PROVINCIA': 'inline label - always visible', 'Infraestru': 'inline label - always visible', 'Infraest_1': 'inline label - always visible', 'Infraest_2': 'inline label - always visible', 'Infraest_3': 'inline label - always visible', });
lyr_Salud_32.set('fieldLabels', {'UBICACIÓN': 'inline label - always visible', 'DESCRIPCI�': 'inline label - always visible', 'TIPO DE OB': 'inline label - always visible', 'Monto_1': 'inline label - always visible', });
lyr_Salud_32.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});