#!/bin/bash
curl -X POST 'https://lz4.overpass-api.de/api/interpreter' -d@overpass-query.overpassql | osmtogeojson > src.geojson
node prepare-gps-data.js

PSCSOURCE='https://www.ceskaposta.cz/documents/10180/3738087/xls_pcobc.zip/50617e56-6e9a-4335-9608-96fec214e6ef'
OKRESFILE="../data/zip/county-region.csv"
ZIPFILE="src.zip"
FILE='xls_zv_pcobc'
PSCFILE="../data/zip/zip-county.csv"
RESULT="../data/zip/zip-region.csv"

wget "$PSCSOURCE" -O src.zip

unzip -n "$ZIPFILE"
cut -d, -f2,5 "$FILE.csv" | tail -n +2 | sort | uniq > "$PSCFILE"
join -t ',' -1 2 -2 1 -o 1.1,2.2 <(sort -t ',' -k2,2 "$PSCFILE") <(sort -t ',' -k1,1 "$OKRESFILE") | sort | uniq > "$RESULT"
rm "$ZIPFILE"
rm -f "$FILE.xlsx"
rm -f "$FILE.xls"
rm -f "$FILE.csv"

