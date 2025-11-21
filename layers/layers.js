var wms_layers = [];

var format_PrimtredesTerritoiresEducatifsRuraux_0 = new ol.format.GeoJSON();
var features_PrimtredesTerritoiresEducatifsRuraux_0 = format_PrimtredesTerritoiresEducatifsRuraux_0.readFeatures(json_PrimtredesTerritoiresEducatifsRuraux_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimtredesTerritoiresEducatifsRuraux_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimtredesTerritoiresEducatifsRuraux_0.addFeatures(features_PrimtredesTerritoiresEducatifsRuraux_0);
var lyr_PrimtredesTerritoiresEducatifsRuraux_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrimtredesTerritoiresEducatifsRuraux_0, 
                style: style_PrimtredesTerritoiresEducatifsRuraux_0,
                popuplayertitle: 'Périmètre des Territoires Educatifs Ruraux',
                interactive: false,
                title: '<img src="styles/legend/PrimtredesTerritoiresEducatifsRuraux_0.png" /> Périmètre des Territoires Educatifs Ruraux'
            });
var format_Primtredescitsducatives_1 = new ol.format.GeoJSON();
var features_Primtredescitsducatives_1 = format_Primtredescitsducatives_1.readFeatures(json_Primtredescitsducatives_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Primtredescitsducatives_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primtredescitsducatives_1.addFeatures(features_Primtredescitsducatives_1);
var lyr_Primtredescitsducatives_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primtredescitsducatives_1, 
                style: style_Primtredescitsducatives_1,
                popuplayertitle: 'Périmètre des cités éducatives',
                interactive: false,
                title: '<img src="styles/legend/Primtredescitsducatives_1.png" /> Périmètre des cités éducatives'
            });
var format_PrimtredesPEdT_2 = new ol.format.GeoJSON();
var features_PrimtredesPEdT_2 = format_PrimtredesPEdT_2.readFeatures(json_PrimtredesPEdT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimtredesPEdT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimtredesPEdT_2.addFeatures(features_PrimtredesPEdT_2);
var lyr_PrimtredesPEdT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrimtredesPEdT_2, 
                style: style_PrimtredesPEdT_2,
                popuplayertitle: 'Périmètre des PEdT',
                interactive: false,
                title: '<img src="styles/legend/PrimtredesPEdT_2.png" /> Périmètre des PEdT'
            });
var format_Comptencepriscolairesyndicale_3 = new ol.format.GeoJSON();
var features_Comptencepriscolairesyndicale_3 = format_Comptencepriscolairesyndicale_3.readFeatures(json_Comptencepriscolairesyndicale_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comptencepriscolairesyndicale_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comptencepriscolairesyndicale_3.addFeatures(features_Comptencepriscolairesyndicale_3);
var lyr_Comptencepriscolairesyndicale_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comptencepriscolairesyndicale_3, 
                style: style_Comptencepriscolairesyndicale_3,
                popuplayertitle: 'Compétence périscolaire syndicale',
                interactive: false,
                title: '<img src="styles/legend/Comptencepriscolairesyndicale_3.png" /> Compétence périscolaire syndicale'
            });
var format_Comptencepriscolaireintercommunale_4 = new ol.format.GeoJSON();
var features_Comptencepriscolaireintercommunale_4 = format_Comptencepriscolaireintercommunale_4.readFeatures(json_Comptencepriscolaireintercommunale_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comptencepriscolaireintercommunale_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comptencepriscolaireintercommunale_4.addFeatures(features_Comptencepriscolaireintercommunale_4);
var lyr_Comptencepriscolaireintercommunale_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comptencepriscolaireintercommunale_4, 
                style: style_Comptencepriscolaireintercommunale_4,
                popuplayertitle: 'Compétence périscolaire intercommunale',
                interactive: false,
                title: '<img src="styles/legend/Comptencepriscolaireintercommunale_4.png" /> Compétence périscolaire intercommunale'
            });
var format_Comptencepriscolairecommunale_5 = new ol.format.GeoJSON();
var features_Comptencepriscolairecommunale_5 = format_Comptencepriscolairecommunale_5.readFeatures(json_Comptencepriscolairecommunale_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comptencepriscolairecommunale_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comptencepriscolairecommunale_5.addFeatures(features_Comptencepriscolairecommunale_5);
var lyr_Comptencepriscolairecommunale_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comptencepriscolairecommunale_5, 
                style: style_Comptencepriscolairecommunale_5,
                popuplayertitle: 'Compétence périscolaire communale',
                interactive: false,
                title: '<img src="styles/legend/Comptencepriscolairecommunale_5.png" /> Compétence périscolaire communale'
            });
