import { Mail, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function EmailCard({ email, companyName }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Split subject and body
  const lines = email.split("\n")
  const subjectLine = lines.find((l) => l.startsWith("Subject:"))
  const bodyLines = lines.filter((l) => !l.startsWith("Subject:"))
  const subject = subjectLine ? subjectLine.replace("Subject:", "").trim() : ""
  const body = bodyLines.join("\n").trim()

  return (
    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700/50">
        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
          <Mail className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h2 className="text-white font-bold text-lg">Outreach Email</h2>
          <p className="text-gray-500 text-sm">{companyName}</p>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="ml-auto flex items-center gap-2 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 rounded-lg px-3 py-2 transition-all duration-200"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-xs font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-xs font-medium">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Email Content */}
      <div className="flex-1 overflow-y-auto pr-2">
        {/* Subject */}
        {subject && (
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl px-4 py-3 mb-4">
            <p className="text-purple-300 text-xs font-medium mb-1">SUBJECT</p>
            <p className="text-white font-semibold text-sm">{subject}</p>
          </div>
        )}

        {/* Body */}
        <div className="bg-gray-900/50 rounded-xl px-4 py-4">
          <p className="text-purple-300 text-xs font-medium mb-3">BODY</p>
          {body.split("\n").map((line, index) => (
            <p
              key={index}
              className={`text-gray-300 text-sm ${
                line.trim() === "" ? "h-3" : "mb-2"
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}