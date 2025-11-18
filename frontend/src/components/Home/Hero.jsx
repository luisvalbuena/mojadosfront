import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600607682581-50f3d7d6a5ee?q=80&w=1200&auto=format')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Villas de Mojados  
        </h1>

        <p className="mt-4 text-lg md:text-xl font-light text-gray-200">
          200 villas en autopromoción desde 120.000 €, con parcelas de 150 m² y eficiencia energética A.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="#contacto"
            className="px-8 py-3 bg-[#0FA958] hover:bg-[#0d8e4a] transition-all rounded-xl font-semibold text-white flex items-center gap-2 shadow-xl"
          >
            Reservar parcela
            <ArrowRight size={18} />
          </a>

          <a
            href="#info"
            className="px-8 py-3 border border-white/60 hover:bg-white/10 transition-all rounded-xl font-medium text-white backdrop-blur-sm"
          >
            Solicitar información
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-200">
          <span className="bg-white/10 px-4 py-2 rounded-lg">1, 2 y 3 dormitorios</span>
          <span className="bg-white/10 px-4 py-2 rounded-lg">Desde 350 €/mes</span>
          <span className="bg-white/10 px-4 py-2 rounded-lg">Reserva: 1.500 €</span>
          <span className="bg-white/10 px-4 py-2 rounded-lg">Calidades excelentes</span>
        </div>
      </div>
    </section>
  );
}
