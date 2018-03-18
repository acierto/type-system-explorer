import {SearchCriteria} from '../store/types/modules/search/search';
import * as R from 'ramda';

const filterByCriteria = R.curry((criteria: string[], values: string[]) =>
    R.reduce((acc: boolean, propName: string) =>
            R.and(acc, R.contains(propName, values)),
        true, criteria));

export const filterByFilterCriteria = (types: any[], filterCriteria: SearchCriteria) => {

    let res = types;

    const advancedSearch = filterCriteria.advancedSearch.applied;
    const token = filterCriteria.token;

    if (!R.isEmpty(advancedSearch.propertyNames)) {
        res = R.reduce((acc: any[], type: any) =>
                R.pipe(
                    R.map((prop: any) => prop.name),
                    filterByCriteria(advancedSearch.propertyNames)
                )
                (type.properties) ? [...acc, type] : acc
            , [], res);
    }

    if (!R.isEmpty(advancedSearch.interfaces)) {
        res = R.reduce((acc: any[], type: any) =>
                R.pipe(filterByCriteria(advancedSearch.interfaces))
                (type.interfaces) ? [...acc, type] : acc
            , [], res);
    }

    if (!R.isEmpty(advancedSearch.superTypes)) {
        res = R.reduce((acc: any[], type: any) =>
                R.pipe(filterByCriteria(advancedSearch.superTypes))
                (type.superTypes) ? [...acc, type] : acc
            , [], res);
    }

    if (token) {
        const filterItem = (item: string) => item.toLowerCase().indexOf(token.toLowerCase()) > -1;
        const matched = R.propSatisfies(filterItem, 'type');
        res = R.filter(matched, res);
    }

    return res;
};