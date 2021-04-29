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

## To chnage the Splash Screen

There is a component called "ParentContainer" where we give the path of the image

## To change the App Icon

- Go to "android/app/src/main/res" path where you find "mipmap" folders
- On each folder there are two files "squared" or "rounder"
- Just replace all .png files of folders accoding to size.
  (Note: Rounded icon must be placed there, Without rounded icon project will not run. )

## TO change the App Name

- Go to this path "android/app/src/main/res/values"
- Open "String.xml" where you find the <string> tag related to app_name.
- Change / Modify it to your new desired name.

## To change Application Package Name

- In android folder there are 7-8 files where we have to change the package name manually.
- So to chnage the package name just simply go to "Search Tab" of Visual Code.
- Enter the Old and New Package name and directly hit the "Replace All" Buttom.

-- It will successfully change your application package name.

(Note: Whenever we change the package name sometimes our app will not run directly,
It will throws an error while building the application.) VERSION_DOWNGRADE Error.

To resolve this,
Step 1 - Open Command Prompt
Step 2 - Go to SDK -> Platform Tools Directory.
Step 3 - Run, "adb uninstall new_package_name", you are done.
