const CheckIcon = ({ popular }) => (
    <svg
        className={`w-4 h-4 mt-0.5 shrink-0 ${popular ? "text-green-400" : "text-violet-600"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

export default CheckIcon;