import React, { Component } from 'react'
import { Menu, Input, Icon, Button, Image, Container, Grid } from 'semantic-ui-react'
import logo from '../images/logo.svg'
import GamStack from '../images/GamStack.svg'
export default class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Grid>
        <Grid.Column   width={4}>
        <Image inline floated="left" src={logo}></Image>
       <Image inline floated="left" src={GamStack}></Image>
        </Grid.Column>
        <Grid.Column  width={12}>
        <Menu size='huge'secondary >
        <Menu.Item 
          name='DevOps'
          active={activeItem === 'DevOps'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          name='Gateway'
          active={activeItem === 'Gateway'}
          onClick={this.handleItemClick}
        />
         <Menu.Item 
          name=' vSAN Storage'
          active={activeItem === 'Storage'}
          onClick={this.handleItemClick}
        />
         <Menu.Item 
          name='Virtualization'
          active={activeItem === 'Virtualization'}
          onClick={this.handleItemClick}
        />
         <Menu.Item 
          name='Automation'
          active={activeItem === 'Automation'}
          onClick={this.handleItemClick}
        />
         <Menu.Item 
          name='Emulation'
          active={activeItem === 'Emulation'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          name='Render'
          active={activeItem === 'Render'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu >
          <Menu.Item>
            <Icon name='shop' size="large"/>
          </Menu.Item>
          <Button>Sign Up</Button>
        </Menu.Menu>
      </Menu>
        </Grid.Column>
        </Grid>
        </div>

       /* <Container fluid >
       <Image inline floated="left" src={logo}></Image>
       <Image inline floated="left" src={GamStack}></Image>
      <Menu secondary tabular ="right" floated="right">
        <Menu.Item 
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
         <Menu.Item 
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
         <Menu.Item 
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
         <Menu.Item 
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
         <Menu.Item 
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Icon name='shop' size="large"/>
          </Menu.Item>
          <Button>Sign Up</Button>
        </Menu.Menu>
      </Menu>
      </Container> */
     
    )
  }
}
