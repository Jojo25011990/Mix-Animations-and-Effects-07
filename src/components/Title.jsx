const Title = ({ isActive, text = "Simple Button", isTabSection = null }) => {
	return isTabSection ? (
		<h2
			className={`w-full text-center text-7xl font-bold title-shadow transition-all duration-300 text-white opacity-100`}
		>
			{text}
		</h2>
	) : (
		<h2
			className={`w-full text-center text-7xl font-bold title-shadow transition-all duration-300 ${
				isActive
					? "translate-y-0 opacity-100"
					: "translate-y-[170px] opacity-0"
			}
			}`}
		>
			{text}
		</h2>
	);
};

export default Title;
