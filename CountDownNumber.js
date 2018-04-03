import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable'
import { Text, StyleSheet, View } from 'react-native'
import { width } from '@/globalStyles'
class CountDownNumber extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isAnim: this.props.isAnim || false,
      value: this.props.value || '',
      customStyle: this.props.customStyle || {},
      customStyleNormal: this.props.customStyleNormal || {},
      isSecs: this.props.isSecs || false

    }
  }
  componentWillReceiveProps () {
    this.setState({ isAnim: this.props.isAnim, value: this.props.value, customStyle: this.props.customStyle, customStyleNormal: this.props.customStyleNormal })
  }
  render () {
    const { isAnim, value, customStyle, customStyleNormal, isSecs } = this.state
    let dataStyle = isAnim ? customStyle : customStyleNormal
    const data = isAnim ? (isSecs
      ?/*  <Animatable.View
        animation={{
          0: {
            // translateX: -10,
            translateY: -20,
            opacity: 1,
            scale: 1
            // rotate: `7deg`
          },
          0.5: {
            // translateX: -10,
            translateY: 0,
            opacity: 0.5,
            scale: 2
            // rotate: `7deg`
          },
          1: {
            translateY: 15,
            opacity: 0,
            scale: 0
          }
        }
        }
        duration={1000}
        easing="ease-in"
        iterationCount="infinite"
        useNativeDriver>
        <Text style={[styles.textStyle, dataStyle]}>{value}</Text>
      </Animatable.View > */
      <Text style={[styles.textStyle, dataStyle]}>{value}</Text>
      : <Animatable.View
        animation = {{
          0: {
          // translateX: -10,
            translateY: -20
          // opacity: 0,
          //   scale: 2
          // rotate: `7deg`
          },
          1: {
            translateY: 5
            // opacity: 1,
            //   scale: 1,
          }
        }
        }
        duration = { 999}
        easing = "ease-in"
        iterationCount = "infinite"
        useNativeDriver>
        <Text style={[styles.textStyle, dataStyle]}>{value}</Text>
      </Animatable.View >

    ) : (<Text style={[ styles.textStyleNormal, dataStyle ]}>{value}</Text>)
    return (
      <View>
        { data }
      </View>
    )
  }
}
var styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold', fontSize: width(4)
  },
  textStyleNormal: {
    fontWeight: 'bold',
    fontSize: width(4)
  }
})

export default CountDownNumber
