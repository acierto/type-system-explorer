import * as R from 'ramda';

export const isAdvancedFilterOn = (state: any) => R.pipe(
    R.keys,
    R.reduce(
        (acc: boolean, key: string) =>
            R.or(acc, !R.isEmpty(state.advancedSearch.applied[key]))
        , false)
)(state.advancedSearch.applied);