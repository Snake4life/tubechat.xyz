import React from 'react';

const JoinLink = 'http://chaturbate.com/affiliates/in/3Mc9/eqdcq/?track=default&redirect_to_room=-welcomepage-';


class Menu extends React.Component {
	render() {
		let currentRoute = (route, gender) => {
			FlowRouter.watchPathChange();
			let isCurrentRoute = FlowRouter.current().route.name === route;
			if (!gender) {
				return isCurrentRoute ? 'active' : '';
			} else {
				let genderVal = FlowRouter.getParam('gender');
				return (isCurrentRoute && (gender === genderVal)) ? 'active' : ''
			}
		};
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button aria-controls="navbar" aria-expanded="false" data-target="#navbar"
						        data-toggle="collapse" className="navbar-toggle collapsed" type="button">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a href="/" className="navbar-brand">TubeChatXYZ</a>
					</div>
					<div className="navbar-collapse collapse" id="navbar">
						<ul className="nav navbar-nav">
							<li className={currentRoute('models.list')}><a href="/">Featured</a></li>
							<li className={currentRoute('models.list.byGender', 'f')}><a href="/f">Female</a></li>
							<li className={currentRoute('models.list.byGender', 'm')}><a href="/m">Male</a></li>
							<li className={currentRoute('models.list.byGender', 'c')}><a href="/c">Couple</a></li>
						</ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href={JoinLink} target="_blank"><span className="glyphicon glyphicon-user"></span> Free SignUp</a>
                            </li>
                        </ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Menu;
