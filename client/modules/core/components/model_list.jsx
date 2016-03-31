import React from 'react';


const ModelList = ({models, gender}) =>(
    <div className="modelList">
        <div className="row">
            {models.map(model => (
                <ModelItem model={model} key={model._id}/>
            ))}
        </div>
    </div>
)

let ModelItem = React.createClass({
    render(){
        let model = this.props.model;
        let room_subject = s.truncate(model.room_subject, 70);
        let mins = Math.round(model.seconds_online%60);
        return (
            <div className="col-lg-3 col-md-4 col-xs-6">
                <a href={`${model.gender}/${model.username}`} className="thumbnail modelItem">
                    <img src={model.image_url_360x270} alt={model.display_name}
                         className="img-responsive center-block"/>

                    <p className="info">
                        <span className="username text-primary">{model.username}</span>
                        <span className="age pull-right text-muted">{model.age}</span>
                    </p>
                    <hr/>
                    <p className="info2">
                        <span className="subject">{room_subject}</span>
                    </p>
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
