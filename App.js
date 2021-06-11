import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import config from 'react-native-config'
import SplashScreen from 'react-native-splash-screen'
import SyncStorage from 'sync-storage'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Login from './src/layouts/Login'
import LocalStorage from './src/common/LocalStorage'
import appRoutes from './src/layouts/Routes'
import withLoggedIn from './src/layouts/EnhanceLoggedIn'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const Logout = () => {}

function HomeNavigation({role}) {
  const routesLink = appRoutes.map(item => {
    if (role) {
      if (
        item.role.includes(role) &&
        JSON.parse(config.MODULES).includes(item.id) &&
        !item.isSidebar
      ) {
        return (
          <Stack.Screen
            key={item.id}
            name={item.name}
            component={item.component}
          />
        )
      }
    }
    return null
  })
  return (
    <Stack.Navigator
      mode="card"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2eb82e'
        },
        headerTintColor: '#fff'
      }}>
      {routesLink}
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
              drawerIcon: () => (
                <Icon name={item.icon} size={15} color="#2eb82e" />
              )
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
      }}>
      {routesLink}
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerIcon: () => <Icon name="logout" size={15} color="#2eb82e" />
        }}
      />
    </Drawer.Navigator>
  )
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
              name="Sidebar"
              options={{
                headerShown: false
              }}
              component={withLoggedIn(AppNavigation)}
            />
            <Stack.Screen
              name="Home"
              options={() => ({
                headerShown: false
              })}
              component={withLoggedIn(HomeNavigation)}
            />
          </>
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  )
}

export default App
