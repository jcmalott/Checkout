import React from 'react';
import {Link} from 'react-router-dom';

const Footer = (props) => {
  return(
    <div className="panel-footer">
      <div className="row text-center">
        <div className="col-xs-9">
          <h4 className="text-right">Total <strong>${props.total}</strong></h4>
        </div>
        <div className="col-xs-3">
          <Link to={{
            pathname: '/checkout',
            state: {
              total: props.total
            }
          }}
          ><button type="button" className="btn btn-success btn-block">
            Checkout
          </button></Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
