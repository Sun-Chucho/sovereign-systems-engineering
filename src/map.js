const map = L.map('map', {scrollWheelZoom:false, zoomControl:false}).setView([12, 24], 2);
L.control.zoom({position:'bottomright'}).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors',maxZoom:18}).addTo(map);
const places=[
  ['United Kingdom',54.2,-2.8,'Institutional and infrastructure systems context'],
  ['Morocco',31.8,-7.1,'Energy, industry and regional connectivity context'],
  ['Ethiopia',9.1,40.5,'National capability and infrastructure context'],
  ['Uganda',1.4,32.3,'Energy and economic systems context'],
  ['DR Congo',-2.9,23.6,'Critical minerals and industrial systems context'],
  ['Philippines',12.8,121.8,'Resilient infrastructure and archipelago systems context'],
  ['Laos',18.1,103.8,'Energy and regional connectivity context'],
  ['El Salvador',13.8,-88.9,'Digital, energy and public systems context']
];
places.forEach(([name,lat,lng,copy])=>L.circleMarker([lat,lng],{radius:8,fillColor:'#2368ff',color:'#fff',weight:3,fillOpacity:1}).addTo(map).bindPopup(`<b>${name}</b><br>${copy}<br><small>Engagement geography; not a project-delivery claim.</small>`));
