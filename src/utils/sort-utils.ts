import * as R from 'ramda';

export const sortKeys = (obj: any) => R.pipe(
    R.keys,
    R.sort((v1: string, v2: string) => v1.localeCompare(v2)),
    R.map((key: string) => ({key, value: obj[key]}))
)(obj);