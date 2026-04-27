import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        
        {/* Spinner */}
        <FaSpinner className="text-3xl text-blue-500 animate-spin" />

        {/* Text */}
        <p className="text-gray-500 font-medium tracking-wide">
          Loading news...
        </p>

      </div>
    </div>
  );
};

export default Loading;