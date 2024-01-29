import { View } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from "react";

import { MainLayout } from './app/MainLayout';
import { TodoState } from './app/context/todo/TodoState';
import { ScreenState } from './app/context/screen/ScreenState';

SplashScreen.preventAutoHideAsync();

export default function App() {

	const [fontsLoaded, fonstError] = useFonts({
		'roboto-regular': require('./assets/Fonts/Roboto-Regular.ttf'),
		'roboto-bold': require('./assets/Fonts/Roboto-Bold.ttf')
	})

	const onLoyoutRootView = useCallback(async () => {
		if (fontsLoaded || fonstError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fonstError]);

	if (!fontsLoaded && !fonstError) {
		return null
	}
	return (
		<View onLayout={onLoyoutRootView}>
			<ScreenState>
				<TodoState>
					<MainLayout />
				</TodoState>
			</ScreenState>
		</View>
	);
}





// const newTodo = {
// 	id: Date.now().toString(),
// 	title: title
// }

// setTodos((preTodos) => {
// 	return [
// 		...preTodos,
// 		newTodo
// 	]
// })


//const [loading, setLoading] = useState(false)
// async function loadApplication() {
// 	await Font.loadAsync({
// 		'roboto-regular': require('./assets/Fonts/Roboto-Regular.ttf'),
// 		'roboto-bold': require('./assets/Fonts/Roboto-Bold.ttf')
// 	})
// }

// if (!loading) {
// 	return (
// 		<AppLoading startAsync={loadApplication} onFinish={() => setLoading(true)} />
// 	)
// }

// useEffect(() => {
// 	async function loadApplication() {
// 		try {
// 			await Font.loadAsync({
// 				'roboto-regular': require('./assets/Fonts/Roboto-Regular.ttf'),
// 				'roboto-bold': require('./assets/Fonts/Roboto-Bold.ttf')
// 			})
// 			await new Promise(resolve => setTimeout(resolve, 2000));
// 		} catch (e) {
// 			console.warn(e);
// 		} finally {
// 			setLoading(true)
// 		}
// 	}
// 	loadApplication();
// }, []);