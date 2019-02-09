import React, {PureComponent} from 'react';
import {Image,Platform} from 'react-native';

import Logo from '../../assets/logo.png';

export default class LogoTitle extends PureComponent{
    render() {
        const style = Platform.OS ==='ios' ?
        {width:111, height: 30}:
        {width: 111, height: 30, position: 'absolute', left: '50%', marginLeft: -55}
        return (<Image
        style={style}
        source={Logo}
    />);
    }
}