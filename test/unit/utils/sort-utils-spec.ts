import {sortArray, sortKeys} from '../../../src/utils/sort-utils';

describe('sort-utils', () => {
    describe('sortKeys', () => {
        it('should sort keys of the object in ascending order', () => {
            expect(sortKeys({b: '1', a: '2'})).toEqual([{key: 'a', value: '2'}, {key: 'b', value: '1'}]);
        });
    });

    describe('sortArray', () => {
        it('should sort case-insensitively array of the object in ascending order', () => {
            expect(sortArray(['b', 'a'])).toEqual(['a', 'b']);
            expect(sortArray(['B', 'a'])).toEqual(['a', 'B']);
        });
    });
});
