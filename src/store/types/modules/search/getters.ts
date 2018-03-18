import * as R from 'ramda';
import {SearchCriteria} from "./search";

export const isAdvancedFilterOn = (state: SearchCriteria) => R.pipe(
    R.keys,
    R.reduce(
        (acc: boolean, key: string) =>
            R.or(acc, !R.isEmpty(state.advancedSearch.applied[key]))
        , false)
)(state.advancedSearch.applied);

export const getSelectedInterfaces = (state: SearchCriteria) => state.advancedSearch.applied.interfaces;
export const getSelectedSuperTypes = (state: SearchCriteria) => state.advancedSearch.applied.superTypes;
export const getSelectedPropertyNames = (state: SearchCriteria) => state.advancedSearch.applied.propertyNames;