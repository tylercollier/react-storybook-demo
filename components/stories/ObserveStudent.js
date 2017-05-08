import React from 'react';
import ObserveStudent from '../ObserveStudent';
import { storiesOf, action } from '@kadira/storybook';
import { Grid, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

storiesOf('ObserveStudent', module)
  .add('basic', () => {
    return getMainSection();
  })

function Users(prop) {
  let items = [],
      classMd = 3,
      userLength = prop.children.length;
    if(userLength == 2) classMd = 6;
    for(var i=0; i <= userLength-1; i++) {
      items.push(<Col md={classMd}> {prop.children[i]()}  </Col>);
    }
  return (
    <Row>
      {items}
    </Row>
  );
}

function getMainSection() {
  return (
    <Grid>
      <Users>
        {(user) => <ObserveStudent toggle="toggle-task-1" />}
        {(user) => <ObserveStudent toggle="toggle-task-2" />}
      </Users>
    </Grid>
  );
}
