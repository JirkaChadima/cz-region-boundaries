# How to get current data
1. Install [osmtogeojson](https://tyrasd.github.io/osmtogeojson/) with `npm i -g osmtogeojson`
1. Run `cd scripts && ./refresh-data.sh && cd ..`
1. This might eventually break if something happens to geojson format, region ids or any other part of the pipeline

---

# GPS boundaries of Czech republic (Czechia) regions

Dataset contains GPS coordinates marking boundaries of each official region in Czech Republic.
You can use it to pair points to regions and other useful stuff.

Inspiration for search algorithms: http://erich.realtimerendering.com/ptinpoly/
County region mapping: Collected from https://cs.wikipedia.org/wiki/Okresy_v_%C4%8Cesku#Okresy_podle_.C3.BAzemn.C3.ADch_kraj.C5.AF
ZIP code list: https://www.ceskaposta.cz/ke-stazeni/zakaznicke-vystupy

---

# GPS hranice krajů České republiky (ČR)

Datová sada obsahuje pro každý kraj ČR seznam GPS souřadnic ohraničující jejich okraje.
Dá se s výhodou použít na párování bodů do krajů a jiné kratochvíle.

Inspirace pro hledací algoritmy: http://erich.realtimerendering.com/ptinpoly/
Mapování okresů na kraje: Sestaveno podle https://cs.wikipedia.org/wiki/Okresy_v_%C4%8Cesku#Okresy_podle_.C3.BAzemn.C3.ADch_kraj.C5.AF
Seznam PSČ: https://www.ceskaposta.cz/ke-stazeni/zakaznicke-vystupy

---


Visualized source OSM data can be found [here](https://render.githubusercontent.com/view/geojson?url=https://raw.githubusercontent.com/JirkaChadima/cz-region-boundaries/master/scripts/src.geojson).
