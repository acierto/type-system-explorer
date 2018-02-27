import * as R from 'ramda';

export const getDisplayedTypes = (state: any) => state.types.displayedTypes;

export const getSelectedTypeName = (state: any) => state.selections.selectedType.type;

export const hasSelectedType = (state: any) => !R.isEmpty(R.path(['selections', 'selectedType'], state));
export const hasSelectedProperty = (state: any) => !R.isEmpty(R.path(['selections', 'selectedProperty'], state));

export const getAdditionalTypeInformation = (state: any) => {
    const selectedType = R.path(['selections', 'selectedType'], state);
    return selectedType && R.omit(['interfaces', 'properties', 'superTypes'], selectedType);
};

export const getAllPropertyNames = (state: any) => R.pipe(
    R.reduce((acc: string[], type: any) => [
        ...acc,
        ...R.map((property: any) => property.name, type.properties)
    ], []),
    R.uniq,
    R.sort((n1: string, n2: string) => n1.toLowerCase().localeCompare(n2.toLowerCase()))
)(state.types.all);

export const getAllSuperTypes = (state: any) => R.pipe(
    R.reduce((acc: string[], type: any) => [
        ...acc,
        ...R.map((superType: string) => superType, type.superTypes)
    ], []),
    R.uniq,
    R.sort((n1: string, n2: string) => n1.toLowerCase().localeCompare(n2.toLowerCase()))
)(state.types.all);

export const getAllInterfaces = (state: any) => R.pipe(
    R.reduce((acc: string[], type: any) => [
        ...acc,
        ...R.map((interf: string) => interf, type.interfaces)
    ], []),
    R.uniq,
    R.sort((n1: string, n2: string) => n1.toLowerCase().localeCompare(n2.toLowerCase()))
)(state.types.all);

export const getSelectedProperty = (state: any) => R.pathOr([], ['selections', 'selectedProperty'], state);
export const getSelectedPropertyName = (state: any) => R.pathOr([], ['selections', 'selectedProperty', 'name'], state);

export const getSelectedTypeInterfaces = (state: any) => R.pathOr([], ['selections', 'selectedType', 'interfaces'], state);
export const getSelectedTypeProperties = (state: any) => R.pathOr([], ['selections', 'selectedType', 'properties'], state);
export const getSelectedTypeSuperTypes = (state: any) => R.pathOr([], ['selections', 'selectedType', 'superTypes'], state);

export const isAdvancedFilterOn = (state: any) => R.pipe(
    R.keys,
    R.reduce(
        (acc: boolean, key: string) =>
            R.or(acc, !R.isEmpty(state.search.advancedSearch.applied[key]))
        , false)
)(state.search.advancedSearch.applied);