/**
 <If test={exp}>
    <span>...</span>
    <span>...</span>
    <span>...</span>
 </If>
 */
export default props => {
    if (props.teste) {
        return props.children;
    } else {
        return false;
    }
}