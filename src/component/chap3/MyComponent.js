
import PropTypes from 'prop-types';
const MyComponent=props=>{
    const {name, children,favoritNum}=props;
    return (
        <div>
            안녕 내 이름은  {name}이다.<br/>
            children은 {children}이다.
            내 최애 숫자는 {favoritNum}이다.
        </div>
    )
};
MyComponent.defaultProps={
    name:"김효정"
};
MyComponent.propTypes={
    name: PropTypes.string,
    favoritNum: PropTypes.number.isRequired
};
export default MyComponent;