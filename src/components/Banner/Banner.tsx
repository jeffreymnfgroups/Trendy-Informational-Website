import React from "react";
import S from "./Banner.module.scss";

const Banner = () => {
	return (
		<div id="banner" className={S.banner}>
			<p
				data-splitting=""
				className={`${S.textOne} split-text hidden-init`}
			>
				NOVA & LIVAN
			</p>
			<p
				data-splitting=""
				className={`${S.textTwo} split-text hidden-init`}
			>
				A Vision in Motion
			</p>
		</div>
	);
};

export default Banner;
