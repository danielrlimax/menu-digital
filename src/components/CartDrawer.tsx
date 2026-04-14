import { useEffect, useState } from "react";
import { MenuItem } from "../data/menu";
import { RESTAURANTE } from "../data/menu";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartDrawerProps {
  open: boolean;
  cartItems: CartItem[];
  onClose: () => void;
  onAdd: (item: MenuItem) => void;
  onRemove: (item: MenuItem) => void;
  onClear: () => void;
}

export default function CartDrawer({
  open,
  cartItems,
  onClose,
  onAdd,
  onRemove,
  onClear,
}: CartDrawerProps) {
  const [visible, setVisible] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true));
      document.body.style.overflow = "hidden";
    } else {
      setVisible(false);
      document.body.style.overflow = "";
      setShowConfirm(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const total = cartItems.reduce((acc, ci) => acc + ci.item.preco * ci.quantity, 0);
  const totalItems = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);

  const formattedTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 280);
  };

  const handleCallWaiter = () => {
    setShowConfirm(true);
    setTimeout(() => {
      setShowConfirm(false);
    }, 3500);
  };

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 transition-all duration-280 ${
        visible ? "bg-black/70 backdrop-blur-sm" : "bg-transparent"
      }`}
      onClick={handleClose}
    >
      <div
        className={`w-full sm:max-w-md bg-[#1a1a1a] sm:rounded-3xl rounded-t-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] transition-all duration-280 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/5 flex-shrink-0">
          <div>
            <h2 className="text-white font-extrabold text-xl">Meu Pedido</h2>
            <p className="text-white/30 text-xs mt-0.5">
              {totalItems > 0
                ? `${totalItems} ${totalItems === 1 ? "item" : "itens"} selecionados`
                : "Nenhum item adicionado"}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white/50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <span className="text-5xl mb-4">🛒</span>
              <p className="text-white/40 font-semibold">Nenhum item no pedido</p>
              <p className="text-white/20 text-sm mt-1">
                Explore o cardápio e adicione seus favoritos!
              </p>
            </div>
          ) : (
            <>
              {cartItems.map((ci) => {
                const itemTotal = new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(ci.item.preco * ci.quantity);

                return (
                  <div
                    key={ci.item.id}
                    className="flex items-center gap-3 bg-white/5 rounded-2xl p-3"
                  >
                    {/* Mini image */}
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#2a2a2a] flex-shrink-0">
                      <img
                        src={ci.item.imagem}
                        alt={ci.item.nome}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold truncate">{ci.item.nome}</p>
                      <p className="text-white/40 text-xs mt-0.5">
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(ci.item.preco)}{" "}
                        cada
                      </p>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => onRemove(ci.item)}
                        className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold flex items-center justify-center transition-colors"
                      >
                        −
                      </button>
                      <span className="text-white font-bold text-sm w-5 text-center">
                        {ci.quantity}
                      </span>
                      <button
                        onClick={() => onAdd(ci.item)}
                        className="w-7 h-7 rounded-full text-white text-sm font-bold flex items-center justify-center transition-colors"
                        style={{ backgroundColor: RESTAURANTE.cor }}
                      >
                        +
                      </button>
                    </div>

                    {/* Item total */}
                    <p className="text-white font-bold text-sm flex-shrink-0 ml-1">{itemTotal}</p>
                  </div>
                );
              })}
            </>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="flex-shrink-0 border-t border-white/5 p-5 space-y-3">
            {/* Observation hint */}
            <div className="p-3 rounded-xl bg-yellow-400/10 border border-yellow-400/20">
              <p className="text-yellow-400/80 text-xs text-center">
                💡 Mostre este pedido ao garçom ou aguarde ele se aproximar
              </p>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-white/40 text-sm">Total estimado</span>
              <span className="text-white font-extrabold text-xl">{formattedTotal}</span>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={onClear}
                className="py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white/60 font-semibold text-sm transition-colors"
              >
                Limpar
              </button>
              <button
                onClick={handleCallWaiter}
                className={`py-3 rounded-2xl text-white font-bold text-sm transition-all active:scale-95 ${
                  showConfirm ? "bg-green-500" : ""
                }`}
                style={!showConfirm ? { backgroundColor: RESTAURANTE.cor } : {}}
              >
                {showConfirm ? "Pedido Realizado" : "Pedir pelo whatsapp"}
              </button>
            </div>

            <p className="text-white/20 text-xs text-center">
              * Valores finais podem variar. O pedido é feito com o garçom.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
