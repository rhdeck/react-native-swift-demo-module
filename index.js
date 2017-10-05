import {
  NativeModules,
  NativeEventEmitter
} from 'react-native';
export default class SwiftTest {
  testSend(a, b) {
console.log(NativeModules); 
console.log("Hello"); 
    console.log(
  "Constants available immediately: ", 
  NativeModules.stest.a, 
  NativeModules.stest.b
);
const e = new NativeEventEmitter(NativeModules.stest);
const s = e.addListener("Hello", (arr) => {
  console.log("Received a hello event", arr.message);
})

    return NativeModules.stest.addEvent(a, b)

  }

}
