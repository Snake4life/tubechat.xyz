export default {
	loadMore({LocalState}){
		let limit = LocalState.get('LIMIT');
		limit += 60;
		LocalState.set('LIMIT', limit);
	},
	resetLimit({LocalState}){
		LocalState.set('LIMIT',60);
		LocalState.set('LOADED',0);
	}
}
