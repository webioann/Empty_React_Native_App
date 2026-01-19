import { useTheme } from '@/context/ThemeContext';
import { FontAwesome6 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

interface ICheckboxProps {
    isChecked: boolean
    color: string
    size: number
    checker: () => void
}

const CheckBox = ({ isChecked, color, size, checker }: ICheckboxProps) => {
    const theme = useTheme()

    return (
        <TouchableOpacity 
            activeOpacity={0.6}
            onPress={() => checker()}
            style={{ 
                backgroundColor: isChecked ? color : theme.bg_main,
                width: size,
                height: size,
                borderRadius: size / 6,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: isChecked ? 0 : 2,
                borderColor: isChecked ? 'none' : theme.text_second
            }}>
            { isChecked ? <FontAwesome6 name="check" size={size -4} color={theme.text_main} /> : null}
        </TouchableOpacity>
    )
}

export default CheckBox;

