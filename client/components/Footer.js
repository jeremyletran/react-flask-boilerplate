import React from 'react';
import { string, bool, func, oneOfType } from 'prop-types';
import { Row, Container } from 'reactstrap';

const Footer = () => (
  <div>
    <Container fluid className="footer">
      <Row>
        <div className="mx-auto">
          <h5>Bad Habit Raceworks &copy; 2018</h5>
        </div>
      </Row>
    </Container>
  </div>
);

export default Footer;
