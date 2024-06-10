import { Option, Select } from '@material-tailwind/react';
import React, { useMemo } from 'react';

const STARTING_YEAR = 2010;

// https://stackoverflow.com/questions/1575271/range-of-years-in-javascript-for-a-select-box
function getListOfYears() {
	const currentYear = new Date().getFullYear();
	const years = [];
	let startYear = STARTING_YEAR;
	while (startYear <= currentYear) {
		years.push(startYear.toString());
		startYear += 1;
	}
	return years;
}

export default function StandingMenus({ props }) {
	const { selectedYear, setSelectedYear, selectedStanding, setSelectedStanding } = props;
	const yearList = useMemo(() => getListOfYears(), []);

	return (
		<div className='flex flex-col justify-between w-1/3 lg:flex-row lg:space-x-5'>
			<div className='mb-4'>
				<Select
					value={selectedYear}
					onChange={(year) => {
						setSelectedYear(year);
					}}
					label='Select Year'
				>
					{yearList.map((year) => (
						<Option key={year} value={year}>
							{year}
						</Option>
					))}
				</Select>
			</div>
			<div className='mb-4'>
				<Select
					value={selectedStanding}
					onChange={(value) => setSelectedStanding(value)}
					label='Select Standing'
				>
					<Option value='drivers'>Drivers</Option>
					<Option value='constructors'>Constructors</Option>
				</Select>
			</div>
		</div>
	);
}
