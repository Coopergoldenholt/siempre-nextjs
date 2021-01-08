import styled from "styled-components";
import { SectionHeading } from "../Common/common.style";
import { device } from "../Common/device";

export const FeaturesSliderSection = styled.section`
	padding: 80px 0px;
	background: #f9fafc;
	overflow: hidden;
	div {
		outline: 0;
	}
	@media ${device.tablet} {
		padding-right: 0px;
		padding-left: 0px;
	}
`;

export const SliderWrapperHeading = styled(SectionHeading)`
	margin-bottom: 60px;
`;

export const SliderColWrapper = styled.div`
	border-radius: 10px;
	padding: 0px 10px;
`;

export const SliderCol = styled.div`
	position: relative;
	outline: 0;
	overflow: hidden;
	border-radius: 10px;

	.SliderHoverIcon {
		display: inline-block !important;
	}
`;

export const SliderImg = styled.img`
	position: relative;
	border-radius: 10px;
	margin-bottom: 0px;
`;
export const SliderHover = styled.div`
	text-align: center;
	background: rgba(133, 91, 82, 0.7);
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	padding: 20px;
	visibility: hidden;
	opacity: 0;
	transition: visibility 0s, opacity 0.5s linear;
	${SliderCol}:hover & {
		visibility: visible;
		opacity: 1;
	}
`;

export const SliderHoverText = styled(SectionHeading)`
	margin-top: 100px;
	color: #fff;
	line-height: 40px;
	font-size: 25px;
`;

export const NextPrev = styled.div`
	text-align: center;
	margin-top: 45px;
	line-height: 0px;
	button {
		border: none;
		background: none;
		outline: none;
	}
`;

export const ImgButton = styled.button`
	line-height: 0px;
	padding-bottom: 0px;
`;

export const PrevImg = styled.img`
	width: 50px;
	margin: 0px 5px;
	cursor: pointer;
	transition: all 0.4s;

	:hover {
		transform: scale(1.1);
		transition: all 0.4s;
	}
`;

export const NextImg = styled.img`
	width: 50px;
	margin: 0px 5px;
	cursor: pointer;
	transition: all 0.4s;

	:hover {
		transform: scale(1.1);
		transition: all 0.4s;
	}
`;
