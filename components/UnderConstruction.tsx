"use client";

import { useState, useEffect } from "react";

export function UnderConstruction() {
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState({ top: 10, left: 50 });

  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10;
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    setPosition({ top: randomTop, left: randomLeft });
  };

  const handleClick = () => {
    setMessage("🎉 Μπράβο! Το site θα ανοίξει σύντομα 😉");
  };

  // Mobile auto-move
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice && !message) {
      const interval = setInterval(() => {
        moveButton();
      }, 1000); // κάθε 2 δευτερόλεπτα

      return () => clearInterval(interval);
    }
  }, [message]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 relative overflow-hidden">
      <div className="text-center max-w-xl z-10">
        <div className="text-5xl mb-4">🚧</div>
        <h1 className="text-3xl font-bold mb-4">
          Η ιστοσελίδα μας είναι προσωρινά εκτός λειτουργίας
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Πραγματοποιούμε εργασίες συντήρησης και σύντομα θα είμαστε ξανά κοντά σας.
        </p>
        <p className="text-sm text-gray-500 mb-6">© {new Date().getFullYear()} Bytepair</p>
        {message && <div className="mt-4 text-green-400 font-bold">{message}</div>}
      </div>

      {!message && (
        <button
          onMouseEnter={moveButton}
          onClick={handleClick}
          className="absolute bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-all duration-200"
          style={{
            top: `${position.top}%`,
            left: `${position.left}%`,
            transform: "translate(-50%, -50%)",
            position: "absolute",
            zIndex: 50,
          }}
        >
          Πιάσε με!
        </button>
      )}
    </div>
  );
}
