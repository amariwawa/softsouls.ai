'use client'
import React from "react"

export default function ZapierChatbot({ inline = false }: { inline?: boolean }) {
  const props: Record<string, string> = {
    "chatbot-id": "cmk1o0m4b007ovdbbmvcqc0f9",
  }
  if (!inline) {
    props["is-popup"] = "true"
  }
  return React.createElement("zapier-interfaces-chatbot-embed" as any, props)
}