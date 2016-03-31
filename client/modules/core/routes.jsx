import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import ModelList from './containers/model_list.js';
import Model from './containers/model.js';

export default function (injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(MainLayout);

    FlowRouter.route('/', {
        name: 'models.list',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<ModelList/>)
            });
        }
    });

    FlowRouter.route('/:gender', {
        name: 'models.list.byGender',
        action({gender}) {
            mount(MainLayoutCtx, {
                content: () => (<ModelList gender={gender}/>)
            });
        }
    });

    FlowRouter.route('/:gender/:username', {
        name: 'models.single',
        action({username}) {
            mount(MainLayoutCtx, {
                content: () => (<Model username={username}/>)
            });
        }
    });
}
