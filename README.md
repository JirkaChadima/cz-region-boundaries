# How to get current data
1. Install [osmtogeojson](https://tyrasd.github.io/osmtogeojson/) with `npm i -g osmtogeojson`
1. Run `cd scripts && ./refresh-data.sh && cd ..`
1. This might eventually break if something happens to geojson format, region ids or any other part of the pipeline

---

# GPS boundaries of Czechia regions

My motivation was to have clear data that would allow me to map Czech ZIP codes to Czech regions.
However multiple zip codes might span across multiple regions and we need a more precise matching.
This can be achieved by matching GPS points to GPS regions/polygons. By combining these two methods
we can achieve both reasonable mapping speed and perfect precision.
Dataset contains GPS coordinates marking boundaries of each official region in Czech Republic.
Dataset also contains mapping of zip codes to counties and regions.
You can use it to pair points to regions and other useful stuff.

- Inspiration for search algorithms: http://erich.realtimerendering.com/ptinpoly/
- County region mapping: Collected from https://cs.wikipedia.org/wiki/Okresy_v_%C4%8Cesku#Okresy_podle_.C3.BAzemn.C3.ADch_kraj.C5.AF
- ZIP code list: https://www.ceskaposta.cz/ke-stazeni/zakaznicke-vystupy

---

# GPS hranice krajů Česka (ČR)

Motivací bylo párování českých PSČ na české kraje. Nicméně několik PSČ se rozkládá přes víc krajů
a je potřeba párování nějak zpřesnit. Na to se samozřejmě hodí detekce přítomnosti GPS bodu
v GPS oblasti/polygonu. Zkombinováním obou metod získáme jak rozumnou rychlost, tak požadovanou přesnost.
Datová sada obsahuje pro každý kraj ČR seznam GPS souřadnic ohraničující jejich okraje.
Datová sada obsahuje také mapování PSČ na okresy kraje.
Dá se s výhodou použít na párování bodů do krajů a jiné kratochvíle.

- Inspirace pro hledací algoritmy: http://erich.realtimerendering.com/ptinpoly/
- Mapování okresů na kraje: Sestaveno podle https://cs.wikipedia.org/wiki/Okresy_v_%C4%8Cesku#Okresy_podle_.C3.BAzemn.C3.ADch_kraj.C5.AF
- Seznam PSČ: https://www.ceskaposta.cz/ke-stazeni/zakaznicke-vystupy

---


Visualized source OSM data can be found [here](https://render.githubusercontent.com/view/geojson?url=https://raw.githubusercontent.com/JirkaChadima/cz-region-boundaries/master/scripts/src.geojson).
