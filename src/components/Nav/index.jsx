import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
export default () => {
    return (
        <Menu mode="horizontal" style={{ margin: 20 }}>
            <Menu.Item>
                <Link to="/">Home</Link>
            </Menu.Item>
        </Menu>
    );
}
