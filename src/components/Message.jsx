const Message = ({ text, className = "" }) => {
	return (
		<p
			className={`w-full text-center text-[130px] font-bold text-primary-dark uppercase leading-[130px] text-shadow ${className}`}
		>
			{text}
		</p>
	);
};

export default Message;
