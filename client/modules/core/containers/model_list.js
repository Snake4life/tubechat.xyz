import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ModelList from '../components/model_list.jsx';

export const composer = ({context, gender, tag, resetLimit}, onData) => {
	const {Meteor, Collections, LocalState} = context();
	if (!LocalState.get('LIMIT')) {
		LocalState.set('LIMIT', 60);
	}

	if (!LocalState.get('LOADED')) {
		LocalState.set('LOADED', 0);
	}
	let limit = LocalState.get('LIMIT');
	let loaded = LocalState.get('LOADED');
	let filter = {
		is_online: true
	};

	if (gender) {
		filter = {...filter, gender: gender};
	}

	if(tag){
		filter = {...filter, tags: tag};
	}

	let options = {
		limit: limit,
		sort: {
			num_users: -1,
			is_hd: 1,
			is_new: 1
		}
	}
	if (Meteor.subscribe('models.list', filter, options).ready()) {
		const models = Collections.Models.find(filter, options).fetch();
		LocalState.set('LOADED', limit);
		let hasLoadMore = models.length >= limit;
		onData(null, {models, hasLoadMore});
	}
	return resetLimit;
};

export const depsMapper = (context, actions) => ({
	loadMore: actions.models.loadMore,
	resetLimit: actions.models.resetLimit,
	context: () => context
});

export default composeAll(
	composeWithTracker(composer),
	useDeps(depsMapper)
)(ModelList);
