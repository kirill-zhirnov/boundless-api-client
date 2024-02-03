import {describe, expect, test} from '@jest/globals';
import {AxiosFetchAdapter, IAdapterNegativeResponse} from '../src/axiosFetchAdapter';

describe('Adapter should act like Axios', () => {
	test('Should fetch JSON and return AXIOs like response', async () => {
		const result = await new AxiosFetchAdapter('https://httpbin.org').execute('GET', '/json')

		expect(result.ok).toEqual(true);
		expect(result.status).toEqual(200);
		expect(result.statusText).toEqual('OK');

		expect(result).toHaveProperty('data');
		expect(result.data).toHaveProperty('slideshow');

		expect(result).toHaveProperty('headers');
		expect(result.headers).toHaveProperty('content-type');
		expect(result.headers['content-type']).toEqual('application/json');
	});

	test('Should process errors in Axios like ways', async () => {
		let isError = false;
		let err: IAdapterNegativeResponse|null = null;
		try {
			await new AxiosFetchAdapter('https://httpbin.org').execute('GET', '/bearer')
		} catch (e) {
			err = e as unknown as IAdapterNegativeResponse;
			isError = true;
		}

		expect(isError).toBe(true);

		expect(err).toHaveProperty('isAxiosError');
		expect(err!.isAxiosError).toBe(true);
		expect(err!.message).toBe('Request failed with status code 401');

		expect(err).toHaveProperty('response');
		expect(err!.response.ok).toBe(false);
		expect(err!.response.status).toBe(401);
		expect(err!.response.statusText).toBe('UNAUTHORIZED');

		expect(err!.response).toHaveProperty('headers');
		expect(err!.response.headers['content-type']).toBe('text/html; charset=utf-8');
		expect(err!.response).toHaveProperty('data');

		expect(err!.response.data).toBe('');
	});

	test('Should accept extra Headers', async () => {
		const result = await new AxiosFetchAdapter('https://httpbin.org', {
			'Authorization': 'Bearer dev'
		})
			.execute('GET', '/bearer');

		expect(result.ok).toEqual(true);
		expect(result.data).toEqual({
			authenticated: true,
			token: 'dev'
		});
	});

	test('Should accept extra Params', async () => {
		const result = await new AxiosFetchAdapter('https://httpbin.org', {}, {
			referrer: 'https://boundless.test/'
		})
			.execute('GET', '/headers');

		expect(result.ok).toEqual(true);
		expect(result.data.headers.Referer).toEqual('https://boundless.test/');
	});

	test('Should POST JSON with right headers', async () => {
		const result = await new AxiosFetchAdapter('https://httpbin.org')
			.execute('POST', '/anything', {a: 'b', boundless: 'test'});

		expect(result.data.method).toEqual('POST');
		expect(result.data.json).toEqual({a: 'b', boundless: 'test'});

		const resultPOST = await new AxiosFetchAdapter('https://httpbin.org')
			.post('/anything', {c: 'd', some: {sub: 'val'}});

		expect(resultPOST.data.method).toEqual('POST');
		expect(resultPOST.data.json).toEqual({c: 'd', some: {sub: 'val'}});

		const resultPUT = await new AxiosFetchAdapter('https://httpbin.org')
			.put('/anything', {another: 'val'});

		expect(resultPUT.data.method).toEqual('PUT');
		expect(resultPUT.data.json).toEqual({another: 'val'});

		const resultPATCH = await new AxiosFetchAdapter('https://httpbin.org')
			.patch('/anything', {ttt: 123});

		expect(resultPATCH.data.method).toEqual('PATCH');
		expect(resultPATCH.data.json).toEqual({ttt: 123});
	});

	test('Should send out FormData', async () => {
		const data = new FormData();
		data.append('some', 'value');

		const resultPOST = await new AxiosFetchAdapter('https://httpbin.org')
			.post('/anything', data);

		expect(resultPOST.data.form).toEqual({some: 'value'});
	});

	test('Delete Requests', async () => {
		const result = await new AxiosFetchAdapter('https://httpbin.org')
			.execute('DELETE', '/anything?a=b&c=d');

		expect(result.data.method).toEqual('DELETE');
		expect(result.data.url).toEqual('https://httpbin.org/anything?a=b&c=d');

		const resultDel = await new AxiosFetchAdapter('https://httpbin.org')
			.delete( '/anything?c=2');

		expect(resultDel.data.method).toEqual('DELETE');
		expect(resultDel.data.url).toEqual('https://httpbin.org/anything?c=2');
	});

	test('GET should accept query params as a param key in axios like config', async () => {
		const result = await new AxiosFetchAdapter('https://httpbin.org')
			.get('/anything', {params: {'someKey': 'val'}});

		expect(result.data.method).toEqual('GET');
		expect(result.data.args).toEqual({someKey: 'val'});
		expect(result.data.url).toEqual('https://httpbin.org/anything?someKey=val');
	});
});