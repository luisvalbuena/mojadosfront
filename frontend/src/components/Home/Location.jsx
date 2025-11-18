import React from "react";
import { MapPin, Navigation2, Landmark } from "lucide-react";

export default function Location() {
  const items = [
    { icon: Navigation2, text: "A 2 min de la A-601" },
    { icon: Landmark, text: "A 20 min de Valladolid" },
    { icon: MapPin, text: "Junto al instituto y campo de fútbol" },
  ];

  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Ubicación Estratégica
          </h2>
          <p className="text-gray-600 mt-3">
            Villas de Mojados se encuentra en una zona tranquila, bien comunicada y en pleno crecimiento, 
            ideal para familias que buscan calidad de vida.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Map */}
          <div className="w-full h-[380px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title="Mapa Mojados"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.977777137763!2d-4.598381723618925!3d41.43450317129506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd476b81228f1a8b%3A0x18bbb597f93730b!2sMojados%2C%20Valladolid!5e0!3m2!1ses!2ses!4v1700000000000"
            ></iframe>
          </div>

          {/* List of distances */}
          <div className="flex flex-col justify-center gap-6">
            {items.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-4 p-5 bg-gray-100 rounded-2xl border border-gray-200 hover:shadow-md transition-all"
              >
                <Icon size={38} className="text-[#0FA958]" />
                <p className="text-gray-700 text-lg">{text}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
