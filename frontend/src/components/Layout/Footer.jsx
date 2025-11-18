import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Villas de Mojados
          </h2>
          <p className="text-gray-400 mt-3">
            Promoción de 200 villas de alta eficiencia en Mojados.
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="text-lg font-semibold text-white">Enlaces</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="/" className="hover:text-[#0FA958]">Inicio</a></li>
            <li><a href="#tipologias" className="hover:text-[#0FA958]">Viviendas</a></li>
            <li><a href="#ubicacion" className="hover:text-[#0FA958]">Ubicación</a></li>
            <li><a href="#contacto" className="hover:text-[#0FA958]">Contacto</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold text-white">Legal</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-[#0FA958]">Aviso legal</a></li>
            <li><a href="#" className="hover:text-[#0FA958]">Política de privacidad</a></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Villas de Mojados — Todos los derechos reservados.
      </div>
    </footer>
  );
}
