import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "./BillingForm";
import "./Settings.css";

async function handleFormSubmit(storage, { token, error }) {
    if (error) {
      onError(error);
      return;
    }
  
    setIsLoading(true);
  
    try {
      await billUser({
        storage,
        source: token.id
      });
  
      alert("Your card has been charged successfully!");
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }
  
  return (
    <div className="Settings">
      <StripeProvider stripe={stripe}>
        <Elements
          fonts={[
            {
              cssSrc:
                "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800",
            },
          ]}
        >
          
          <BillingForm isLoading={isLoading} onSubmit={handleFormSubmit} />
        </Elements>
      </StripeProvider>
    </div>
  );