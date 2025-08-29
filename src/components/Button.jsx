const Button = ({ onClick, text = "Click Me", className = "" }) => {
	return (
		<button
			type="button"
			className={`relative z-10 text-3xl font-bold bg-transparent text-white py-4 px-8 border-2 border-white transition-all duration-300 cursor-pointer btn-hover-active ${className}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
