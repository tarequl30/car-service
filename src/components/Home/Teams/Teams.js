import React from 'react';
import './Teams.css'
import team1 from '../../../images/team1.jpg'
import team2 from '../../../images/team2.jpg'
import team3 from '../../../images/team3.jpg'
const Teams = () => {
    return (
   <div className="container">
	<div className="row vh-50">
    <h3 className="text-center fw-bold">Our Team Member</h3>
		<div className="col-sm-6 col-lg-3 my-auto">
			<div className="box shadow-sm p-4">
				<div className="image-wrapper mb-3">
					<img className="img-fluid" src={team1} alt="..." />
				</div>
				<div className="box-desc">
					<h5>Jon Doe</h5>
					<p>FrontEnd Developer</p>
				</div>
			</div>
		</div>
		<div className="col-sm-6 col-lg-3 my-auto">
			<div className="box shadow-sm p-4">
				<div className="image-wrapper mb-3">
					<img className="img-fluid" src={team2} alt="..." />
				</div>
				<div className="box-desc">
					<h5>Tokyo Rio</h5>
					<p>Back End Developer</p>
				</div>
			</div>
		</div>
		<div className="col-sm-6 col-lg-3 my-auto">
			<div className="box shadow-sm p-4">
				<div className="image-wrapper mb-3">
					<img className="img-fluid" src={team3} alt="..." />
				</div>
				<div className="box-desc">
					<h5>Will Smith</h5>
					<p>Node.Js Exper</p>
				</div>
			</div>
		</div>
        <div className="col-sm-6 col-lg-3 my-auto">
			<div className="box shadow-sm p-4">
				<div className="image-wrapper mb-3">
					<img className="img-fluid" src={team2} alt="..." />
				</div>
				<div className="box-desc">
					<h5>Jhon Snow</h5>
					<p>Node.Js Exper</p>
				</div>
			</div>
		</div>
	</div>
</div>	
	
    );
};

export default Teams;