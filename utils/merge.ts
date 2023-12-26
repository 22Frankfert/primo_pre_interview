function merge(collection_1: number[], collection_2: number[]): number[] {
	// Combine two collections in to an unsorted collection
	let combinedCollection: number[] = [...collection_1, ...collection_2];

	// Perform bubble sort
	for (let i = 0; i < combinedCollection.length; i++) {
		for (let j = i + 1; j < combinedCollection.length; j++) {
			// swap place of two numbers in the collection to ascending order
			if (combinedCollection[i] > combinedCollection[j]) {
				let temp = combinedCollection[i];
				combinedCollection[i] = combinedCollection[j];
				combinedCollection[j] = temp;
			}
		}
	}

	// return the sorted collection
	return combinedCollection;
}
export { merge };
