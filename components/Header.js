import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
      <Menu style={{ marginTop: '10px' }}>
     <Image src='/static/images/logo.png' size='small' spaced="top" style={{padding: 20, alignSelf: 'flex-start'}}/>
      <Link route="/">
        <a className="item">CoWei</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">CoOps</a>
        </Link>

        <Link route="/coops/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
