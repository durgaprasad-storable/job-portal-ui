const Tooltip = ({ text, children, className = "" }) => {
  return (
    <span className={`group relative inline-block ${className}`}>
      {children}

      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-56
                   -translate-x-1/2 scale-95 rounded-lg bg-gray-900 dark:bg-gray-700
                   px-3 py-2 text-xs font-normal leading-snug text-white shadow-lg
                   opacity-0 transition-all duration-300
                   group-hover:scale-100 group-hover:opacity-100
                   group-focus-within:scale-100 group-focus-within:opacity-100"
      >
        {text}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700" />
      </span>
    </span>
  );
};

export default Tooltip;
