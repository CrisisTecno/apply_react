import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface TitleBarProps {
	title: string,
}

export default function TitleBar({
	title,
}: TitleBarProps) {
	return(
		<Paper>
			<Box>
				<Typography align="center" variant="h3" paddingTop="10px" paddingBottom="10px">
					{title}
				</Typography>
			</Box>
		</Paper>
	);
}
