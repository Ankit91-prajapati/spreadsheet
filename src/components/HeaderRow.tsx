const StyledHeaderRow = () => {
  return (
    <div className="flex w-full text-sm font-medium text-gray-700 items-center h-25">
      <div className="flex-1 px-3 py-1 bg-gray-100 rounded-l-md border border-r-0 border-gray-300 flex items-center w-16 ">
        <span className="mr-1">🔗</span> Q3 Financial Overview
        <span className="ml-2 animate-spin text-orange-500">⟳</span>
      </div>

      <div className="flex-1 px-3 py-1 bg-white border-t border-b border-gray-300 flex items-center justify-center">
        {/* empty white column */}
      </div>

      <div className="flex-1 px-3 py-1 bg-blue-100 border border-l border-gray-300 text-center">
        <span role="img" aria-label="like">👍</span> ABC
      </div>

      <div className="flex-1 px-3 py-1 bg-purple-100 border border-l border-gray-300 text-center">
        <span role="img" aria-label="answer">👍</span> Answer a question
      </div>

      <div className="flex-1 px-3 py-1 bg-orange-100 border border-l border-gray-300 text-center rounded-r-md">
        <span role="img" aria-label="extract">👍</span> Extract
      </div>

      <button className="ml-2 w-6 h-6 flex items-center justify-center text-lg font-bold text-green-700 rounded border border-green-500 bg-white hover:bg-green-100">
        +
      </button>
    </div>
  );
};

export default StyledHeaderRow;
