import { Button,View,Text } from "react-native";
import React from 'react';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
export default function PlannerScreen({navigation}:any)
{

    return(
              <View>
                    <Text> hello its my Planner screen</Text>
                    <Button title="Go to home"
 onPress={ () =>
navigation.navigate("Home") }
        />
</View>

    )

}