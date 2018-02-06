import * as R from 'ramda';

export const hasSelectedType = (state: any) => !R.isEmpty(R.path(['types', 'selectedType'], state));

export const getAdditionalTypeInformation = (state: any) => {
    const selectedType = R.path(['types', 'selectedType'], state);
    return selectedType && R.omit(['interfaces', 'properties', 'superTypes'], selectedType);
};

export const getSelectedTypeInterfaces = (state: any) => R.pathOr([], ['types', 'selectedType', 'interfaces'], state);
export const getSelectedTypeProperties = (state: any) => R.pathOr([], ['types', 'selectedType', 'properties'], state);
export const getSelectedTypeSuperTypes = (state: any) => R.pathOr([], ['types', 'selectedType', 'superTypes'], state);
