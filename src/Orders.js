import React, { useEffect, useState } from "react";
import classes from "./Orders.module.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

const Orders = () => {
  const { user } = useStateValue()[0];
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className={`${classes["orders"]}`}>
      <h1>Your orders</h1>
      <div className={`${classes["orders__order"]}`}>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
