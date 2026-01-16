import { Colors } from "@/constants/Colors";
import { useColorScheme } from 'react-native';

type theme = 'light' | 'dark'
type schema = theme | null


const useColors = () => {
    const mode = useColorScheme() as schema
    let themeMode
    if( mode !== null ) themeMode = Colors[mode]
    return themeMode
}
export default useColors;