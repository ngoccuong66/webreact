import _ from 'lodash'
import React, { Component, createRef } from 'react'
import {
  Grid,
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Sticky,
} from 'semantic-ui-react'

const Placeholder = () =>  <Image src='https://loremflickr.com/320/240' />

export default class StickyExamplePushing extends Component {
  contextRef = createRef()

  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <Ref innerRef={this.contextRef}>
            <Segment vertical padded>
              {_.times(10, (i) => (
                <Placeholder key={i} />
              ))}

              <Rail position='left'>
                <Sticky context={this.contextRef} pushing>
                  <Header as='h3'>Stuck Content</Header>
                  <Image src='https://loremflickr.com/480/360' />
                </Sticky>
              </Rail>

              <Rail position='right'>
                {_.times(3, (i) => (
                  <Placeholder key={i} />
                ))}

                <Sticky context={this.contextRef} pushing>
                  <Header as='h3'>Stuck Content</Header>
                  <Image src='https://loremflickr.com/320/240/dog' />
                </Sticky>
              </Rail>
            </Segment>
          </Ref>
        </Grid.Column>
      </Grid>
    )
  }
}
