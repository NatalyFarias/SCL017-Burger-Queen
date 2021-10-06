import MenuBreakfast from "./../components/MenuBreakfast";
import OrderDetail from "./../components/OrderDetail";

const Breakfast = () => {
    return (
        <div className='breakfast'>
            <MenuBreakfast />
            <hr />
            <OrderDetail />
        </div>
    )
}

export default Breakfast;