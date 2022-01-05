import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import DoneIcon from "@mui/icons-material/Done";

const ChatBox = ({ currentChats, setCurrentChats, profiles, selectedChat }) => {
	const [message, setMessage] = React.useState("");
	const [disableInput, setDisableInput] = React.useState(false);
	React.useEffect(() => {
		setDisableInput(false);
	}, [currentChats]);
	return (
		<Card className="card chatbox">
			{currentChats.map((chat, i) => (
				<div
					style={{ textAlign: chat.userType === "user" ? "right" : "left" }}
					className="chatboxcontainer"
					key={i}
				>
					<Card className="messege">{chat.message}</Card>
					<div className="date">{new Date(chat.createdAt).toDateString()}</div>
				</div>
			))}
			<Button
				variant="contained"
				startIcon={disableInput ? <DoneIcon /> : <SaveIcon />}
				className="solved-btn"
				onClick={() => {
					setDisableInput(true);
				}}
			>
				mark as solved
			</Button>
			<TextField
				id="outlined-start-adornment"
				className="input"
				sx={{ m: 1, width: "25ch" }}
				onChange={(e) => setMessage(e.target.value)}
				onKeyPress={(e) => {
					if (e.key === "Enter") {
						if (message === "") {
							return;
						}
						setCurrentChats([
							...currentChats,
							{
								chatTypeId: 1,
								message: message,
								userType: "user",
								createdAt: Date(),
								conversationId: profiles[selectedChat].id,
							},
						]);
						setMessage("");
					}
				}}
				value={message}
				disabled={disableInput}
				InputProps={{
					startAdornment: <AttachFileIcon />,
					endAdornment: (
						<SendIcon
							className={message === "" ? "send-btn-dis" : "send-btn"}
							disabled={true}
							onClick={() => {
								if (message === "") {
									return;
								}
								setCurrentChats([
									...currentChats,
									{
										chatTypeId: 1,
										message: message,
										userType: "user",
										createdAt: Date(),
										conversationId: profiles[selectedChat].id,
									},
								]);
								setMessage("");
							}}
						/>
					),
				}}
			/>
		</Card>
	);
};

export default ChatBox;
