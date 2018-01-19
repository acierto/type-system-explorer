import * as R from 'ramda';

export const getSelectedTypeInterfaces = (state: any) => R.pathOr([], ['types', 'selectedType', 'interfaces'], state);
export const getSelectedTypeProperties = (state: any) => R.pathOr([], ['types', 'selectedType', 'properties'], state);
export const getSelectedTypeSuperTypes = (state: any) => R.pathOr([], ['types', 'selectedType', 'superTypes'], state);
