const userLoginSampleTrueData = {
	email: 'tony@stark.com',
	password: 'password',
};

const userLoginSampleFalseData = {
	email: 'tony@stark.com',
	password: 'password123',
};

const userLoginSampleNullData = {
	email: null,
	password: null,
};

const userSignUpSampleTrueData = {
	name: 'test',
	email: 'test@mail.com',
	password: 'password123',
	passwordConfirmation: 'password123',
};

const userSignUpSampleFalseData = {
	name: 'test',
	email: 'test@mail.com',
	password: 'password123',
	passwordConfirmation: 'password',
};

const userSignUpSampleNameNullData = {
	name: null,
	email: 'test@mail.com',
	password: 'password123',
	passwordConfirmation: 'password',
};

const userSignUpSampleEmailNullData = {
	name: 'test',
	email: null,
	password: 'password123',
	passwordConfirmation: 'password',
};

const userSignUpSamplePasswordNullData = {
	name: 'test',
	email: 'test@mail.com',
	password: null,
	passwordConfirmation: 'password',
};

const userSignUpSamplePasswordConfirmationNullData = {
	name: 'test',
	email: 'test@mail.com',
	password: 'password123',
	passwordConfirmation: null,
};

export {
	userLoginSampleTrueData,
	userLoginSampleFalseData,
	userLoginSampleNullData,
	userSignUpSampleTrueData,
	userSignUpSampleFalseData,
	userSignUpSampleNameNullData,
	userSignUpSampleEmailNullData,
	userSignUpSamplePasswordNullData,
	userSignUpSamplePasswordConfirmationNullData,
};
