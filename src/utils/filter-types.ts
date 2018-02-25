import {AdvancedSearch} from "../store/types/modules/types";
import * as R from "ramda";

const filterByCriteria = R.curry((criteria: string[], values: string[]) =>
    R.reduce((acc: boolean, propName: string) =>
            R.and(acc, R.contains(propName, values)),
        true, criteria));

export const filterByAdvancedFilter = (types: any[], filterCriteria: AdvancedSearch) => {

    let res = types;

    if (!R.isEmpty(filterCriteria.propertyNames)) {
        res = R.reduce((acc: any[], type: any) =>
                R.pipe(
                    R.map((prop: any) => prop.name),
                    filterByCriteria(filterCriteria.propertyNames)
                )
                (type.properties) ? [...acc, type] : acc
            , [], res);
    }

    if (!R.isEmpty(filterCriteria.interfaces)) {
        res = R.reduce((acc: any[], type: any) =>
                R.pipe(filterByCriteria(filterCriteria.interfaces))
                (type.interfaces) ? [...acc, type] : acc
            , [], res);
    }

    if (!R.isEmpty(filterCriteria.superTypes)) {
        res = R.reduce((acc: any[], type: any) =>
                R.pipe(filterByCriteria(filterCriteria.superTypes))
                (type.superTypes) ? [...acc, type] : acc
            , [], res);
    }

    return res;
};