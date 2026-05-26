import { useState } from "react"
import { Search, Building2, Package } from "lucide-react"

export default function InputForm({ onSubmit, isLoading }) {
  const [companyName, setCompanyName] = useState("")
  const [product, setProduct] = useState("")

  const handleSubmit = () => {
    if (!companyName.trim() || !product.trim()) return
    onSubmit({ company_name: companyName, product })
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-4">
          <Search className="w-8 h-8 text-blue-400" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">
          Sales Intelligence
          <span className="text-blue-400"> Agent</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Enter a company and your product to get AI powered sales intelligence
        </p>
      </div>

      {/* Form */}
      <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
        {/* Company Name */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-2">
            <Building2 className="w-4 h-4 text-blue-400" />
            Target Company Name
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="e.g. Stripe, Shopify, Notion..."
            disabled={isLoading}
            className="w-full bg-gray-900/80 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200 disabled:opacity-50"
          />
        </div>

        {/* Product */}
        <div className="mb-8">
          <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-2">
            <Package className="w-4 h-4 text-blue-400" />
            Your Product or Service
          </label>
          <textarea
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="e.g. AI powered customer support chatbot that reduces response times..."
            disabled={isLoading}
            rows={3}
            className="w-full bg-gray-900/80 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200 disabled:opacity-50 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isLoading || !companyName.trim() || !product.trim()}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group"
        >
          <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
          {isLoading ? "Agent is running..." : "Generate Sales Intelligence"}
        </button>
      </div>
    </div>
  )
}