var format_Comptencescolairesyndicale_6 = new ol.format.GeoJSON();
var features_Comptencescolairesyndicale_6 = format_Comptencescolairesyndicale_6.readFeatures(json_Comptencescolairesyndicale_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comptencescolairesyndicale_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comptencescolairesyndicale_6.addFeatures(features_Comptencescolairesyndicale_6);
var lyr_Comptencescolairesyndicale_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comptencescolairesyndicale_6, 
                style: style_Comptencescolairesyndicale_6,
                popuplayertitle: 'Compétence scolaire syndicale',
                interactive: false,
                title: '<img src="styles/legend/Comptencescolairesyndicale_6.png" /> Compétence scolaire syndicale'
            });
var format_Comptencescolaireintercommunale_7 = new ol.format.GeoJSON();
var features_Comptencescolaireintercommunale_7 = format_Comptencescolaireintercommunale_7.readFeatures(json_Comptencescolaireintercommunale_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comptencescolaireintercommunale_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comptencescolaireintercommunale_7.addFeatures(features_Comptencescolaireintercommunale_7);
var lyr_Comptencescolaireintercommunale_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comptencescolaireintercommunale_7, 
                style: style_Comptencescolaireintercommunale_7,
                popuplayertitle: 'Compétence scolaire intercommunale',
                interactive: false,
                title: '<img src="styles/legend/Comptencescolaireintercommunale_7.png" /> Compétence scolaire intercommunale'
            });
var format_Comptencescolairecommunale_8 = new ol.format.GeoJSON();
var features_Comptencescolairecommunale_8 = format_Comptencescolairecommunale_8.readFeatures(json_Comptencescolairecommunale_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comptencescolairecommunale_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comptencescolairecommunale_8.addFeatures(features_Comptencescolairecommunale_8);
var lyr_Comptencescolairecommunale_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comptencescolairecommunale_8, 
                style: style_Comptencescolairecommunale_8,
                popuplayertitle: 'Compétence scolaire communale',
                interactive: false,
                title: '<img src="styles/legend/Comptencescolairecommunale_8.png" /> Compétence scolaire communale'
            });
var format_Cartescolairedescollges_9 = new ol.format.GeoJSON();
var features_Cartescolairedescollges_9 = format_Cartescolairedescollges_9.readFeatures(json_Cartescolairedescollges_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cartescolairedescollges_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cartescolairedescollges_9.addFeatures(features_Cartescolairedescollges_9);
var lyr_Cartescolairedescollges_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cartescolairedescollges_9, 
                style: style_Cartescolairedescollges_9,
                popuplayertitle: 'Carte scolaire des collèges',
                interactive: true,
                title: '<img src="styles/legend/Cartescolairedescollges_9.png" /> Carte scolaire des collèges'
            });
var format_Circonscriptionsscolaires_10 = new ol.format.GeoJSON();
var features_Circonscriptionsscolaires_10 = format_Circonscriptionsscolaires_10.readFeatures(json_Circonscriptionsscolaires_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Circonscriptionsscolaires_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Circonscriptionsscolaires_10.addFeatures(features_Circonscriptionsscolaires_10);
var lyr_Circonscriptionsscolaires_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Circonscriptionsscolaires_10, 
                style: style_Circonscriptionsscolaires_10,
                popuplayertitle: 'Circonscriptions scolaires',
                interactive: false,
                title: '<img src="styles/legend/Circonscriptionsscolaires_10.png" /> Circonscriptions scolaires'
            });
var format_Circonscriptionslgislatives_11 = new ol.format.GeoJSON();
var features_Circonscriptionslgislatives_11 = format_Circonscriptionslgislatives_11.readFeatures(json_Circonscriptionslgislatives_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Circonscriptionslgislatives_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Circonscriptionslgislatives_11.addFeatures(features_Circonscriptionslgislatives_11);
var lyr_Circonscriptionslgislatives_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Circonscriptionslgislatives_11, 
                style: style_Circonscriptionslgislatives_11,
                popuplayertitle: 'Circonscriptions législatives',
                interactive: true,
                title: '<img src="styles/legend/Circonscriptionslgislatives_11.png" /> Circonscriptions législatives'
            });
