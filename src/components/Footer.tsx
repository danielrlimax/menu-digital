import { RESTAURANTE } from "../data/menu";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/5 pb-8 pt-6 text-center px-4">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-3"
        style={{ backgroundColor: RESTAURANTE.cor }}
      >
        {RESTAURANTE.nome.charAt(0)}
      </div>
      <p className="text-white/60 font-bold text-base">{RESTAURANTE.nome}</p>
      <p className="text-white/25 text-xs mt-1">{RESTAURANTE.slogan}</p>
      <div className="flex items-center justify-center gap-4 mt-4 text-white/20 text-xs">
        <span>📞 {RESTAURANTE.telefone}</span>
        <span>·</span>
        <span>📸 {RESTAURANTE.instagram}</span>
      </div>
      <p className="text-white/15 text-xs mt-4">
        Cardápio digital — Peça com o garçom
      </p>
    </footer>
  );
}
