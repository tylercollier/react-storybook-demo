import React from 'react';
import ObserveStudent from '../ObserveStudent';
import { storiesOf, action } from '@kadira/storybook';
import { Grid, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

storiesOf('ObserveStudent', module)
  .add('basic', () => {
    return getMainSection();
  })

function getMainSection() {
  return (
    <Grid>
      <Row style={{ border: '1px silver dotted' }}>
        <Col md={3}>
          <ObserveStudent />
        </Col>
        <Col md={3}>
          <ObserveStudent />
        </Col>
        <Col md={3}>
          <ObserveStudent />
        </Col>
        <Col md={3}>
          <ObserveStudent />
        </Col>
      </Row>
    </Grid>
  );
}
