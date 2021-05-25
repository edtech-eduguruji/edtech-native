import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import config from 'react-native-config'
import {getFocusedRouteNameFromRoute} from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import SyncStorage from 'sync-storage'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {View, TouchableOpacity, Text} from 'react-native'
import Login from './src/layouts/Login'

// views
import Menu from './src/layouts/Menu'
import Documents from './src/views/student/documents/Documents'
import Quiz from './src/views/student/quiz/Quiz'
import LiveClass from './src/views/student/liveclass/LiveClass'
import LocalStorage from './src/common/LocalStorage'
import appRoutes from './src/layouts/Routes'
import withLoggedIn from './src/layouts/EnhanceLoggedIn'
import ModalScreen from './src/common/ModalScreen'
import Lectures from './src/views/student/lectures/Lectures'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function HomeStackNavigator() {
  return (
    <Stack.Navigator mode="card" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Documents" component={Documents} />
      <Stack.Screen name="LiveClass" component={LiveClass} />
      <Stack.Screen name="Lectures" component={Lectures} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  )
}

function AppNavigation({role}) {
  const routesLink = appRoutes.map(item => {
    if (role) {
      if (
        item.role.includes(role) &&
        JSON.parse(config.MODULES).includes(item.id) &&
        item.isSidebar
      ) {
        return (
          <Drawer.Screen
            key={item.id}
            name={item.name}
            options={{
              drawerIcon: () => <Icon name={item.icon} size={30} color="#900" />
            }}>
            {val => <item.component {...val} />}
          </Drawer.Screen>
        )
      }
    }
    return null
  })

  return (
    <Drawer.Navigator
      detachInactiveScreens
      minSwipeDistance={100}
      drawerStyle={{
        width: 240
      }}
      // initialRouteName="Calendar"
      // drawerContent={props => <Menu {...props} />}
    >
      {routesLink}
      <Drawer.Screen
        name="test"
        component={HomeStackNavigator}
        options={{
          drawerLabel: '',
          title: '',
          headerTitle: '',
          headerShown: false
        }}></Drawer.Screen>
    </Drawer.Navigator>
  )
}

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Dashboard'
  return routeName
}

export const AuthContext = React.createContext()

const App = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false
          }
        case 'SIGN_IN':
          return {
            ...prevState,
            userToken: action.token,
            isSignout: false,
            isLoading: false
          }
        case 'SIGN_OUT':
          return {
            ...prevState,
            userToken: null,
            isSignout: true,
            isLoading: false
          }
        case 'SET_LOADING':
          return {
            ...prevState,
            isLoading: true
          }
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null
    }
  )

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    ;(async () => {
      let userToken

      try {
        const d = await SyncStorage.init()
        userToken = LocalStorage.getUser()
        SplashScreen.hide()
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken})
    })()
  }, [])

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: data})
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      setLoading: () => dispatch({type: 'SET_LOADING'})
    }),
    []
  )

  if (state.isLoading) {
    return null
  }

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator mode="modal">
        {state.userToken == null ? (
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerShown: false
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="student"
              options={({route}) => ({
                headerTitle: getHeaderTitle(route),
                headerLeft: () => <MenuButton on />
              })}
              component={withLoggedIn(AppNavigation)}
            />
            <Stack.Screen
              name="modal"
              options={({route}) => ({
                headerLeft: () => <MenuButton on />
              })}
              component={withLoggedIn(ModalScreen)}
            />
          </>
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  )
}

const MenuButton = props => {
  return (
    <View>
      <TouchableOpacity>
        <Icon name="dashboard" size={30} color="#900" />
      </TouchableOpacity>
    </View>
  )
}

export default App
