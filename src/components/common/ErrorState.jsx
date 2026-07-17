function ErrorState({
  title = "Something went wrong",
  message = "Please try again later.",
  onRetry,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-3xl font-bold text-red-600">
        {title}
      </h2>

      <p className="mt-3 text-gray-600">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
        >
          Retry
        </button>
      )}
    </div>
  );
}

export default ErrorState;