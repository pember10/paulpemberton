import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledTooltip } from 'reactstrap';
import { ISocialMediaProps } from '../Footers/SimpleFooter';

export interface INewNavbarProps {
    socialMediaLinks?: ISocialMediaProps[];
}

const NewNavbar: React.FC<INewNavbarProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const getSocialMediaButton = (socialMediaButton: ISocialMediaProps, index: number) => {
        let displayIndex = index < 10 ? `0${index}` : index;
        return (
            <NavItem key={socialMediaButton.name}>
                <NavLink
                    className="nav-link-icon"
                    href={socialMediaButton.url}
                    id={`tooltip131${displayIndex}`}
                    target='_blank'
                >
                    <i className={`fa ${socialMediaButton.icon}`} />
                    <span className="nav-link-inner--text d-md-none ms-2">
                        {socialMediaButton.tooltip}
                    </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target={`tooltip131${displayIndex}`}>
                    {socialMediaButton.tooltip}
                </UncontrolledTooltip>
            </NavItem>
        );
    }

    return (
        <Navbar color='primary' dark full fixed='top' expand='md'>
            <NavbarBrand href="/"><i className='fa fa-hand-spock-o' /> Paul Pemberton</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    {props.socialMediaLinks?.map((socialMediaButton, index) => getSocialMediaButton(socialMediaButton, index))}                    
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default NewNavbar;