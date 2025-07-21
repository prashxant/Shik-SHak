export default function Hero() {
  return (
    <div className="flex mt-3 items-center justify-center max-w-md rounded-xl border-2 border-gray-400 p-4 hover:bg-gray-100 transition-shadow shadow-md">
      <span className="text-lg font-medium">Thinking about incorporating?</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 ml-3 text-gray-700"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75
             9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28
             10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06
             1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72
             1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
        />
      </svg>
    </div>
  );
}
