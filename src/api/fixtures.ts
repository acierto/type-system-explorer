import xldTypes from '../data/xld-types.json';

export default {
    getTypes(cb: any) {
        setTimeout(() => cb(xldTypes), 200)
    }
}
