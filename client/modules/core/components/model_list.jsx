import React from 'react';
import ImageLoader from 'react-imageloader';

class ModelList extends React.Component{
	render(){
		let {models, hasLoadMore} = this.props;
		let loadMoreSection;
		if(hasLoadMore){
			loadMoreSection = <div className="row">
				<div className="col-md-12">
					<p className="text-center">
						<button className="btn btn-primary" onClick={this._loadMore.bind(this)}>View more</button>
					</p>
				</div>
			</div>
		}
		return (
			<div className="modelList">
				<div className="row">
					{models.map(model => (
						<ModelItem model={model} key={model._id}/>
					))}
				</div>
				{loadMoreSection}
			</div>
		)
	}
	_loadMore(){
		let {loadMore} = this.props;
		loadMore();
	}
}


function preloader() {
	return <img src="/loading.gif" className="img-responsive center-block"/>;
}

let ModelItem = React.createClass({
    render(){
        let model = this.props.model;

        let mins = Math.round(model.seconds_online%60);
	    let placeholder = '/placeholder.png';
        let room_subjectSection = null;
        if(model.room_subject){
            let room_subject = s.truncate(model.room_subject, 70);
            room_subjectSection = <p className="info2">
                    <span className="subject">{room_subject}</span>
                </p>
        }
        return (
            <div className="col-lg-3 col-md-4 col-xs-6">
                <a href={`/${model.gender}/${model.username}`} className="thumbnail modelItem">
	                <ImageLoader
		                imgProps={{width : '360', height : '270', className : 'img-responsive center-block'}}
		                src={model.image_url_360x270}
		                preloader={preloader}>
		                Image load failed!
	                </ImageLoader>

                    <p className="info">
                        <span className="username text-primary">{model.username}</span>
                        <span className="age pull-right text-muted">{model.age}</span>
                    </p>
                    <hr/>
                    {room_subjectSection}
                    <p className="info3">
                        <span>{mins} mins</span>
                        <span className="pull-right">{model.num_users}</span>
                    </p>
                </a>
            </div>
        )
    }
})

export default ModelList;