var format_EPCIduDoubs_12 = new ol.format.GeoJSON();
var features_EPCIduDoubs_12 = format_EPCIduDoubs_12.readFeatures(json_EPCIduDoubs_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCIduDoubs_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCIduDoubs_12.addFeatures(features_EPCIduDoubs_12);
var lyr_EPCIduDoubs_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EPCIduDoubs_12, 
                style: style_EPCIduDoubs_12,
                popuplayertitle: 'EPCI du Doubs',
                interactive: true,
                title: '<img src="styles/legend/EPCIduDoubs_12.png" /> EPCI du Doubs'
            });
var format_Arrondissements_13 = new ol.format.GeoJSON();
var features_Arrondissements_13 = format_Arrondissements_13.readFeatures(json_Arrondissements_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arrondissements_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arrondissements_13.addFeatures(features_Arrondissements_13);
var lyr_Arrondissements_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arrondissements_13, 
                style: style_Arrondissements_13,
                popuplayertitle: 'Arrondissements',
                interactive: true,
                title: '<img src="styles/legend/Arrondissements_13.png" /> Arrondissements'
            });
var format_Communes_14 = new ol.format.GeoJSON();
var features_Communes_14 = format_Communes_14.readFeatures(json_Communes_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_14.addFeatures(features_Communes_14);
var lyr_Communes_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_14, 
                style: style_Communes_14,
                popuplayertitle: 'Communes',
                interactive: true,
                title: '<img src="styles/legend/Communes_14.png" /> Communes'
            });
var format_Doubs_15 = new ol.format.GeoJSON();
var features_Doubs_15 = format_Doubs_15.readFeatures(json_Doubs_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Doubs_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Doubs_15.addFeatures(features_Doubs_15);
var lyr_Doubs_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Doubs_15, 
                style: style_Doubs_15,
                popuplayertitle: 'Doubs',
                interactive: false,
                title: '<img src="styles/legend/Doubs_15.png" /> Doubs'
            });

