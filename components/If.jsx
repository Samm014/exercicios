export default function If(props){
    if (props.expression) {
        return props.children;
    } else {
        return null
    }
}