import React from "react";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1600607682581-50f3d7d6a5ee?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1600585153820-998b5dfad1ae?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1600585153055-3d4dd08e4859?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1600585153710-7d0b5dfad1ae?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1600607682401-3ec830af0c06?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1600585153361-e8f1bbf39b5a?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1600585152778-3d6e9e2ca61c?q=80&w=1200&auto=format",
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Galería de Renders
          </h2>
          <p className="text-gray-600 mt-3">
            Descubre cómo serán las Villas de Mojados a través de imágenes de inspiración y renders de referencia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-200"
            >
              {/* Image */}
              <img
                src={src}
                alt={`Render ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  Ver imagen
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
