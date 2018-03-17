import * as R from 'ramda';

export const getDisplayedTypes = (state: any) => state.displayedTypes;

export const getAllPropertyNames = (state: any) => R.pipe(
    R.reduce((acc: string[], type: any) => [
        ...acc,
        ...R.map((property: any) => property.name, type.properties)
    ], []),
    R.uniq,
    R.sort((n1: string, n2: string) => n1.toLowerCase().localeCompare(n2.toLowerCase()))
)(state.all);

export const getAllSuperTypes = (state: any) => R.pipe(
    R.reduce((acc: string[], type: any) => [
        ...acc,
        ...R.map((superType: string) => superType, type.superTypes)
    ], []),
    R.uniq,
    R.sort((n1: string, n2: string) => n1.toLowerCase().localeCompare(n2.toLowerCase()))
)(state.all);

export const getAllInterfaces = (state: any) => R.pipe(
    R.reduce((acc: string[], type: any) => [
        ...acc,
        ...R.map((interf: string) => interf, type.interfaces)
    ], []),
    R.uniq,
    R.sort((n1: string, n2: string) => n1.toLowerCase().localeCompare(n2.toLowerCase()))
)(state.all);
