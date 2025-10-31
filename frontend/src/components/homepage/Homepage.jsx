import React from "react";
import HeroSection from "./herosection";
import CategoryCard from "../../components/categoryCard";
import FreshFlower from "../../assets/homepage/freshFlower.jpg";
import DriedFlower from "../../assets/homepage/driedFlower.png";
import LivePlants from "../../assets/homepage/livePlant.png";
import AromaticCandles from "../../assets/homepage/aromaticCandle.png";
import Fresheners from "../../assets/homepage/fresheners.png";

function HomePage() {
	return (
		<div className="flex flex-col size-full">
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<HeroSection />
				<div className="flex flex-col">
					<div className="border-t lg:border-t-0 border-secondary">
						<CategoryCard
							title={"Fresh Flowers"}
							imageUrl={FreshFlower}
							link={"/category/fresh-flowers"}
							position={"left"}
						/>
					</div>
					<div className="border-t border-secondary">
						<CategoryCard
							title={"Dried Flowers"}
							imageUrl={DriedFlower}
							link={"/category/dried-flowers"}
							position={"right"}
							borderTop={true}
						/>
					</div>
					<div className="border-t border-secondary">
						<CategoryCard
							title={"Live Plants"}
							imageUrl={LivePlants}
							link={"/category/live-plants"}
							position={"left"}
							borderTop={true}
						/>
					</div>
					<div className="border-t border-secondary">
						<CategoryCard
							title={"Aromatic Candles"}
							imageUrl={AromaticCandles}
							link={"/category/aromatic-candles"}
							position={"right"}
							borderTop={true}
						/>
					</div>
					<div className="border-t border-secondary">
						<CategoryCard
							title={"Fresheners"}
							imageUrl={Fresheners}
							link={"/category/fresheners"}
							position={"left"}
							borderTop={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
