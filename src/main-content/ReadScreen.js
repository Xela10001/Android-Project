// Home.js

import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ReadScreen = (props) => {
  const [showModal1, setShowModal] = useState(false);
  const [showModal2, setShow] = useState(false);

  let day = 7;
  let month = 6;
  let year = 2022;

  function init() {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }

  useEffect(() => {
    init();// code to run after render goes here
  }, []);

  function showModalTemporarily() {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  }

  return (
    <KeyboardAvoidingView
      sytle={{
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          color: '#006600',
          fontSize: 40,
          marginTop: 20,
          marginLeft: 16,
        }}
        numberOfLines={1}>
        {
          props.navigation.getParam('book', 'Placeholder').title
        }
      </Text>
      <ScrollView
        style={{
          backgroundColor: '#e6fff5',
          borderRadius: 10,
        }}
        onScroll={() => showModalTemporarily()}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          porttitor magna. In eu felis iaculis, feugiat augue id, pretium
          tortor. Nulla vel ultrices libero. In vel ex laoreet, tristique sapien
          sit amet, rutrum urna. In venenatis elementum condimentum. Nulla vitae
          aliquam erat. Nulla ut lorem nulla. Maecenas et quam eget velit mattis
          fermentum et eu velit.{' '}
        </Text>

        <Text>
          Proin ut pharetra ligula, quis fermentum ligula. Praesent iaculis
          tortor eu metus ultrices, vel rutrum leo auctor. Donec tincidunt
          congue pharetra. Sed ut mi et mi auctor placerat. Cras est arcu,
          ullamcorper vel pellentesque vitae, euismod viverra libero. Sed id
          condimentum metus, sed hendrerit erat. Vestibulum efficitur eget magna
          eu varius. Nam turpis nisi, cursus sed mattis iaculis, tempor vel
          felis. Cras vitae posuere sem. Suspendisse sit amet justo nec eros
          tempor aliquam eget at diam. Mauris non nulla vehicula, cursus ligula
          sed, blandit odio. Etiam leo augue, porttitor rhoncus efficitur eget,
          eleifend ac nisi. In malesuada ipsum eget est tempor, ut dictum velit
          ornare. Nam orci quam, efficitur ut mauris in, venenatis maximus
          ipsum. Fusce elementum laoreet efficitur. Nam aliquet rhoncus libero a
          posuere.{' '}
        </Text>

        <Text>
          Nam aliquam elit sit amet libero ultrices, ut varius risus pharetra.
          Maecenas sit amet odio vestibulum, facilisis enim ut, pulvinar mi.
          Cras porta lobortis augue. Proin faucibus, sem eu elementum placerat,
          mauris urna elementum sem, vitae viverra nunc ipsum id felis. Donec
          sollicitudin risus id feugiat malesuada. Donec dignissim faucibus mi,
          eu cursus dolor aliquam ac. Nunc tincidunt eros ut nibh maximus, nec
          mollis leo sodales. Maecenas imperdiet posuere purus, sit amet
          ultrices arcu scelerisque et. Sed maximus nisl ipsum, eu elementum leo
          accumsan nec. Aliquam non felis eros. In pretium justo sed tellus
          sagittis, a semper justo varius. Duis dignissim erat et sapien tempor,
          a ultricies nibh aliquam. Sed quis blandit sapien. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.{' '}
        </Text>

        <Text>
          Nam aliquam elit sit amet libero ultrices, ut varius risus pharetra.
          Maecenas sit amet odio vestibulum, facilisis enim ut, pulvinar mi.
          Cras porta lobortis augue. Proin faucibus, sem eu elementum placerat,
          mauris urna elementum sem, vitae viverra nunc ipsum id felis. Donec
          sollicitudin risus id feugiat malesuada. Donec dignissim faucibus mi,
          eu cursus dolor aliquam ac. Nunc tincidunt eros ut nibh maximus, nec
          mollis leo sodales. Maecenas imperdiet posuere purus, sit amet
          ultrices arcu scelerisque et. Sed maximus nisl ipsum, eu elementum leo
          accumsan nec. Aliquam non felis eros. In pretium justo sed tellus
          sagittis, a semper justo varius. Duis dignissim erat et sapien tempor,
          a ultricies nibh aliquam. Sed quis blandit sapien. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.{' '}
        </Text>

        <Text>
          Nam aliquam elit sit amet libero ultrices, ut varius risus pharetra.
          Maecenas sit amet odio vestibulum, facilisis enim ut, pulvinar mi.
          Cras porta lobortis augue. Proin faucibus, sem eu elementum placerat,
          mauris urna elementum sem, vitae viverra nunc ipsum id felis. Donec
          sollicitudin risus id feugiat malesuada. Donec dignissim faucibus mi,
          eu cursus dolor aliquam ac. Nunc tincidunt eros ut nibh maximus, nec
          mollis leo sodales. Maecenas imperdiet posuere purus, sit amet
          ultrices arcu scelerisque et. Sed maximus nisl ipsum, eu elementum leo
          accumsan nec. Aliquam non felis eros. In pretium justo sed tellus
          sagittis, a semper justo varius. Duis dignissim erat et sapien tempor,
          a ultricies nibh aliquam. Sed quis blandit sapien. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos
          nownuvuwrv.{' '}
        </Text>
      </ScrollView>

      {showModal2 ? (
        <View
          style={{
            zIndex: 20,
            width: 300,
            height: 30,
            position: 'absolute',
            top: 90,
            left: windowWidth - 310,
            backgroundColor: '#00c000',
            borderRadius: 20,
          }}>
          <Text
            style={{
              top: 2,
              fontSize: 20,
              color: '#fff',
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            last read on {day}/{month}/{year}
          </Text>
        </View>
      ) : null}

      {showModal1 ? (
        <View
          style={{
            zIndex: 20,
            width: 50,
            height: 30,
            position: 'absolute',
            top: windowHeight - 60,
            left: windowWidth - 60,
            backgroundColor: '#00c000',
            borderRadius: 20,
          }}>
          <Text
            style={{
              top: 2,
              fontSize: 20,
              color: '#fff',
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            1/1
          </Text>
        </View>
      ) : null}
    </KeyboardAvoidingView>
  );
};

export default ReadScreen;