lyr_PrimtredesTerritoiresEducatifsRuraux_0.setVisible(true);lyr_Primtredescitsducatives_1.setVisible(true);lyr_PrimtredesPEdT_2.setVisible(true);lyr_Comptencepriscolairesyndicale_3.setVisible(true);lyr_Comptencepriscolaireintercommunale_4.setVisible(true);lyr_Comptencepriscolairecommunale_5.setVisible(true);lyr_Comptencescolairesyndicale_6.setVisible(true);lyr_Comptencescolaireintercommunale_7.setVisible(true);lyr_Comptencescolairecommunale_8.setVisible(true);lyr_Cartescolairedescollges_9.setVisible(true);lyr_Circonscriptionsscolaires_10.setVisible(true);lyr_Circonscriptionslgislatives_11.setVisible(true);lyr_EPCIduDoubs_12.setVisible(true);lyr_Arrondissements_13.setVisible(true);lyr_Communes_14.setVisible(true);lyr_Doubs_15.setVisible(true);
var layersList = [lyr_PrimtredesTerritoiresEducatifsRuraux_0,lyr_Primtredescitsducatives_1,lyr_PrimtredesPEdT_2,lyr_Comptencepriscolairesyndicale_3,lyr_Comptencepriscolaireintercommunale_4,lyr_Comptencepriscolairecommunale_5,lyr_Comptencescolairesyndicale_6,lyr_Comptencescolaireintercommunale_7,lyr_Comptencescolairecommunale_8,lyr_Cartescolairedescollges_9,lyr_Circonscriptionsscolaires_10,lyr_Circonscriptionslgislatives_11,lyr_EPCIduDoubs_12,lyr_Arrondissements_13,lyr_Communes_14,lyr_Doubs_15];
lyr_PrimtredesTerritoiresEducatifsRuraux_0.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'nj_num': 'nj_num', 'nj_complet': 'nj_complet', 'intitule': 'intitule', });
lyr_Primtredescitsducatives_1.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'libelle': 'libelle', 'cheflieu': 'cheflieu', 'tncc': 'tncc', 'dct': 'dct', 'dar': 'dar', 'z20': 'z20', 'duu20': 'duu20', 'aav20': 'aav20', 'typo_aav20': 'typo_aav20', 'bv22': 'bv22', 'epc': 'epc', 'ctcd': 'ctcd', 'dep': 'dep', 'reg': 'reg', 'surf': 'surf', });
lyr_PrimtredesPEdT_2.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'libelle': 'libelle', 'cheflieu': 'cheflieu', 'tncc': 'tncc', 'dct': 'dct', 'dar': 'dar', 'z20': 'z20', 'duu20': 'duu20', 'aav20': 'aav20', 'typo_aav20': 'typo_aav20', 'bv22': 'bv22', 'epc': 'epc', 'ctcd': 'ctcd', 'dep': 'dep', 'reg': 'reg', 'surf': 'surf', });
lyr_Comptencepriscolairesyndicale_3.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'libelle': 'libelle', 'cheflieu': 'cheflieu', 'tncc': 'tncc', 'dct': 'dct', 'dar': 'dar', 'z20': 'z20', 'duu20': 'duu20', 'aav20': 'aav20', 'typo_aav20': 'typo_aav20', 'bv22': 'bv22', 'epc': 'epc', 'ctcd': 'ctcd', 'dep': 'dep', 'reg': 'reg', 'surf': 'surf', });
lyr_Comptencepriscolaireintercommunale_4.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'libelle': 'libelle', 'cheflieu': 'cheflieu', 'tncc': 'tncc', 'dct': 'dct', 'dar': 'dar', 'z20': 'z20', 'duu20': 'duu20', 'aav20': 'aav20', 'typo_aav20': 'typo_aav20', 'bv22': 'bv22', 'epc': 'epc', 'ctcd': 'ctcd', 'dep': 'dep', 'reg': 'reg', 'surf': 'surf', });
lyr_Comptencepriscolairecommunale_5.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'libelle': 'libelle', 'cheflieu': 'cheflieu', 'tncc': 'tncc', 'dct': 'dct', 'dar': 'dar', 'z20': 'z20', 'duu20': 'duu20', 'aav20': 'aav20', 'typo_aav20': 'typo_aav20', 'bv22': 'bv22', 'epc': 'epc', 'ctcd': 'ctcd', 'dep': 'dep', 'reg': 'reg', 'surf': 'surf', });
lyr_Comptencescolairesyndicale_6.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'libelle': 'libelle', 'cheflieu': 'cheflieu', 'tncc': 'tncc', 'dct': 'dct', 'dar': 'dar', 'z20': 'z20', 'duu20': 'duu20', 'aav20': 'aav20', 'typo_aav20': 'typo_aav20', 'bv22': 'bv22', 'epc': 'epc', 'ctcd': 'ctcd', 'dep': 'dep', 'reg': 'reg', 'surf': 'surf', });
lyr_Comptencescolaireintercommunale_7.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'libelle': 'libelle', 'cheflieu': 'cheflieu', 'tncc': 'tncc', 'dct': 'dct', 'dar': 'dar', 'z20': 'z20', 'duu20': 'duu20', 'aav20': 'aav20', 'typo_aav20': 'typo_aav20', 'bv22': 'bv22', 'epc': 'epc', 'ctcd': 'ctcd', 'dep': 'dep', 'reg': 'reg', 'surf': 'surf', });
lyr_Comptencescolairecommunale_8.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'libelle': 'libelle', 'cheflieu': 'cheflieu', 'tncc': 'tncc', 'dct': 'dct', 'dar': 'dar', 'z20': 'z20', 'duu20': 'duu20', 'aav20': 'aav20', 'typo_aav20': 'typo_aav20', 'bv22': 'bv22', 'epc': 'epc', 'ctcd': 'ctcd', 'dep': 'dep', 'reg': 'reg', 'surf': 'surf', });
lyr_Cartescolairedescollges_9.set('fieldAliases', {'UAI_CLG': 'UAI_CLG', 'Nom_Colleg': 'Nom_Colleg', 'Reseau_Edu': 'Reseau_Edu', 'Territoire': 'Territoire', 'layer': 'layer', 'path': 'path', });
lyr_Circonscriptionsscolaires_10.set('fieldAliases', {'RCirco': 'RCirco', 'RTerritoir': 'RTerritoir', 'layer': 'layer', 'path': 'path', });
lyr_Circonscriptionslgislatives_11.set('fieldAliases', {'id_circo': 'id_circo', 'dep': 'dep', 'libelle': 'libelle', });
lyr_EPCIduDoubs_12.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'nj_num': 'nj_num', 'nj_complet': 'nj_complet', 'intitule': 'intitule', });
lyr_Arrondissements_13.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'libelle': 'libelle', });
lyr_Communes_14.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'libelle': 'libelle', 'cheflieu': 'cheflieu', 'tncc': 'tncc', 'dct': 'dct', 'dar': 'dar', 'z20': 'z20', 'duu20': 'duu20', 'aav20': 'aav20', 'typo_aav20': 'typo_aav20', 'bv22': 'bv22', 'epc': 'epc', 'ctcd': 'ctcd', 'dep': 'dep', 'reg': 'reg', 'surf': 'surf', });
lyr_Doubs_15.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'libelle': 'libelle', 'reg': 'reg', 'surf': 'surf', });
lyr_PrimtredesTerritoiresEducatifsRuraux_0.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'nj_num': 'TextEdit', 'nj_complet': 'TextEdit', 'intitule': 'TextEdit', });
lyr_Primtredescitsducatives_1.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'libelle': 'TextEdit', 'cheflieu': 'TextEdit', 'tncc': 'TextEdit', 'dct': 'TextEdit', 'dar': 'TextEdit', 'z20': 'TextEdit', 'duu20': 'TextEdit', 'aav20': 'TextEdit', 'typo_aav20': 'TextEdit', 'bv22': 'TextEdit', 'epc': 'TextEdit', 'ctcd': 'TextEdit', 'dep': 'TextEdit', 'reg': 'TextEdit', 'surf': 'TextEdit', });
lyr_PrimtredesPEdT_2.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'libelle': 'TextEdit', 'cheflieu': 'TextEdit', 'tncc': 'TextEdit', 'dct': 'TextEdit', 'dar': 'TextEdit', 'z20': 'TextEdit', 'duu20': 'TextEdit', 'aav20': 'TextEdit', 'typo_aav20': 'TextEdit', 'bv22': 'TextEdit', 'epc': 'TextEdit', 'ctcd': 'TextEdit', 'dep': 'TextEdit', 'reg': 'TextEdit', 'surf': 'TextEdit', });
lyr_Comptencepriscolairesyndicale_3.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'libelle': 'TextEdit', 'cheflieu': 'TextEdit', 'tncc': 'TextEdit', 'dct': 'TextEdit', 'dar': 'TextEdit', 'z20': 'TextEdit', 'duu20': 'TextEdit', 'aav20': 'TextEdit', 'typo_aav20': 'TextEdit', 'bv22': 'TextEdit', 'epc': 'TextEdit', 'ctcd': 'TextEdit', 'dep': 'TextEdit', 'reg': 'TextEdit', 'surf': 'TextEdit', });
lyr_Comptencepriscolaireintercommunale_4.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'libelle': 'TextEdit', 'cheflieu': 'TextEdit', 'tncc': 'TextEdit', 'dct': 'TextEdit', 'dar': 'TextEdit', 'z20': 'TextEdit', 'duu20': 'TextEdit', 'aav20': 'TextEdit', 'typo_aav20': 'TextEdit', 'bv22': 'TextEdit', 'epc': 'TextEdit', 'ctcd': 'TextEdit', 'dep': 'TextEdit', 'reg': 'TextEdit', 'surf': 'TextEdit', });
lyr_Comptencepriscolairecommunale_5.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'libelle': 'TextEdit', 'cheflieu': 'TextEdit', 'tncc': 'TextEdit', 'dct': 'TextEdit', 'dar': 'TextEdit', 'z20': 'TextEdit', 'duu20': 'TextEdit', 'aav20': 'TextEdit', 'typo_aav20': 'TextEdit', 'bv22': 'TextEdit', 'epc': 'TextEdit', 'ctcd': 'TextEdit', 'dep': 'TextEdit', 'reg': 'TextEdit', 'surf': 'TextEdit', });
lyr_Comptencescolairesyndicale_6.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'libelle': 'TextEdit', 'cheflieu': 'TextEdit', 'tncc': 'TextEdit', 'dct': 'TextEdit', 'dar': 'TextEdit', 'z20': 'TextEdit', 'duu20': 'TextEdit', 'aav20': 'TextEdit', 'typo_aav20': 'TextEdit', 'bv22': 'TextEdit', 'epc': 'TextEdit', 'ctcd': 'TextEdit', 'dep': 'TextEdit', 'reg': 'TextEdit', 'surf': 'TextEdit', });
lyr_Comptencescolaireintercommunale_7.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'libelle': 'TextEdit', 'cheflieu': 'TextEdit', 'tncc': 'TextEdit', 'dct': 'TextEdit', 'dar': 'TextEdit', 'z20': 'TextEdit', 'duu20': 'TextEdit', 'aav20': 'TextEdit', 'typo_aav20': 'TextEdit', 'bv22': 'TextEdit', 'epc': 'TextEdit', 'ctcd': 'TextEdit', 'dep': 'TextEdit', 'reg': 'TextEdit', 'surf': 'TextEdit', });
lyr_Comptencescolairecommunale_8.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'libelle': 'TextEdit', 'cheflieu': 'TextEdit', 'tncc': 'TextEdit', 'dct': 'TextEdit', 'dar': 'TextEdit', 'z20': 'TextEdit', 'duu20': 'TextEdit', 'aav20': 'TextEdit', 'typo_aav20': 'TextEdit', 'bv22': 'TextEdit', 'epc': 'TextEdit', 'ctcd': 'TextEdit', 'dep': 'TextEdit', 'reg': 'TextEdit', 'surf': 'TextEdit', });
lyr_Cartescolairedescollges_9.set('fieldImages', {'UAI_CLG': 'TextEdit', 'Nom_Colleg': 'TextEdit', 'Reseau_Edu': 'TextEdit', 'Territoire': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Circonscriptionsscolaires_10.set('fieldImages', {'RCirco': 'TextEdit', 'RTerritoir': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Circonscriptionslgislatives_11.set('fieldImages', {'id_circo': 'TextEdit', 'dep': 'TextEdit', 'libelle': 'TextEdit', });
lyr_EPCIduDoubs_12.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'nj_num': 'TextEdit', 'nj_complet': 'TextEdit', 'intitule': 'TextEdit', });
lyr_Arrondissements_13.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'libelle': 'TextEdit', });
lyr_Communes_14.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'libelle': 'TextEdit', 'cheflieu': 'TextEdit', 'tncc': 'TextEdit', 'dct': 'TextEdit', 'dar': 'TextEdit', 'z20': 'TextEdit', 'duu20': 'TextEdit', 'aav20': 'TextEdit', 'typo_aav20': 'TextEdit', 'bv22': 'TextEdit', 'epc': 'TextEdit', 'ctcd': 'TextEdit', 'dep': 'TextEdit', 'reg': 'TextEdit', 'surf': 'TextEdit', });
lyr_Doubs_15.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'libelle': 'TextEdit', 'reg': 'TextEdit', 'surf': 'Range', });
lyr_PrimtredesTerritoiresEducatifsRuraux_0.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'nj_num': 'no label', 'nj_complet': 'no label', 'intitule': 'no label', });
lyr_Primtredescitsducatives_1.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'libelle': 'no label', 'cheflieu': 'no label', 'tncc': 'no label', 'dct': 'no label', 'dar': 'no label', 'z20': 'no label', 'duu20': 'no label', 'aav20': 'no label', 'typo_aav20': 'no label', 'bv22': 'no label', 'epc': 'no label', 'ctcd': 'no label', 'dep': 'no label', 'reg': 'no label', 'surf': 'no label', });
lyr_PrimtredesPEdT_2.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'libelle': 'no label', 'cheflieu': 'no label', 'tncc': 'no label', 'dct': 'no label', 'dar': 'no label', 'z20': 'no label', 'duu20': 'no label', 'aav20': 'no label', 'typo_aav20': 'no label', 'bv22': 'no label', 'epc': 'no label', 'ctcd': 'no label', 'dep': 'no label', 'reg': 'no label', 'surf': 'no label', });
lyr_Comptencepriscolairesyndicale_3.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'libelle': 'no label', 'cheflieu': 'no label', 'tncc': 'no label', 'dct': 'no label', 'dar': 'no label', 'z20': 'no label', 'duu20': 'no label', 'aav20': 'no label', 'typo_aav20': 'no label', 'bv22': 'no label', 'epc': 'no label', 'ctcd': 'no label', 'dep': 'no label', 'reg': 'no label', 'surf': 'no label', });
lyr_Comptencepriscolaireintercommunale_4.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'libelle': 'no label', 'cheflieu': 'no label', 'tncc': 'no label', 'dct': 'no label', 'dar': 'no label', 'z20': 'no label', 'duu20': 'no label', 'aav20': 'no label', 'typo_aav20': 'no label', 'bv22': 'no label', 'epc': 'no label', 'ctcd': 'no label', 'dep': 'no label', 'reg': 'no label', 'surf': 'no label', });
lyr_Comptencepriscolairecommunale_5.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'libelle': 'no label', 'cheflieu': 'no label', 'tncc': 'no label', 'dct': 'no label', 'dar': 'no label', 'z20': 'no label', 'duu20': 'no label', 'aav20': 'no label', 'typo_aav20': 'no label', 'bv22': 'no label', 'epc': 'no label', 'ctcd': 'no label', 'dep': 'no label', 'reg': 'no label', 'surf': 'no label', });
lyr_Comptencescolairesyndicale_6.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'libelle': 'no label', 'cheflieu': 'no label', 'tncc': 'no label', 'dct': 'no label', 'dar': 'no label', 'z20': 'no label', 'duu20': 'no label', 'aav20': 'no label', 'typo_aav20': 'no label', 'bv22': 'no label', 'epc': 'no label', 'ctcd': 'no label', 'dep': 'no label', 'reg': 'no label', 'surf': 'no label', });
lyr_Comptencescolaireintercommunale_7.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'libelle': 'no label', 'cheflieu': 'no label', 'tncc': 'no label', 'dct': 'no label', 'dar': 'no label', 'z20': 'no label', 'duu20': 'no label', 'aav20': 'no label', 'typo_aav20': 'no label', 'bv22': 'no label', 'epc': 'no label', 'ctcd': 'no label', 'dep': 'no label', 'reg': 'no label', 'surf': 'no label', });
lyr_Comptencescolairecommunale_8.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'libelle': 'no label', 'cheflieu': 'no label', 'tncc': 'no label', 'dct': 'no label', 'dar': 'no label', 'z20': 'no label', 'duu20': 'no label', 'aav20': 'no label', 'typo_aav20': 'no label', 'bv22': 'no label', 'epc': 'no label', 'ctcd': 'no label', 'dep': 'no label', 'reg': 'no label', 'surf': 'no label', });
lyr_Cartescolairedescollges_9.set('fieldLabels', {'UAI_CLG': 'hidden field', 'Nom_Colleg': 'header label - always visible', 'Reseau_Edu': 'hidden field', 'Territoire': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Circonscriptionsscolaires_10.set('fieldLabels', {'RCirco': 'no label', 'RTerritoir': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Circonscriptionslgislatives_11.set('fieldLabels', {'id_circo': 'hidden field', 'dep': 'hidden field', 'libelle': 'header label - always visible', });
lyr_EPCIduDoubs_12.set('fieldLabels', {'fid': 'hidden field', 'code': 'hidden field', 'nj_num': 'hidden field', 'nj_complet': 'hidden field', 'intitule': 'header label - always visible', });
lyr_Arrondissements_13.set('fieldLabels', {'fid': 'hidden field', 'code': 'hidden field', 'libelle': 'header label - always visible', });
lyr_Communes_14.set('fieldLabels', {'fid': 'hidden field', 'code': 'hidden field', 'libelle': 'header label - always visible', 'cheflieu': 'hidden field', 'tncc': 'hidden field', 'dct': 'hidden field', 'dar': 'hidden field', 'z20': 'hidden field', 'duu20': 'hidden field', 'aav20': 'hidden field', 'typo_aav20': 'hidden field', 'bv22': 'hidden field', 'epc': 'hidden field', 'ctcd': 'hidden field', 'dep': 'hidden field', 'reg': 'hidden field', 'surf': 'hidden field', });
lyr_Doubs_15.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'libelle': 'no label', 'reg': 'no label', 'surf': 'no label', });
lyr_Doubs_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});