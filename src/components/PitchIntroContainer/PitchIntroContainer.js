// @flow

import * as React from "react";

import PageContainer from "../PageContainer";
import PitchIntro from "../PitchIntro";

const PitchIntroContainer = () => (
	<PageContainer className="py-12 bg-denim-white">
		<section className="max-w-lg mx-auto bg-white border border-turtle shadow-md">
			<div className="m-4 sm:m-8">
				<PitchIntro />
			</div>
		</section>
	</PageContainer>
);

export default PitchIntroContainer;
