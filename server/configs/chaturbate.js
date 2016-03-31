const chaturbateApiUrl = 'http://chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=eqdcq';
const _fiveMinutes = 5 * 60;

export default function () {
	SyncedCron.config({
		log: true,
		collectionName: 'cronHistory'
	})
	SyncedCron.add({
		name : 'update-girls',
		schedule : function(parser){
			return parser.text('every 5 minutes');
		},
		job(){
			try{
				var result = request.getSync(chaturbateApiUrl);
				if(result.response.statusCode === 200){
					var girls = JSON.parse(result.body);
					if(girls){
						console.log('Begin import...');
						Meteor.call('girls.offlines');
						girls.forEach(function(girl){
							Meteor.call('girls.import', girl);
						});
						console.log('End import...', girls.length);
					}

				}
			}catch(ex){
				console.log(ex);
			}
		}
	});

	SyncedCron.start();
}
