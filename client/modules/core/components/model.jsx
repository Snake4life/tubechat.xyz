import React from 'react';

const Model = ({model}) => (

	<div className="row">
		<div className="col-md-9">
			<IFRAME model={model}/>
		</div>
	</div>
);

let IFRAME = React.createClass({
	render(){
		let model = this.props.model;
		let src = model.iframe_embed_revshare.match(/src\=\'(.*)\' height/)[1];
		let tagSection;
		if (model.tags && model.tags.length > 0) {
			tagSection = <div className="panel-footer">
				<ul className="tags">
					{model.tags.map(tag => {
						return <li> <a className="label label-success" href={`/tags/${tag}`} key={tag}>{tag}</a></li>
					})}
				</ul>
			</div>
		}
		return (
			<div className="panel panel-default girlShow">
				<div className="panel-heading">
					<h3 className="panel-title">{model.username}</h3>
				</div>
				<div className="panel-body">
					<div className="embed-responsive embed-responsive-16by9">
						<iframe className="embed-responsive-item" src={src} style={{border:'none'}}></iframe>
					</div>
				</div>
				{tagSection}
			</div>

		)
	}
})

export default Model;
