import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ModelList from '../components/model_list.jsx';

export const composer = ({context, gender}, onData) => {
    const {Meteor, Collections} = context();
    let filter = {
        is_online: true
    };
    if (gender) {
        filter = {...filter, gender : gender};
    }
    let options = {
        limit: 60,
        sort: {
            num_users: -1,
            is_hd: 1,
            is_new: 1
        }
    }
    if (Meteor.subscribe('models.list', filter, options).ready()) {
        const models = Collections.Models.find(filter, options).fetch();
        onData(null, {models});
    }
};

export const depsMapper = (context, actions) => ({
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ModelList);
