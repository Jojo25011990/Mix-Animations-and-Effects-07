const Navigation = () => {
	const navLinks = ["Home", "About", "Services", "Team", "Contact"];

	return (
		<nav>
			<ul>
				{navLinks.map((navLink) => (
					<li key={navLink} className="text-center">
						<a
							href="#"
							className="relative text-8xl leading-[105px] text-white uppercase font-[Verdana] font-bold transition-all duration-200 delay-200 link-state"
							data-text={navLink}
						>
							{navLink}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
