const chaturbateApiUrl = 'http://chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=eqdcq';
const _fiveMinutes = 5 * 60;

export default function () {
	SyncedCron.config({
		log: true,
		collectionName: 'cronHistory'
	})
	SyncedCron.add({
		name : 'update-models',
		schedule : function(parser){
			return parser.text('every 5 minutes');
		},
		job(){
			try{
				var result = request.getSync(chaturbateApiUrl);
				if(result.response.statusCode === 200){
					var models = JSON.parse(result.body);
					if(models){
						console.log('Begin import...');
						Meteor.call('models.offlines');
						models.forEach(function(model){
							Meteor.call('models.import', model);
						});
						console.log('End import...', models.length);
					}

				}
			}catch(ex){
				console.log(ex);
			}
		}
	});

	SyncedCron.start();
}
