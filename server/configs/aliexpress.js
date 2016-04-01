const apiKey = '71737';
const trackingId = 'tubechatxyz';
const Category = {
	rootId: 66,
	parentId: 200003045,
	childs: [
		{
			id: 200003045,
			name: 'Vibrators'
		}
		,
		{
			id: 200003056,
			name: 'Sex Doll'
		},
		{
			id: 200003045,
			name: 'Masturbators'
		},
		{
			id: 200003048,
			name: 'Anal Sex Toys'
		},
		{
			id: 200003050,
			name: 'Dildos'
		},
		{
			id: 200003047,
			name: 'Adult Games'
		},
		{
			id: 200003054,
			name: 'Penis Rings'
		},
		{
			id: 200003050,
			name: 'Dildos'
		},
		{
			id: 200003055,
			name: 'Pumps & Enlargers'
		},
		{
			id: 200003071,
			name: 'Sex Furnitures'
		},
		{
			id: 200003049,
			name: 'Catheters & Sounds'
		},
		{
			id: 200003058,
			name: 'Safer Sex'
		},
		{
			id: 200003053,
			name: 'Medical Themed Toys'
		}
	]
}; //Health & Beauty;

const api1lTpl = _.template('http://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listPromotionProduct/<%=apiKey%>?fields=<%=fields%>&categoryId=<%=categoryId%>&keywords=<%=keywords%>')
const fieldsOfApi1 = 'productId,productTitle,productUrl,imageUrl,originalPrice,salePrice,discount';

export default function(){
	var url = api1lTpl({apiKey : apiKey, fields : fieldsOfApi1, categoryId : Category.rootId, keywords : 'Vibrators'});
	var result = request.getSync(url);
	console.log(url);
	if (result.response.statusCode == 200) {
		console.dir(result.body);
	}
}
