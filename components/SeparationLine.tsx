import { StyleSheet, View } from 'react-native'

interface IProps {
    margin: number
    color: string
}

const SeparationLine = ({ margin, color }: IProps) => {
    return (
        <View style={{height: StyleSheet.hairlineWidth, marginVertical: margin, backgroundColor: color}}/>
    )
}

export default SeparationLine;
