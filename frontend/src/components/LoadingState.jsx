const steps = [
  { id: 1, label: "Searching company overview..." },
  { id: 2, label: "Gathering recent news..." },
  { id: 3, label: "Finding pain points..." },
  { id: 4, label: "Analyzing product fit..." },
  { id: 5, label: "Generating sales report..." },
  { id: 6, label: "Writing outreach email..." },
];

export default function LoadingState({ currentStep }) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      {/* Main spinner */}
      <div className="relative w-20 h-20 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-blue-500/20"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-blue-300 animate-spin" 
             style={{ animationDuration: '0.75s' }}></div>
      </div>

      <h3 className="text-blue-400 text-xl font-semibold mb-2">
        Agent is working...
      </h3>
      <p className="text-gray-500 text-sm mb-10">
        Running 6 AI nodes to analyze your target company
      </p>

      {/* Steps */}
      <div className="flex flex-col gap-3 w-full max-w-sm">
        {steps.map((step) => {
          const isDone = currentStep > step.id
          const isActive = currentStep === step.id
          const isPending = currentStep < step.id

          return (
            <div
              key={step.id}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-500 ${
                isDone
                  ? "border-green-500/40 bg-green-500/10"
                  : isActive
                  ? "border-blue-500/60 bg-blue-500/10 animate-pulse"
                  : "border-gray-700/40 bg-gray-800/30"
              }`}
            >
              {/* Icon */}
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                isDone
                  ? "bg-green-500 text-white"
                  : isActive
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-500"
              }`}>
                {isDone ? "✓" : step.id}
              </div>

              {/* Label */}
              <span className={`text-sm ${
                isDone
                  ? "text-green-400"
                  : isActive
                  ? "text-blue-300"
                  : "text-gray-600"
              }`}>
                {step.label}
              </span>

              {/* Active indicator */}
              {isActive && (
                <div className="ml-auto flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}