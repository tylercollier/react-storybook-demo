import React from 'react';
import ObserveStudent from '../ObserveStudent';
import { storiesOf, action } from '@kadira/storybook';
import { Grid, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

storiesOf('ObserveStudent', module)
  .add('2 students', () => {
    return (
    <Grid>
      <Users>
        {(user) => <ObserveStudent toggle="toggle-task-1" />}
        {(user) => <ObserveStudent toggle="toggle-task-2" />}
      </Users>
    </Grid>
  );
  })
  .add('3 students', () => {
    return (
    <Grid>
      <Users>
        {(user) => <ObserveStudent toggle="toggle-task-1" />}
        {(user) => <ObserveStudent toggle="toggle-task-2" />}
        {(user) => <ObserveStudent toggle="toggle-task-3" />}
      </Users>
    </Grid>
  );
  })
  .add('4 students', () => {
    return (
    <Grid>
      <Users>
        {(user) => <ObserveStudent toggle="toggle-task-1" />}
        {(user) => <ObserveStudent toggle="toggle-task-2" />}
        {(user) => <ObserveStudent toggle="toggle-task-3" />}
        {(user) => <ObserveStudent toggle="toggle-task-4" />}
      </Users>
    </Grid>
  );
  })

function Users(prop) {
  let classMd = 3;
  const userLength = prop.children.length;
  if(userLength == 2) classMd = 6;
  const items = Array(userLength).fill().map((_,i) => <Col md={classMd}> {prop.children[i]()}  </Col>);
  return (
    <Row>
      {items}
    </Row>
  );
}
