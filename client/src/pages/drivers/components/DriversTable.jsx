import { Card, Typography } from '@material-tailwind/react';
import DriversRows from './DriversRows';

const DRIVER_TABLE_HEAD = ['Name', 'Team', 'Podiums', 'Wins', 'Championships'];

// https://www.material-tailwind.com/docs/react/table
export default function DriverTable({ drivers }) {
	return (
		<Card className='h-full w-full overflow-clip border-x-[1px]'>
			<table className='w-full min-w-max table-auto text-left'>
				<thead>
					<tr>
						{DRIVER_TABLE_HEAD.map((head) => (
							<th key={head} className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
								<Typography
									variant='small'
									color='blue-gray'
									className='font-normal leading-none opacity-70'
								>
									{head}
								</Typography>
							</th>
						))}
					</tr>
				</thead>
				<DriversRows drivers={drivers} />
			</table>
		</Card>
	);
}
