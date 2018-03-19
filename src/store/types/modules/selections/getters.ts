import * as R from 'ramda';
import {sortKeys} from '../../../../utils/sort-utils';

export const getAdditionalTypeInformation = (state: any) => {
    const selectedType = R.path(['selectedType'], state);
    return selectedType && R.omit(['interfaces', 'properties', 'superTypes'], selectedType);
};

export const getSelectedTypeName = (state: any) => state.selectedType.type;

export const hasSelectedType = (state: any) => !R.isEmpty(R.path(['selectedType'], state));
export const hasSelectedProperty = (state: any) => !R.isEmpty(R.path(['selectedProperty'], state));

export const getSelectedProperty = (state: any) => sortKeys(R.pathOr({}, ['selectedProperty'], state));
export const getSelectedPropertyName = (state: any) => R.pathOr([], ['selectedProperty', 'name'], state);

export const getSelectedTypeInterfaces = (state: any) => R.pathOr([], ['selectedType', 'interfaces'], state);
export const getSelectedTypeProperties = (state: any) => R.pathOr([], ['selectedType', 'properties'], state);
export const getSelectedTypeSuperTypes = (state: any) => R.pathOr([], ['selectedType', 'superTypes'], state);