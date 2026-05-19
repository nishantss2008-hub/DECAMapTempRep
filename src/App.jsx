import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Polygon, Marker, Popup, Tooltip, CircleMarker, LayersControl, useMap, GeoJSON } from 'react-leaflet';
import FL_COUNTIES from './flCounties.json';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import { DISTRICTS, SCHOOLS, DISTRICT_LATLNG, FL_BOUNDS, STATE_OFFICERS } from './MapData';

function ZoomWatcher({ onZoom }) {
  const map = useMap();
  useEffect(() => {
    onZoom(map.getZoom());
    const fn = () => onZoom(map.getZoom());
    map.on('zoomend', fn);
    return () => map.off('zoomend', fn);
  }, [map, onZoom]);
  return null;
}

const readableOn = (hex) => {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.6 ? '#0f487c' : '#ffffff';
};

const makeDistrictIcon = (d, color, count) => {
  const textColor = readableOn(color);
  return L.divIcon({
    className: 'fldeca-dmarker',
    html: `
      <div class="fldeca-dmarker-inner" style="background:${color};color:${textColor}">
        <div class="d-num">${d}</div>
        <div class="d-count">${count}</div>
      </div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
    popupAnchor: [0, -22]
  });
};

function App() {
  const [zoom, setZoom] = useState(7);
  const activeCountyRef = React.useRef(null);
  const showSchools = zoom >= 8;
  const baseR = zoom >= 11 ? 6 : zoom >= 9 ? 4.5 : 3.5;

  const defaultCountyStyle = {
    color: '#6c7a89',
    weight: 1.5,
    opacity: 0.6,
    fillColor: 'transparent',
    dashArray: '4, 4'
  };

  const activeCountyStyle = {
    color: '#0f487c',
    weight: 3,
    opacity: 1,
    fillColor: '#61a1d7',
    fillOpacity: 0.25,
    dashArray: ''
  };

  return (
    <div id="fldeca-map-root">
      <div className="fldeca-state-bar">
        <div className="brand">Florida DECA · State Officer Team</div>
        <div className="execs">
          <span className="exec">
            <span className="role">Executive President</span>
            <span className="name">{STATE_OFFICERS.president.name}</span>
          </span>
          <span className="exec">
            <span className="role">Executive Vice President</span>
            <span className="name">{STATE_OFFICERS.executiveVP.name}</span>
          </span>
        </div>
      </div>
      <MapContainer
        bounds={FL_BOUNDS}
        boundsOptions={{ padding: [20, 20] }}
        scrollWheelZoom
        className="fldeca-leaflet"
        minZoom={6}
        maxZoom={14}
      >
        <ZoomWatcher onZoom={setZoom} />
        <LayersControl position="bottomright">
          <LayersControl.BaseLayer checked name="Streets">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; CARTO'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              subdomains="abcd"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satellite">
            <TileLayer
              attribution='Tiles &copy; Esri'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay name="Florida Counties">
            <GeoJSON
              data={FL_COUNTIES}
              style={defaultCountyStyle}
              onEachFeature={(feature, layer) => {
                if (feature.properties && feature.properties.NAME) {
                  layer.bindTooltip(`${feature.properties.NAME} County`, {
                    sticky: true,
                    direction: 'auto'
                  });
                  layer.on('click', () => {
                    if (activeCountyRef.current && activeCountyRef.current !== layer) {
                      activeCountyRef.current.setStyle(defaultCountyStyle);
                    }
                    activeCountyRef.current = layer;
                    layer.setStyle(activeCountyStyle);
                    layer.bringToFront();
                  });
                }
              }}
            />
          </LayersControl.Overlay>
        </LayersControl>

        {Object.keys(DISTRICT_LATLNG).map(d => {
          const g = DISTRICT_LATLNG[d];
          const info = DISTRICTS[d];
          return (
            <Polygon
              key={`poly-${d}`}
              positions={g.polygon}
              pathOptions={{
                color: '#ffffff',
                weight: 1.5,
                fillColor: info.color,
                fillOpacity: 0.3
              }}
            />
          );
        })}

        {showSchools && SCHOOLS.map((s, idx) => {
          const info = DISTRICTS[s.d];
          return (
            <CircleMarker
              key={`pin-${idx}`}
              center={[s.lat, s.lng]}
              radius={baseR}
              pathOptions={{
                color: '#ffffff',
                weight: 1.25,
                fillColor: info.color,
                fillOpacity: 0.95
              }}
            >
              <Tooltip direction="top" offset={[0, -baseR]}>
                <div className="lt-d">District {s.d} · {s.city}</div>
                {s.n}
              </Tooltip>
            </CircleMarker>
          );
        })}

        {Object.keys(DISTRICT_LATLNG).map(d => {
          const g = DISTRICT_LATLNG[d];
          const info = DISTRICTS[d];
          return (
            <Marker
              key={`mark-${d}`}
              position={g.center}
              icon={makeDistrictIcon(d, info.color, g.count)}
            >
              <Tooltip direction="top" offset={[0, -22]}>
                District {d} · {info.region}
              </Tooltip>
              <Popup className="fldeca-popup" maxWidth={300}>
                <div className="card">
                  <span
                    className="card-badge"
                    style={{ background: info.color, color: readableOn(info.color) }}
                  >
                    District {d}
                  </span>
                  <h3 className="card-name">{info.officer.name}</h3>
                  <p className="card-role">Florida DECA Vice President · {info.region}</p>

                  <div className="card-row">
                    <span className="card-label">School</span>
                    <span className="card-value">{info.officer.school}</span>
                  </div>
                  <div className="card-row">
                    <span className="card-label">Email</span>
                    <span className="card-value mono">{info.officer.email}</span>
                  </div>
                  <div className="card-row">
                    <span className="card-label">Chapters</span>
                    <span className="card-value">{g.count} schools</span>
                  </div>

                  <div className="card-actions">
                    <a className="card-btn primary" href={`mailto:${info.officer.email}`}>Email Officer</a>
                    <a className="card-btn secondary" href={info.officer.link}>District {d} Info →</a>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default App;
