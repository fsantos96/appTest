
import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import {HomeScreen} from "../Screens/HomeScreen";
import {InfoScreen} from "../Screens/InfoScreen";
import {DeathScreen} from "../Screens/DeathScreen";
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";
console.log(HomeScreen, InfoScreen, DeathScreen);

const Drawer = createDrawerNavigator();

export class DrawerCustomNavigator extends Component {

    constructor(props){
        super(props);
    }

    HandlerLogout=()=>{
        this.props.OnClickLogout();
    }

    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen OnHandlerLogout={this.HandlerLogout}{...props}/>}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Info" component={InfoScreen} />
                <Drawer.Screen name="Death" component={DeathScreen} />
            </Drawer.Navigator>
            
        );
    }
    
}

