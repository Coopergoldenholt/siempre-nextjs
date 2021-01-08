import styled from "styled-components";
import {Commonh3,Commonbtn} from '../Common/common.style'
import {device} from '../Common/device'
import BannerBg from '../../../assets/showcase-images/small-banner.jpg'

export const DownloadWrapper = styled.section`
    padding:100px 0px;
    background-image: url(${BannerBg});
    text-align:center;
    background-repeat:no-repeat;
    background-size:cover;
`;
export const BuyBtn = styled(Commonbtn)`

`;
export const DownloadHeading = styled(Commonh3)`
   color:#fff;
   font-size:31px;
   line-height: 30px;
   line-height: 35px;

    @media ${device.mobileM} {
        line-height: 40px;
    }
`;
