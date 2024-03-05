import "./index.css";
import { TiTick, TiTimes } from "react-icons/ti";
export default function Card({ title, price, subscriptionPlans, buttonColor }) {
  const listItems = subscriptionPlans.map((plan) =>
    plan.checked ? (
      <li key={plan.id}>
        {<TiTick />}
        {plan.data}
      </li>
    ) : (
      <li className="fade" key={plan.id}>
        {<TiTimes />}
        {plan.data}
      </li>
    )
  );

  return (
    <div className="card">
      <p>{title}</p>
      <h1>{price}</h1>
      <hr />
      <ul>{listItems}</ul>
      {buttonColor.clicked ? (
        <button className="buttonColorChange">Button</button>
      ) : (
        <button>Button</button>
      )}
    </div>
  );
}
