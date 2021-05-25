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
- To change the package name just simply go to "Search Tab" of Visual Code.
- Enter the Old and New Package name and directly hit the "Replace All" Buttom.

-- It will successfully change your application package name.


## Build debug apk

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

- Without env file

cd android && ./gradlew assembleDebug

- To pass env file (if you have)

ENVFILE=./config/.env.testguruji ./gradlew assembleDebug

## Build release aab file with apk

-- To create release aab file (may be require keystore to signing for production). It just bundle up and create a file.

cd android && ./gradlew bundleRelease

## To add/remove architecure based apk
It help us to reduce the size of apk on playstore or when user download our app because according to architecure we got only that app not complete app

folder : android->app->build.gradle
add or remove this file to do so changes.

def enableSeparateBuildPerCPUArchitecture = true

## Run Proguard to shrink the Java bytecode in release builds.
folder : android->app->build.gradle

def enableProguardInReleaseBuilds = true


## For getting error like 'out of memory exception'
folder : android->gradle.properties
add below line in the gradle.properties

```
org.gradle.jvmargs=-Xms1024m -Xmx4096m
```

## ToLocalString

Option          Values          Sample output
----------------------------------------------------
weekday         'narrow'        'M'
                'short'         'Mon'
                'long'          'Monday'

year            '2-digit'       '01'
                'numeric'       '2001'

month           '2-digit'       '01'
                'numeric'       '1'
                'narrow'        'J'
                'short'         'Jan'
                'long'          'January'

day             '2-digit'       '01'
                'numeric'       '1'

hour            '2-digit'       '12 AM'
                'numeric'       '12 AM'

minute          '2-digit'       '0'
                'numeric'       '0'

second          '2-digit'       '0'
                'numeric'       '0'

timeZoneName    'short'         '1/1/2001 GMT+00:00'
                'long'          '1/1/2001 GMT+00:00'