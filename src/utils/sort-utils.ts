import * as R from 'ramda';

export const sortArray = R.pipe(
    R.sort((v1: string, v2: string) => v1.localeCompare(v2))
);

export const sortKeys = (obj: any) => R.pipe(
    R.keys,
    sortArray,
    R.map((key: string) => ({key, value: obj[key]}))
)(obj);