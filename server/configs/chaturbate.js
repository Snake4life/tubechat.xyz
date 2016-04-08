const chaturbateApiUrl = 'http://chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=eqdcq';

export default function () {

	SyncedCron.add({
		name : 'update-models-chaturbate',
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
                            model = _.extend(model,{source : 'CHATURBATE'});
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
