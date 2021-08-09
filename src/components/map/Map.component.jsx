import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const Map = ({ coordinates }) => {
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  const [center, setCenter] = useState([0, 0]);
  const [content, setContent] = useState("");
  const [marker, setMarker] = useState([
    { markerOffset: -30, name: "Lviv", coordinates: [24.02324, 49.83826] },
  ]);
  useEffect(() => {
    setCenter([coordinates.lon, coordinates.lat]);
    setMarker((prevState) => [
      {
        markerOffset: -30,
        name: coordinates.name,
        coordinates: [coordinates.lon, coordinates.lat],
      },
    ]);
  }, [coordinates]);

  return (
    <div className="map">
      <ComposableMap
        data-tip=""
        projectionConfig={{
          scale: 1100,
          center: center,
        }}
      >
        <Geographies
          geography={geoUrl}
          fill="#D6D6DA"
          stroke="#FFFFFF"
          strokeWidth={0.5}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { NAME } = geo.properties;
                  setContent(NAME);
                }}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#5b86e5",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
                onMouseLeave={() => {
                  setContent("");
                }}
              />
            ))
          }
        </Geographies>{" "}
        {marker.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <g
              fill="none"
              stroke="#5b86e5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{
                fontFamily: "system-ui",
                fontSize: "24px",
                fill: "#5b86e5",
              }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default Map;
