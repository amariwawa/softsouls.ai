'use client'
import React, { useState } from 'react'
import ZapierChatbot from './ZapierChatbot'

export default function ChatbotLauncher() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chatbot"
        style={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          width: 56,
          height: 56,
          borderRadius: 9999,
          background: '#25D366',
          color: '#000',
          boxShadow: '0 10px 25px rgba(0,0,0,0.35)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C7.582 3 4 6.134 4 9.999c0 2.017.996 3.83 2.594 5.094L6 21l4.309-2.154C10.86 18.95 11.42 19 12 19c4.418 0 8-3.134 8-7s-3.582-9-8-9Z" fill="#fff"/>
        </svg>
      </button>
      {open && (
        <div
          style={{
            position: 'fixed',
            right: 24,
            bottom: 88,
            width: 360,
            height: 520,
            borderRadius: 16,
            overflow: 'hidden',
            background: '#0b0f14',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            zIndex: 1000,
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <ZapierChatbot inline />
        </div>
      )}
    </>
  )
}