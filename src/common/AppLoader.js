import React from 'react';
import {Spinner} from 'native-base';
import {Modal, View, Text} from 'react-native';
export const loaderRef = React.createRef();

export function showLoader() {
  let ref = loaderRef.current;
  if (ref) {
    ref.showLoader();
  }
}

export function hideLoader() {
  let ref = loaderRef.current;
  if (ref) {
    ref.hideLoader();
  }
}

class AppLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loader: false};
  }

  showLoader() {
    this.setState({loader: true});
  }

  hideLoader() {
    this.setState({loader: false});
  }

  render() {
    if (this.state.loader) {
      return (
        <Modal
          animationType="fade"
          visible={true}
          onRequestClose={() => {
            console.log('Noop');
          }}>
          <View>
            <Spinner color="green" />
          </View>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

export default AppLoader;
