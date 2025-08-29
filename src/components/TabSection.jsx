import { useState } from "react";
import Button from "./Button";
import CssArtApple from "./CssArtApple";
import CssArtHeart from "./CssArtHeart";
import CssArtNotes from "./CssArtNotes";
import Message from "./Message";

const TabSection = () => {
	const [isActive, setIsActive] = useState(1);

	return (
		<div className="w-full  flex flex-col items-center justify-center max-w-[1200px] px-10 py-10 tab-section">
			{/* Buttons */}
			<div className="flex justify-center gap-5 flex-wrap">
				<Button
					text="Css Art 01"
					onClick={() => setIsActive(1)}
					className={isActive === 1 ? "btn-hover-active-tab" : ""}
				/>
				<Button
					text="Css Art 02"
					onClick={() => setIsActive(2)}
					className={isActive === 2 ? "btn-hover-active-tab" : ""}
				/>
				<Button
					text="Css Art 03"
					onClick={() => setIsActive(3)}
					className={isActive === 3 ? "btn-hover-active-tab" : ""}
				/>
			</div>

			{/* Tabs */}
			<div className="relative w-full max-w-[1110px] min-h-[320px] mt-20 tabs-container">
				{/* Tab 01 */}
				<div
					className={`absolute top-0 left-0 w-full flex justify-between items-center gap-10 py-15 px-20 outline-4 outline-dashed outline-red-primary transition-opacity duration-300 tab-content ${
						isActive === 1 ? "opacity-100" : "opacity-0"
					}`}
				>
					<Message
						text="Heart"
						className="w-full max-w-[500px] message-section-04"
					/>
					<CssArtHeart />
				</div>

				{/* Tab 02 */}
				<div
					className={`absolute top-0 left-0 w-full flex justify-between items-center gap-10 py-15 px-20 outline-4 outline-dashed outline-red-primary transition-opacity duration-300 tab-content ${
						isActive === 2 ? "opacity-100" : "opacity-0"
					}`}
				>
					<Message
						text="Apple"
						className="w-full max-w-[500px] message-section-04"
					/>
					<CssArtApple />
				</div>

				{/* Tab 03 */}
				<div
					className={`absolute top-0 left-0 w-full flex justify-between items-center gap-10 py-15 px-20 outline-4 outline-dashed outline-red-primary transition-opacity duration-300 tab-content ${
						isActive === 3 ? "opacity-100" : "opacity-0"
					}`}
				>
					<Message
						text="Notes"
						className="w-full max-w-[500px] message-section-04"
					/>
					<CssArtNotes />
				</div>
			</div>
		</div>
	);
};

export default TabSection;
