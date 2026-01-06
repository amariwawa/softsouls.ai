'use client'
import React, { useEffect, useState } from "react"

export default function ZapierChatbot({ inline = false }: { inline?: boolean }) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const check = () => {
      const defined = typeof window !== 'undefined' && (window as any).customElements?.get('zapier-interfaces-chatbot-embed')
      if (defined) setReady(true)
    }
    check()
    const id = setInterval(check, 500)
    return () => clearInterval(id)
  }, [])

  if (!ready) return null

  const props: any = {
    style: { width: '100%', height: '100%', display: 'block' },
    "chatbot-id": "cmk1o0m4b007ovdbbmvcqc0f9",
  }
  if (!inline) props["is-popup"] = "true"
  return React.createElement("zapier-interfaces-chatbot-embed" as any, props)
}