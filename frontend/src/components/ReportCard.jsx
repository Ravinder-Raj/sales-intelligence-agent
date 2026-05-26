import { FileText, TrendingUp } from "lucide-react"

export default function ReportCard({ report, companyName }) {
  // Convert markdown bold **text** to styled text
  const formatReport = (text) => {
    return text.split("\n").map((line, index) => {
      // Handle bold headers **text**
      const parts = line.split(/\*\*(.*?)\*\*/g)
      const formattedLine = parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-white font-semibold">
            {part}
          </span>
        ) : (
          part
        )
      )

      // Check if line is a section header
      const isHeader = line.startsWith("**") && line.endsWith("**")

      return (
        <p
          key={index}
          className={`${
            isHeader
              ? "text-blue-400 font-bold text-base mt-4 mb-1"
              : line.startsWith("*")
              ? "text-gray-300 text-sm pl-3 border-l-2 border-blue-500/30 my-1"
              : "text-gray-400 text-sm my-1"
          }`}
        >
          {formattedLine}
        </p>
      )
    })
  }

  return (
    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700/50">
        <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
          <FileText className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <h2 className="text-white font-bold text-lg">Sales Intelligence Report</h2>
          <p className="text-gray-500 text-sm">{companyName}</p>
        </div>
        <div className="ml-auto flex items-center gap-1 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-1">
          <TrendingUp className="w-3 h-3 text-green-400" />
          <span className="text-green-400 text-xs font-medium">AI Generated</span>
        </div>
      </div>

      {/* Report Content */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <div className="space-y-1">
          {formatReport(report)}
        </div>
      </div>
    </div>
  )
}