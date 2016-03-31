import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Model from '../components/model.jsx';

export const composer = ({context,username}, onData) => {
    const {Meteor, Collections} = context();

    if(Meteor.subscribe('models.single',username).ready()){
        const model = Collections.Models.findOne({username : username});
        onData(null, {model});
    }else{
        const model = Collections.Models.findOne({username : username});
        if(model){
            onData(null, {model});
        }else{
            onData();
        }
    }
};

export const depsMapper = (context, actions) => ({
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Model);
