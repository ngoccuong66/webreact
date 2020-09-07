import React from 'react';
import {  Grid,Input,  Button ,Icon, Header, Container, Segment, Divider } from 'semantic-ui-react';
import './style.css'
const Carousel = () => {
    return(
        <div> 
        <Grid className="subcribe">
            
            <Grid.Column width={7}>
            <Container className="subcribe__container">
                <Segment  vertical className="subcribe__content">To subcribe our updates, please drop you email below:</Segment>
                <Input  className="subcribe__input" placeholder='Email...' required />

                <Button  floated="right" className="subcribe__button" >subcribe</Button>
                
            </Container>
            
            </Grid.Column>
          
            <Grid.Column width={9}>
            <Container className="container__contact" >
                <Segment vertical className="container__content" textAlign='left'>Term & Condiftions </Segment>
                <Segment vertical className="container__content" textAlign='left'>Frequently Ask Questions</Segment>
                <Segment vertical className="container__content" textAlign='left'>Contact us:</Segment>
            </Container>
         
            </Grid.Column>
            
            <div className ="border"></div>
        </Grid>
        
        </div>
    )
}
export default Carousel;