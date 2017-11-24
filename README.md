# How to get current data
1. Go to https://overpass-turbo.eu
1. Run query `overpass-query.txt`
1. Download data as `src.geojson`
1. Run `node preprocess.js`
1. This will break if something happens to geojson format, region ids or any other part of the pipeline

---

# GPS boundaries of Czech republic (Czechia) regions

Dataset contains GPS coordinates marking boundaries of each official region in Czech Republic.
You can use it to pair points to regions and other useful stuff.

Inspiration for search algorithms: http://erich.realtimerendering.com/ptinpoly/

---

# GPS hranice krajů České republiky (ČR)

Datová sada obsahuje pro každý kraj ČR seznam GPS souřadnic ohraničující jejich okraje.
Dá se s výhodou použít na párování bodů do krajů a jiné kratochvíle.

Inspirace pro hledací algoritmy: http://erich.realtimerendering.com/ptinpoly/

---

<script src="https://embed.github.com/view/geojson/JirkaChadima/cz-region-boundaries/master/src.geojson"></script>
