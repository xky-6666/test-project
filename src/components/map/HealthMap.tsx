"use client";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents
} from "react-leaflet";

import { useFacilities } from "@/hooks/useFacilities";
import { DEFAULT_MAP_ZOOM, TONGJI_SIPING_CENTER } from "@/lib/mapConfig";
import { FacilityPopup } from "@/components/ui/FacilityPopup";
import type { HealthFacility } from "@/types/facility";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src
});

export type HealthMapProps = {
  facilities?: HealthFacility[];
  onFacilitySelect?: (facility: HealthFacility) => void;
  onMapClick?: (position: { lat: number; lng: number }) => void;
};

function MapClickHandler({
  onMapClick
}: {
  onMapClick?: (position: { lat: number; lng: number }) => void;
}) {
  useMapEvents({
    click(event) {
      onMapClick?.({
        lat: Number(event.latlng.lat.toFixed(6)),
        lng: Number(event.latlng.lng.toFixed(6))
      });
    }
  });

  return null;
}

export function HealthMap({
  facilities,
  onFacilitySelect,
  onMapClick
}: HealthMapProps) {
  const allFacilities = useFacilities();
  const visibleFacilities = facilities ?? allFacilities;

  return (
    <MapContainer
      center={[TONGJI_SIPING_CENTER.lat, TONGJI_SIPING_CENTER.lng]}
      zoom={DEFAULT_MAP_ZOOM}
      scrollWheelZoom
      className="h-[70vh] min-h-[460px] w-full rounded-lg border border-emerald-100 shadow-sm"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapClickHandler onMapClick={onMapClick} />

      {visibleFacilities.map((facility) => (
        <Marker
          key={facility.id}
          position={[facility.location.lat, facility.location.lng]}
          eventHandlers={{
            click: () => onFacilitySelect?.(facility)
          }}
        >
          <Popup>
            <FacilityPopup facility={facility} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
