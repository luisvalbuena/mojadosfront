import React, { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "/" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Tipologías", href: "#tipologias" },
    { label: "Precios", href: "#precios" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "Galería", href: "#galeria" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      {/* NAV SUPERIOR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-[#0FA958] cursor-pointer">
            Villas de Mojados
          </h1>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#0FA958] transition-all font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white shadow-lg py-4">
            <div className="flex flex-col gap-4 px-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 hover:text-[#0FA958] transition-all font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* NAV INFERIOR SOLO MÓVIL */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t border-gray-200 py-3 px-6 md:hidden flex justify-around items-center">

        {/* Botón Llamar */}
        <a
          href="tel:+34600000000" 
          className="flex flex-col items-center text-[#0FA958]"
        >
          <Phone size={26} />
          <span className="text-xs font-medium mt-1">Llamar</span>
        </a>

        {/* Botón Contactar */}
        <a
          href="#contacto"
          className="flex flex-col items-center text-[#0FA958]"
        >
          <Mail size={26} />
          <span className="text-xs font-medium mt-1">Contacto</span>
        </a>

      </div>
    </>
  );
}
