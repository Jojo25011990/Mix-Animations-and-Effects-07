import { useState } from "react";
import Button from "./components/Button";
import Message from "./components/Message";
import Title from "./components/Title";
import Navigation from "./components/Navigation";
import TabSection from "./components/TabSection";

const App = () => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => setIsActive(true);

	return (
		<>
			{/* Section Text Effect */}
			<section className="relative w-full h-screen flex items-center justify-center bg-primary-dark">
				<div>
					<Message
						text={"Instagram Youtube"}
						className="message-section-01"
					/>
					<Message
						text={"Facebook Twitter"}
						className="message-section-01"
					/>
					<Message
						text={"Only Tiktok"}
						className="message-section-01"
					/>
				</div>
			</section>
			{/* End of Section Text Effect */}

			{/* Section Button */}
			<section className="relative w-full h-screen flex flex-col gap-30 items-center justify-center bg-[#222]">
				<Title isActive={isActive} />
				<Button onClick={handleClick} />
			</section>
			{/* End of Section Button */}

			{/* Section Navigation */}
			<section className="relative w-full h-screen flex flex-col gap-30 items-center justify-center bg-[#222] pb-20">
				<Navigation />
			</section>
			{/* End of Section Navigation */}

			{/* Section Navigation */}
			<section className="relative w-full h-auto flex flex-col items-center justify-center text-white bg-[#222] p-5 py-20">
				<Title text="Tab Section Css Art" isTabSection={true} />
				<TabSection />
			</section>
			{/* End of Section Navigation */}
		</>
	);
};

export default App;
