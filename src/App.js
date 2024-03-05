import Card from "./Card";
import "./index.css";

export default function App() {
  const subscriptionPlans = {
    planOne: [
      { id: 1, data: "Single User", checked: true },
      { id: 2, data: "50GB Storage", checked: true },
      { id: 3, data: "Unlimited Public Projects", checked: true },
      { id: 4, data: "Community Access", checked: true },
      { id: 5, data: "Unlimited Private Projects", checked: false },
      { id: 6, data: "Dedicated Phone Support", checked: false },
      { id: 7, data: "Free Subdomain", checked: false },
      { id: 8, data: "Monthly Status Reports", checked: false },
    ],
    planTwo: [
      { id: 9, data: "5 Users", checked: true },
      { id: 10, data: "50GB Storage", checked: true },
      { id: 11, data: "Unlimited Public Projects", checked: true },
      { id: 12, data: "Community Access", checked: true },
      { id: 13, data: "Unlimited Private Projects", checked: true },
      { id: 14, data: "Dedicated Phone Support", checked: true },
      { id: 15, data: "Free Subdomain", checked: true },
      { id: 16, data: "Monthly Status Reports", checked: false },
    ],
    planThree: [
      { id: 17, data: "Unlimited Users", checked: true },
      { id: 18, data: "50GB Storage", checked: true },
      { id: 19, data: "Unlimited Public Projects", checked: true },
      { id: 20, data: "Community Access", checked: true },
      { id: 21, data: "Unlimited Private Projects", checked: true },
      { id: 22, data: "Dedicated Phone Support", checked: true },
      { id: 23, data: "Free Subdomain", checked: true },
      { id: 24, data: "Monthly Status Reports", checked: true },
    ],
  };
  const buttonColor = {
    planOne: { clicked: false },
    planTwo: { clicked: false },
    planThree: { clicked: true },
  };
  return (
    <div className="app">
      <Card
        title="FREE"
        price="$0/month"
        subscriptionPlans={subscriptionPlans.planOne}
        buttonColor={buttonColor.planOne}
      />
      <Card
        title="PLUS"
        price="$9/month"
        subscriptionPlans={subscriptionPlans.planTwo}
        buttonColor={buttonColor.planTwo}
      />
      <Card
        title="PRO"
        price="$49/month"
        subscriptionPlans={subscriptionPlans.planThree}
        buttonColor={buttonColor.planThree}
      />
    </div>
  );
}
