import React from 'react';

const Model = ({model}) => (
    <IFRAME model={model}/>
);

let IFRAME = React.createClass({
	render(){
		let model = this.props.model;
		let src = model.iframe_embed_revshare.match(/src\=\'(.*)\' height/);
		if(!src) src = model.iframe_embed_revshare;
		let tagSection;
		if (model.tags && model.tags.length > 0) {
			tagSection = <div className="panel-footer">
				<ul className="tags">
					{model.tags.map(tag => {
						return <li key={tag}> <a className="label label-success" href={`/tags/${tag}`}>{tag}</a></li>
					})}
				</ul>
			</div>
		}
        let roomClassName = model.source === 'CHATURBATE' ? 'col-md-9' : 'col-md-12';

		return (
        <div className="row">
            <div className={roomClassName}>
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
            </div>
        </div>
		)
	}
})

export default Model;
