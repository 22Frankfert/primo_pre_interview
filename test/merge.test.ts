import { merge } from '../utils/merge';

describe('Merge function unit test', () => {
	it('Merge two arrays of equal length', () => {
		const collection_1 = [1, 2, 3];
		const collection_2 = [4, 5, 6];
		const result = merge(collection_1, collection_2);
		expect(result).toEqual([1, 2, 3, 4, 5, 6]);
	});
	it('Merge two arrays of different length', () => {
		const collection_1 = [1, 2, 3];
		const collection_2 = [4, 5, 6, 7, 8];
		const result = merge(collection_1, collection_2);
		expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
	});
	it('Merge two arrays with duplicating value', () => {
		const collection_1 = [1, 2, 3];
		const collection_2 = [3, 4, 5];
		const result = merge(collection_1, collection_2);
		expect(result).toEqual([1, 2, 3, 3, 4, 5]);
	});
});
