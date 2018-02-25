import * as R from 'ramda';

export const hasSelectedType = (state: any) => !R.isEmpty(R.path(['types', 'selectedType'], state));
export const hasSelectedProperty = (state: any) => !R.isEmpty(R.path(['types', 'selectedProperty'], state));

export const getAdditionalTypeInformation = (state: any) => {
    const selectedType = R.path(['types', 'selectedType'], state);
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

export const getSelectedProperty = (state: any) => R.pathOr([], ['types', 'selectedProperty'], state);
export const getSelectedPropertyName = (state: any) => R.pathOr([], ['types', 'selectedProperty', 'name'], state);

export const getSelectedTypeInterfaces = (state: any) => R.pathOr([], ['types', 'selectedType', 'interfaces'], state);
export const getSelectedTypeProperties = (state: any) => R.pathOr([], ['types', 'selectedType', 'properties'], state);
export const getSelectedTypeSuperTypes = (state: any) => R.pathOr([], ['types', 'selectedType', 'superTypes'], state);
