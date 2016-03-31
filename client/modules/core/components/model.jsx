import React from 'react';

const Model = ({model}) => (

    <div className="row">
        <div className="col-md-8">
            <IFRAME model={model}/>
        </div>
    </div>
);

let IFRAME = React.createClass({
    render(){
        let model = this.props.model;
        let src = model.iframe_embed_revshare.match(/src\=\'(.*)\' height/)[1];
        return(
            <iframe src={src} frameBorder="0" width="800" height="528" style={{border:'none'}}></iframe>
        )
    }
})

export default Model;
