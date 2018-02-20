import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from '../routes';

const divStyle = {
    backgroundColor: '#2185d0',
    color: 'white',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

export default () => {
    return (
        <Menu style={{ marginTop: '10px' }}>
            <Link route="/">
                <Image src='/static/images/logo.png' size='small' style={{ padding: 20, alignSelf: 'flex-start' }} />
            </Link>

            <Menu.Menu position="right">
                <Link route="/">
                    <a className="item">CoOps</a>
                </Link>

                <Link route="/coops/new" className="blue">
                    <a className="item blueButton" style={divStyle}>Create a CoOp</a>
                </Link>
            </Menu.Menu>
        </Menu>
    );
};
