var filename = 'src.geojson';
var relations = [
    'relation/435514', // Praha
    'relation/442397', // Stredni Cechy
    'relation/442321', // Jizni Cechy
    'relation/442466', // Plzen
    'relation/442452', // Usti
    'relation/442455', // Liberec
    'relation/442463', // Hradec Kralove
    'relation/442460', // Pardubice
    'relation/442311', //Brno
    'relation/442459', // Olomouc
    'relation/442453', // Vysocina
    'relation/442461', // Moravskoslezsky
    'relation/442449', // Zlinsky
    'relation/442314', // Karlovy vary

];
var fs = require('fs');
var contents = fs.readFileSync(filename);
var data = JSON.parse(contents);
var result = "";
var resultAll = "";

for(var i = 0; i < data.features.length; i++) {
    if (data.features[i].properties.admin_level != 6) {
        continue;
    }
    if (relations.indexOf(data.features[i].id) != -1) {
        var name = data.features[i].properties['name'];
        result = "#," + name + "\n";
        var geometry = data.features[i].geometry;
        for (var k = 0; k < geometry.coordinates.length; k++) {
            for (var j = 0; j < geometry.coordinates[k].length; j++) {
                result += geometry.coordinates[k][j][1] + "," + geometry.coordinates[k][j][0] + "\n";
            }
        }
        resultAll += result;
        fs.writeFileSync("../data/gps/" + name + ".txt", result);
    } else {
        console.log("!!!" + JSON.stringify(data.features[i].properties));
    }
}
fs.writeFileSync("../data/gps/all.txt", resultAll);
