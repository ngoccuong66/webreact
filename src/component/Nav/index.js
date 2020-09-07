import React, { useState } from 'react';
import { Menu, Input, Icon, Button, Image, Container, Grid } from 'semantic-ui-react'
import logo from '../../images/logo.svg'
import GamStack from '../../images/GamStack.svg'
import './Nav.scss'

const Nav = (props) => {

    const [activeItem, setActiveItem] = useState({
        activeName: ''
    });

    const handleItemClick = ({ name }) => setActiveItem({ activeItem: name });
    return (
        <div className="nav-page">
            <Grid className="menu-header">
                <Grid.Column width={4}>
                    <Image inline floated="left" src={logo}></Image>
                    <Image inline floated="left" src={GamStack}></Image>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Menu size='huge' secondary >
                        <Menu.Item
                            name='DevOps'
                            active={activeItem.activeName === 'DevOps'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name='Gateway'
                            active={activeItem.activeName === 'DevOps'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name=' vSAN Storage'
                            active={activeItem.activeName === 'Storage'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name='Virtualization'
                            active={activeItem.activeName === 'Virtualization'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name='Automation'
                            active={activeItem.activeName === 'Automation'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name='Emulation'
                            active={activeItem.activeName === 'Emulation'}
                            onClick={handleItemClick}
                        />
                        <Menu.Item
                            name='Render'
                            active={activeItem.activeName === 'Render'}
                            onClick={handleItemClick}
                        />
                        <Menu.Menu >
                            <Menu.Item>
                                <Icon name='shop' size="large" />
                            </Menu.Item>
                            <Button>Sign Up</Button>
                        </Menu.Menu>
                    </Menu>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default Nav;