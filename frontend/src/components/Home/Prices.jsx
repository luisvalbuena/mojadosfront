import React from "react";
import { Calculator, Euro, Banknote, Wallet } from "lucide-react";

export default function Prices() {
  return (
    <section id="precios" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Precios & Financiación
          </h2>

          <p className="text-gray-600 mt-3">
            Accede a una villa moderna, eficiente y lista para personalizar, desde solo 120.000 €.  
            Financiación disponible desde <strong>350 €/mes</strong> y entrada desde <strong>15.000 €</strong>.
          </p>
        </div>

        {/* Cards Container */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">

          {/* Price Card */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all">
            <div className="flex justify-center mb-4">
              <Euro size={42} className="text-[#0FA958]" />
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              Precio desde
            </h3>

            <p className="text-4xl font-bold text-[#0FA958] text-center mt-2">
              120.000 €
            </p>

            <p className="mt-4 text-gray-600 text-center">
              Villas modernas en parcelas privadas de 150 m².
            </p>
          </div>

          {/* Down Payment Card */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all">
            <div className="flex justify-center mb-4">
              <Wallet size={42} className="text-[#0FA958]" />
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              Entrada desde
            </h3>

            <p className="text-4xl font-bold text-[#0FA958] text-center mt-2">
              15.000 €
            </p>

            <p className="mt-4 text-gray-600 text-center">
              Aporta lo mínimo y financia cómodamente el resto.
            </p>
          </div>

          {/* Financing Card */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all">
            <div className="flex justify-center mb-4">
              <Banknote size={42} className="text-[#0FA958]" />
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              Financiación desde
            </h3>

            <p className="text-4xl font-bold text-[#0FA958] text-center mt-2">
              350 €/mes
            </p>

            <p className="mt-4 text-gray-600 text-center">
              Condiciones flexibles y asesoramiento personalizado.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all">
            <div className="flex justify-center mb-4">
              <Calculator size={42} className="text-[#0FA958]" />
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              Calcula tu cuota
            </h3>

            <p className="text-gray-600 text-center mt-3">
              Descubre cuánto pagarías según el tipo de villa y financiación.
            </p>

            <button className="mt-6 w-full bg-[#0FA958] hover:bg-[#0d8e4a] text-white font-semibold py-3 rounded-xl transition-all">
              Calcular mi cuota
            </button>
          </div>

        </div>

        {/* Small note */}
        <p className="text-center text-gray-500 text-sm mt-10">
          *Asesoramiento financiero disponible sin compromiso.
        </p>

      </div>
    </section>
  );
}
