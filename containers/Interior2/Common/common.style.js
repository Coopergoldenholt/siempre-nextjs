import styled from "styled-components";

export const Commonbtn = styled.a`
	font-size: 14px;
	background: #855b52;
	color: #fff;
	padding: 6px 30px;
	border-radius: 4px;
	display: inline-block;
	box-shadow: 0px 0px 13px -2px #4e32ed;
	-webkit-transform: perspective(1px) translateZ(0);
	transform: perspective(1px) translateZ(0);
	-webkit-transition-duration: 0.3s;
	transition-duration: 0.3s;
	-webkit-transition-property: transform;
	transition-property: transform;

	:hover {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
		color: #fff;
		text-decoration: none;
	}
`;

export const Commonpara = styled.p`
	color: #484848;
	margin-bottom: 26px;
	font-size: 15px;
`;

export const Commonh3 = styled.h3`
	color: #353535;
	font-size: 36px;
	margin-bottom: 30px;
	font-weight: 700;
`;

export const SectionHeading = styled.h3`
	font-size: 40px;
	color: #353535;
	margin-bottom: 15px;
	text-align: center;
	font-weight: 700;
`;

export const Commonh4 = styled.h4`
    font-size:24px;
    color:#353535;
    line-height:30px;
    margin-bottom:20px
    font-weight:500;
`;
