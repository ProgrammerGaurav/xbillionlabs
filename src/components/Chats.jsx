import React from "react";
import Grid from "@mui/material/Grid";
import ChatBox from "./ChatBox";
import ChatList from "./ChatList";

const Chats = () => {
	const [profiles, setProfiles] = React.useState([]);
	const [selectedChat, setSelectedChat] = React.useState(0);
	const [chats, setChats] = React.useState([]);
	const [currentChats, setCurrentChats] = React.useState([]);

	React.useEffect(() => {
		fetch("https://api.jsonbin.io/b/61d47e2d2675917a6289eb0c")
			.then((res) => res.json())
			.then((data) => {
				setProfiles(data.data.conversations);
			});
		fetch("https://api.jsonbin.io/b/61d47e752675917a6289eb3a")
			.then((res) => res.json())
			.then((data) => {
				setChats(data.data.chats);
			});
	}, []);

	React.useEffect(() => {
		if (profiles.length > 0) {
			const currentNewChats = chats.filter((chat) => chat.conversationId === profiles[selectedChat].id);
			setCurrentChats(currentNewChats);
		}
	}, [selectedChat, profiles, chats]);

	return (
		<Grid container sx={{ mt: 2 }} spacing={1} className="chats">
			<Grid item md={4} xs={12}>
				<ChatList profiles={profiles} selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
			</Grid>
			<Grid item md={8} xs={12}>
				<ChatBox
					currentChats={currentChats}
					setCurrentChats={setCurrentChats}
					profiles={profiles}
					selectedChat={selectedChat}
				/>
			</Grid>
		</Grid>
	);
};

export default Chats;
