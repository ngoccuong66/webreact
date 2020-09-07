import React from 'react';
import {  Container , Grid , Image } from 'semantic-ui-react';


const PokedexHeader = () => {
    return(
      <div>
         
         <Container>
            <Grid centered columns={4}>
                <Grid.Row>
                <Grid.Column>
                    <Image src='https://loremflickr.com/320/240' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://loremflickr.com/320/240' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://loremflickr.com/320/240' />
                </Grid.Column>
                
                </Grid.Row>

                <Grid.Row >
                <Grid.Column >
                    <Image src='https://loremflickr.com/320/240' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://loremflickr.com/320/240' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://loremflickr.com/320/240' />
                </Grid.Column>
                <Grid.Column>
                <Image src='https://loremflickr.com/320/240' />
                </Grid.Column>  
                </Grid.Row>
                
            </Grid>
        </Container>

      </div>

    )
}
export default PokedexHeader;