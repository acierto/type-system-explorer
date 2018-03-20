import {sortArray, sortByName, sortKeys} from '../../../src/utils/sort-utils';

describe('sort-utils', () => {
    describe('sortArray', () => {
        it('should sort case-insensitively array of the object in ascending order', () => {
            expect(sortArray(['b', 'a'])).toEqual(['a', 'b']);
            expect(sortArray(['B', 'a'])).toEqual(['a', 'B']);
        });
    });
    describe('sortKeys', () => {
        it('should sort case-insensitively keys of the object in ascending order', () => {
            expect(sortKeys({b: '1', A: '2'})).toEqual([{key: 'A', value: '2'}, {key: 'b', value: '1'}]);
        });
    });
    describe('sortByName', () => {
        it('should sort case-insensitively object by name key', () => {
            expect(sortByName([{name: 'b'}, {name: 'a'}])).toEqual([{name: 'a'}, {name: 'b'}]);
            expect(sortByName([{name: 'C'}, {name: 'b'}])).toEqual([{name: 'b'}, {name: 'C'}]);
        });
    });
});
