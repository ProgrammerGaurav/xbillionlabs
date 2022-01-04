import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

const ChatList = ({ profiles, selectedChat, setSelectedChat }) => {
	return (
		<Card sx={{ p: 2 }} className="card">
			{profiles.map((profile, i) => (
				<Paper
					elevation={i === selectedChat ? 3 : 0}
					key={i}
					sx={{ my: 1 }}
					onClick={() => {
						setSelectedChat(i);
					}}
				>
					<Stack direction="row" spacing={2} sx={{ p: 2 }}>
						<Avatar sx={{ width: 70, height: 70 }} src={profile.user.profilePic}></Avatar>
						<div>
							<Typography variant="subtitle2" component="div">
								{profile.user.firstName}
							</Typography>
							<Typography variant="body2">
								{profile.chats.length > 0 ? profile.chats[0].message : ""}
							</Typography>
							<Typography variant="body2">{new Date(profile.updatedAt).toLocaleDateString()}</Typography>
						</div>
					</Stack>
				</Paper>
			))}
		</Card>
	);
};

export default ChatList;
