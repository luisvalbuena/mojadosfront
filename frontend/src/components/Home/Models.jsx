import React from "react";
import { ArrowRight } from "lucide-react";

export default function Models() {
  const models = [
    {
      title: "Villa 1 Dormitorio",
      price: "Desde 120.000 €",
      desc: "Diseñada para parejas o inversión. Espacios modernos y eficientes.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format",
    },
    {
      title: "Villa 2 Dormitorios",
      price: "Financiación desde 350 €/mes",
      desc: "El equilibrio perfecto entre amplitud, diseño y confort.",
      img: "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=1200&auto=format",
    },
    {
      title: "Villa 3 Dormitorios",
      price: "Consultar precio y disponibilidad",
      desc: "La opción ideal para familias que buscan espacio, jardín y personalización.",
      img: "https://images.unsplash.com/photo-1600585153820-998b5dfad1ae?q=80&w=1200&auto=format",
    },
  ];

  return (
    <section id="tipologias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Tipologías de Vivienda
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Elige entre 1, 2 o 3 dormitorios en parcelas privadas de 150 m², con diseño moderno y eficiencia energética A.
        </p>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {models.map(({ title, price, desc, img }) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-56 bg-gray-200">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-7 text-left">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {title}
                </h3>

                <p className="text-[#0FA958] font-semibold mt-1">
                  {price}
                </p>

                <p class-size="text-gray-600 mt-3">
                  {desc}
                </p>

                <button className="mt-6 w-full flex items-center justify-center gap-2 bg-[#0FA958] hover:bg-[#0d8e4a] text-white font-semibold py-3 rounded-xl transition-all">
                  Solicitar dossier
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
