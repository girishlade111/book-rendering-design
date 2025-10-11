"use client"

import type React from "react"

import { useState } from "react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showCredits, setShowCredits] = useState(false)

  return (
    <>
      {children}
      <footer className="md:fixed p-5 md:p-0 md:bottom-4 md:left-4 text-xs text-white/40 z-50">
        <div className="relative text-slate-300">
          Built in{" "}
          <a href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 underline">
            v0
          </a>{" "}
          -{" "}
          <button onClick={() => setShowCredits(!showCredits)} className="hover:text-white/60 underline cursor-pointer">
            Credits
          </button>
          {showCredits && (
            <div className="absolute bottom-full left-0 mb-2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 min-w-[280px] text-white/80">
              <div className="space-y-2">
                <div>
                  Built and designed in{" "}
                  <a
                    href="https://v0.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80 underline"
                  >
                    v0
                  </a>
                </div>
                <div>
                  Original idea & inspiration:{" "}
                  <a
                    href="https://press.stripe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80 underline"
                  >
                    Stripe Press
                  </a>
                </div>

                <div>
                  Cover by{" "}
                  <a
                    href="https://bfl.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80 underline"
                  >
                    BFL FLUX
                  </a>
                </div>

                <div>
                  Model by{" "}
                  <a
                    href="https://sketchfab.com/3d-models/book-red-92141799863342578fc3da5afa10c01e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80 underline"
                  >
                    Amigos3D
                  </a>
                </div>
                <div>Thanks to Grok and o3 for bouncing ideas</div>
              </div>
            </div>
          )}
        </div>
      </footer>
    </>
  )
}
