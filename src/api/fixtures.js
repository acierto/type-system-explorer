import xldTypes from '../data/xld-types.json';

export default {
    getTypes(cb) {
        setTimeout(() => cb(xldTypes), 200)
    }
}
