import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function Filters() {
	return (
		<Box sx={{ flexGrow: 1 }} className="filter">
			<Card className="card">
				<Grid container spacing={2}>
					{[...Array(4)].map((_, i) => (
						<Grid item md={3} xs={12} key={i}>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">Select</InputLabel>
								<Select labelId="demo-simple-select-label" id="demo-simple-select" label="Select">
									<MenuItem value={10}>1</MenuItem>
									<MenuItem value={20}>2</MenuItem>
									<MenuItem value={30}>3</MenuItem>
								</Select>
								<FormHelperText>Please select your query type</FormHelperText>
							</FormControl>
						</Grid>
					))}
					<div className="buttons">
						<Button variant="text">Cancel</Button>
						<Button startIcon={<SendIcon />} disabled>
							Apply
						</Button>
					</div>
				</Grid>
			</Card>
		</Box>
	);
}
