import * as R from 'ramda';
import {filterByFilterCriteria} from '../../../src/utils/filter-types';
import {SearchCriteria} from "../../../src/store/types/modules/search/search";

import {types} from './simplified-types';

const emptySearchCriteria: SearchCriteria = {
    advancedSearch: {
        applied: {
            interfaces: [],
            propertyNames: [],
            superTypes: []
        },
        staged: {
            interfaces: [],
            propertyNames: [],
            superTypes: []
        }
    }, token: ''
};

describe('filter-types', () => {
    describe('filterByFilterCriteria', () => {
        it('should filter by token', () => {
            const criteria: SearchCriteria = {...emptySearchCriteria, token: 'aws.ec2'};
            expect(filterByFilterCriteria(types, criteria)).toHaveLength(1);
        });
        it('should return everything if no token specified', () => {
            expect(filterByFilterCriteria(types, emptySearchCriteria)).toHaveLength(4);
        });
        it('should filter by interface name', () => {
            const path = ['advancedSearch', 'applied', 'interfaces'];
            const criteria: SearchCriteria = R.assocPath(path, ['udm.EmbeddedDeployed'], emptySearchCriteria);
            expect(filterByFilterCriteria(types, criteria)).toHaveLength(3);
        });
        it('should filter by several interface names', () => {
            const path = ['advancedSearch', 'applied', 'interfaces'];
            const interfaces = ['udm.ConfigurationItem', 'udm.EmbeddedDeployed'];
            const criteria: SearchCriteria = R.assocPath(path, interfaces, emptySearchCriteria);
            expect(filterByFilterCriteria(types, criteria)).toHaveLength(2);
        });
        it('should filter by property name', () => {
            const path = ['advancedSearch', 'applied', 'propertyNames'];
            const criteria: SearchCriteria = R.assocPath(path, ['metadata'], emptySearchCriteria);
            expect(filterByFilterCriteria(types, criteria)).toHaveLength(4);
        });
        it('should filter by several property names', () => {
            const path = ['advancedSearch', 'applied', 'propertyNames'];
            const propertyNames = ['metadata', 'container'];
            const criteria: SearchCriteria = R.assocPath(path, propertyNames, emptySearchCriteria);
            expect(filterByFilterCriteria(types, criteria)).toHaveLength(1);
        });
        it('should filter by supertype name', () => {
            const path = ['advancedSearch', 'applied', 'superTypes'];
            const criteria: SearchCriteria = R.assocPath(path, ['was.Deployable'], emptySearchCriteria);
            expect(filterByFilterCriteria(types, criteria)).toHaveLength(3);
        });
        it('should filter by several supertype names', () => {
            const path = ['advancedSearch', 'applied', 'superTypes'];
            const superTypeNames = ['was.Deployable', 'udm.BaseDeployable'];
            const criteria: SearchCriteria = R.assocPath(path, superTypeNames, emptySearchCriteria);
            expect(filterByFilterCriteria(types, criteria)).toHaveLength(2);
        });
        it('should filter by several supertype names and token', () => {
            const path = ['advancedSearch', 'applied', 'superTypes'];
            const superTypeNames = ['was.Deployable', 'udm.BaseDeployable'];
            const criteria: SearchCriteria = R.assocPath(path, superTypeNames, emptySearchCriteria);
            const criteriaWithToken = {...criteria, token: 'ec2'};
            expect(filterByFilterCriteria(types, criteriaWithToken)).toHaveLength(1);
        });
    });
});