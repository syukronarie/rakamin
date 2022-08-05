const todoSampleResultData = [
	{
		id: 1,
		title: 'Group Task 1',
		created_by: '1',
		created_at: '2021-04-20T23:47:50.046Z',
		updated_at: '2021-04-20T23:47:50.046Z',
	},
	{
		id: 2,
		title: 'Group Task 2',
		created_by: '1',
		created_at: '2021-04-21T00:04:23.906Z',
		updated_at: '2021-04-21T00:04:23.906Z',
	},
];

const todoSampleArgsData = {
	title: 'Group Task 2',
	description: 'June - Desember',
};

const todoSampleWrongArgsData = {
	title: '\0',
	description: '\0',
};

const todoSampleTitleNullArgsData = {
	title: null,
	description: 'June - Desember',
};

const todoSampleDescNullArgsData = {
	title: 'Group Task 2',
	description: null,
};

const todoSampleCreateResultData = {
	id: 1,
	title: 'Group Task 1',
	created_by: '1',
	created_at: '2021-04-20T23:47:50.046Z',
	updated_at: '2021-04-20T23:47:50.046Z',
};

export {
	todoSampleResultData,
	todoSampleArgsData,
	todoSampleWrongArgsData,
	todoSampleTitleNullArgsData,
	todoSampleDescNullArgsData,
	todoSampleCreateResultData,
};
