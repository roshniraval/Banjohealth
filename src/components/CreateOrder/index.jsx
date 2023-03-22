import CreateOrderForm from "../Forms/CreateOrderForm";
import CustomCard from "../CustomCard";

const CreateOrder = () => {
  return (    
    <CustomCard 
    title="Create a New Order"
    subtitle="Fill out the required information to create a new order."
    component={<CreateOrderForm />}
    />
  );
}

export default CreateOrder;