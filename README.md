# react-native-swift-demo-module

[![npm version](https://badge.fury.io/js/react-native-swift-demo-module.svg?style=flat)](https://badge.fury.io/js/react-native-swift-demo-module)
[![platform](https://img.shields.io/badge/platform-iOS-lightgrey.svg?style=flat)](https://github.com/rhdeck/react-native-swift-demo-module)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat)](https://github.com/rhdeck/react-native-swift-demo-module/blob/master/LICENSE)

## Demo of Non-UI RN Swift Module Features
So this shows in very few lines how to make a React Native project with Swift node. Note three things that can trip up a module writer:
* The stest.swift "@" lines to make the Swift code bridge to objective C. You can have methods that do not include the @objc header, but they will not be exposable to RN via the "m" file. 
* The presence of the Bridging-Header file to extend RN functionality to "swift-land"
* The need for the m file to define the module that bridges your swift code back to React Native. 
* The presence of the react-native-swift peer dependency in package.json. Peer matters: this is an extension for "react-native link", and the latter only walks the first directory for plugins/commands.