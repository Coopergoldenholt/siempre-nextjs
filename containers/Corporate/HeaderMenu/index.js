import React,{Component} from "react";
import {Headerwrapper,NavCustom,UlCustom,LiCustomLogo,BrandLogo,LiCustomItem,
    LiCustomToggle,AnchorCustom,MenuIcon} from "./headermenu.style"
import {
    Container,
} from "react-bootstrap";
import ScrollSpy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../../../pagedata/Corporate';

class Headermenu extends Component{
    constructor(props){
        super(props);
        this.state = { 
            stickyClass:'top',
            isActive: false 
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            let stickyClass = 'topSticky';
            let scrollPos = window.scrollY;

            if(scrollPos < 100){
                stickyClass = 'top';
            }

            if(this.state.stickyClass !== stickyClass)
            {
                this.setState({ stickyClass });
            }
                
        });
    }

    componentWillUnmount() { 
        window.removeEventListener('scroll'); 
    } 

    menuClick = () =>{
        this.setState({
            isActive:!this.state.isActive
        })
    }

    render(){
        return(
            <Headerwrapper isSticky={this.state.stickyClass==="topSticky"?true:false}>
                <NavCustom isSticky={this.state.stickyClass==="topSticky"?true:false}>
                    <Container>
                        <UlCustom>
                            
                            <LiCustomLogo isSticky={this.state.stickyClass==="topSticky"?true:false}>
                                <BrandLogo src={this.state.stickyClass==="topSticky"?require("../../../assets/"+Header.BrandLogoSticky):require("../../../assets/"+Header.BrandLogo)}
                                isSticky={this.state.stickyClass==="topSticky"?true:false}
                                alt="Logo"
                                />
                            </LiCustomLogo>
                            
                            <LiCustomItem className={this.state.isActive?"active-main-li":""} isSticky={this.state.stickyClass==="topSticky"?true:false}>
                                <ScrollSpy offset={-59} items={Header.Items} currentClassName="is-current">
                                {
                                    Header.ScrollSpy.map((item,idx) => {
                                    return <li className={this.state.isActive?"active":""}>
                                            <AnchorLink offset={55} href={item.Href}>{item.Menu}</AnchorLink>
                                        </li>
                                    })
                                }
                                </ScrollSpy>
                            </LiCustomItem>

                            <LiCustomToggle >
                                <AnchorCustom onClick={this.menuClick}>
                                    <MenuIcon isSticky={this.state.stickyClass==="topSticky"?true:false}/>
                                </AnchorCustom>
                            </LiCustomToggle>

                        </UlCustom>
                    </Container>
                </NavCustom>
            </Headerwrapper>
        );
    }
}
export default Headermenu;