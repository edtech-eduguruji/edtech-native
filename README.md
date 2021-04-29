## To setup this application on your local machine

- android->local.properties, set android sdk path
- npm install
- react-native run android

To run on device you need to run below command before that connect you phone with laptop and allow developer mode

- adb reverse tcp:8081 tcp:8081

```
For mac users, there might be problem while running application
please run chmod 777 on node_modules or complete project folder
after installing new packages run this command again!
```

## react-native-config

- To make it work after installing make sure you need to link it by running below command
  react-native link react-native-config

- Also need to add in few other android file

```
- android/settings.gradle

- include ':react-native-config'

- project(':react-native-config').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-config/android')
```

```
file name: android/app/build.gradle

dependencies {
- implementation "com.facebook.react:react-native:+" // From node_modules

- implementation project(':react-native-config')
  }
```

(Note: For React Native 0.60 or greater, autolinking is available)

for more info visit https://github.com/luggit/react-native-config
