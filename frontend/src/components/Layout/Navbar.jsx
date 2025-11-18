import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAV SUPERIOR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-xl shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold cursor-pointer text-[#0FA958]">
            Villas de Mojados
          </h1>

          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#0FA958]"
                    : "text-white hover:text-[#0FA958]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <X size={28} className={scrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu size={28} className={scrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>

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

      {/* NAV INFERIOR — SOLO MÓVIL */}
      <div className="
        fixed bottom-0 left-0 right-0
        z-50 md:hidden
        bg-gradient-to-r from-[#0FA958] to-[#0c8a4d]
        shadow-2xl border-t border-[#0d8e4a]
        py-2 px-6
        flex items-center justify-around
        rounded-t-2xl
      ">
        
        {/* Botón Llamar */}
        <a
          href="tel:+34600000000"
          className="
            flex flex-col items-center justify-center
            text-white
            px-4 py-2
            rounded-xl
            transition-all duration-200
            active:scale-95
          "
        >
          <Phone size={26} />
          <span className="text-xs font-medium mt-1">Llamar</span>
        </a>

        {/* Separador */}
        <div className="h-8 w-px bg-white/30 rounded-lg"></div>

        {/* Botón Contacto */}
        <a
          href="#contacto"
          className="
            flex flex-col items-center justify-center
            text-white
            px-4 py-2
            rounded-xl
            transition-all duration-200
            active:scale-95
          "
        >
          <Mail size={26} />
          <span className="text-xs font-medium mt-1">Contacto</span>
        </a>

      </div>
    </>
  );
}
