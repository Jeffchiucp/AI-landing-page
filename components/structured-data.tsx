export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Enterprise AI Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2099-12-31",
    },
    description:
      "Enterprise-grade AI platform with LLM conversations, customizable agents, secure knowledge base, and MCP server support.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "127",
    },
    featureList: [
      "Advanced LLM Conversations",
      "Customizable Agents",
      "Enterprise Knowledge Base",
      "Prompt Templates",
      "MCP Server Support",
      "Enterprise Security",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}