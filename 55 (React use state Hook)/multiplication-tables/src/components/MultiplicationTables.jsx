import React, { useState } from "react";

export default function MultiplicationTables() {
  const [leftTable, setLeftTable] = useState(2);
  const [rightTable, setRightTable] = useState(2);
  const maxTable = 10;

  const generateTable = (num) => {
    return Array.from({ length: 10 }, (_, i) => ({
      multiplier: i + 1,
      result: num * (i + 1),
    }));
  };

  const handleLeftNext = () => {
    setLeftTable((prev) => (prev < maxTable ? prev + 1 : prev));
  };

  const handleRightNext = () => {
    setRightTable((prev) => (prev < maxTable ? prev + 1 : prev));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Table */}
            <div className="space-y-4">
              <button
                onClick={handleLeftNext}
                disabled={leftTable >= maxTable}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-200"
              >
                Next
              </button>

              <div className="space-y-3">
                {generateTable(leftTable).map((item) => (
                  <div
                    key={item.multiplier}
                    className="text-2xl font-semibold text-indigo-600 bg-indigo-50 p-3 rounded-lg"
                  >
                    {leftTable} × {item.multiplier} = {item.result}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Table */}
            <div className="space-y-4">
              <button
                onClick={handleRightNext}
                disabled={rightTable >= maxTable}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-200"
              >
                Next
              </button>

              <div className="space-y-3">
                {generateTable(rightTable).map((item) => (
                  <div
                    key={item.multiplier}
                    className="text-2xl font-semibold text-indigo-600 bg-indigo-50 p-3 rounded-lg"
                  >
                    {rightTable} × {item.multiplier} = {item.result}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            Left Table: {leftTable} | Right Table: {rightTable}
          </div>
        </div>
      </div>
    </div>
  );
}
