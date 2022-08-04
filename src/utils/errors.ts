/* eslint-disable max-classes-per-file */

class APIError extends Error {
	response: unknown;

	name: string;

	constructor(message: string) {
		super(message);
		this.response = JSON.parse(message);
		this.name = 'API Error';
	}
}

class ClientError extends Error {
	constructor(message: string | undefined) {
		super(message);
		this.name = 'Client Error';
	}
}

class InvariantError extends Error {
	constructor(message: string | undefined) {
		super(message);
		this.name = 'Invariant Error';
	}
}

export { APIError, ClientError, InvariantError };
