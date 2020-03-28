import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Counter() {
	return (
		<div className="text-center mt-5 bg-dark text-white">
			<Container>
				<h1>Let The Countdown Begin!</h1>
				<p>
					<Table striped bordered hover variant="dark">
						<thead>
							<tr>
								<th>#</th>
								<th>0</th>
								<th>0</th>
								<th>0</th>
								<th>1</th>
								<th>2</th>
								<th>3</th>
							</tr>
						</thead>
					</Table>
				</p>
			</Container>
			<Button variant="secondary" size="md" block>
				Click to Start
			</Button>
		</div>
	);
}
