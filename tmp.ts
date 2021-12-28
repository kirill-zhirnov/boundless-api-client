const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpSWQiOjEsImNJZCI6ImZSQVBkYjRpc0JNaU54RWg1IiwiaWF0IjoxNjQwMDc0NTYxfQ.UXhFYN6ZyHzMu73woTGodpo2rSFS4anlnn8EvRqsmmh5C_Ul5D9WKjdmharkMw22Q4Kn0cU0eyATiJIZ1ghBNA';
const tokenServer = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpSWQiOjUsImNJZCI6IlJ2TXpLU0oxajZUUHlETFpUIiwiaWF0IjoxNjMzOTU4OTIzfQ.G42Ak7hrdFeD2_7j6NXfKCPjAfzHldHlLlu8jscKtUlGxNvQRjxV_ZA3hVcnErNRTE2R8TkDxALqGtLrDeTDkg';
const request = {"props":{"152155":[606]},"per-page":1, price_min: '100'};

import axios from 'axios';
import {createGetStr} from './src/utils';
import {BoundlessClient} from './src';

const client = new BoundlessClient(tokenServer);

client.catalog.getProducts().then((data) => console.log(data));

// console.log(createGetStr(request));
//
// axios.get(`http://localhost:8080/catalog/products?${createGetStr(request)}`, {
// 	headers: {
// 		Authorization: `Bearer ${token}`
// 	}
// })
// .then(({data}) => {
// 	console.log('data:', data);
// });