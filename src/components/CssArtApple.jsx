const CssArtApple = () => {
	return (
		<div className="relative w-[240px] h-[200px]">
			<div className="absolute bottom-0 right-[5px] rotate-[25deg] w-[58%] h-[85%] bg-red-primary rounded-[50%]"></div>
			<div className="absolute bottom-0 left-[5px] rotate-[-25deg] w-[58%] h-[85%] bg-red-primary rounded-[50%]"></div>
			<div className="absolute left-1/2 translate-x-[-50%] w-2.5 h-[80%] bg-red-primary leaf"></div>
		</div>
	);
};

export default CssArtApple;
