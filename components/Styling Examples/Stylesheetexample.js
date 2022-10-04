import React,{Component} from 'react';
import { View } from 'react-native';
import PresentationalComponent from './PresentationalComponent'

export class Stylesheetexample extends Component {
    state = {
        myState: 'This is my state',
        name:'hello how are u hello how are u hello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are uhello how are u'
     }
     render() {
        return (
           <View>
              <PresentationalComponent myState = {this.state.myState} mydata={this.state.name} />
           </View>
        );
  }
}

export default Stylesheetexample
