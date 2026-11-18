"use client";

import React, { useEffect } from "react";
import { CheckIcon, CloseIcon } from "@/components/icons/Icons";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1E3A2B] text-white px-4 py-3 rounded-xl shadow-2xl border border-[#2D543F] animate-in fade-in slide-in-from-bottom-3 duration-300">
      <div className="w-6 h-6 rounded-full bg-[#34664c] flex items-center justify-center text-white">
        <CheckIcon className="w-3.5 h-3.5" />
      </div>
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="ml-2 text-white/70 hover:text-white transition-colors"
        aria-label="Close"
      >
        <CloseIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
