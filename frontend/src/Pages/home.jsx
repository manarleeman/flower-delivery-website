import React from "react";
import About from "../components/homepage/about";
import ChooseUs from "../components/homepage/chooseus";

import ContactUs from "../components/homepage/contactus";
import Services from "../components/homepage/services";
import Review from "../components/homepage/review";
import HomePage from "../components/homepage/Homepage";

function Home() {
	return (
		<div>
			<HomePage></HomePage>
			<About></About>
			<ChooseUs></ChooseUs>
			<ContactUs></ContactUs>
			<Services></Services>
			<Review></Review>
		</div>
	);
}

export default Home;
