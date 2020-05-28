import React from 'react';
import { Menu } from 'antd';

export default () => {
    return (
        <Menu mode="horizontal" style={{ margin: 20 }}>
            <Menu.Item>
                <a href="/">Home</a>       
            </Menu.Item>
        </Menu>
    );
}
