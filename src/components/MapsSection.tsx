import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapsSection = () => {
  // Coordinates for Taman Nirwana, Pengasinan, Bekasi
  const position: [number, number] = [-6.2767720, 107.0146363];

  useEffect(() => {
    // Ensure Leaflet CSS is loaded
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section id="lokasi" className="py-24 md:py-36 bg-mosque-dark scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8">

        <div className="max-w-7xl mx-auto space-sacred">
          {/* Sacred Map Container */}
          <div className="card-sacred p-3 animate-islamic-slide-up">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-islamic-primary group"
                >
            <div className="rounded-lg overflow-hidden shadow-sm">
              <MapContainer
                center={position}
                zoom={16}
                style={{ height: "520px", width: "100%" }}
                className="z-0"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup className="custom-popup">
                    <div className="text-center p-6 min-w-[320px]">
                      <div className="w-20 h-20 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-islamic-heading mb-4 text-xl">Masjid Raudhatul Jannah</h3>
                      <div className="text-islamic-body space-y-3">
                        <p className="font-medium text-primary">Taman Nirwana</p>
                        <div className="leading-relaxed space-y-1">
                          <p>Jl. Nirwana 6, RT.006/RW.019</p>
                          <p>Pengasinan, Rawalumbu</p>
                          <p>Kota Bekasi, Jawa Barat 17115</p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
                </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapsSection;
