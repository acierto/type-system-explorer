import axios from 'axios';

export default {
    getTypes(cb: any) {
        axios.get('/deployit/metadata/type')
            .then(function (response) {
                cb(response.data);
            });
    }
};
