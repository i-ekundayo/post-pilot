const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center mt-5 h-full">
      <div className="size-25 rounded-full border-t-2 border-b-2 border-t-gray-200 border-b-gray-200 animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
