import { useCallback, useEffect, useState } from "react";

export const Llistat = () => {
  const [items, setItems] = useState([]);

  const llistarItems = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const resp = await fetch(
      "https://c4-ex8-back.herokuapp.com/items/llistat",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const items = await resp.json();
    setItems(items);
  }, []);

  useEffect(llistarItems, [llistarItems]);

  return (
    <section>
      <h2>Els teus ítems</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.nom}
            <p>
              Utilitat: {item.utilitat} <br></br>
              {item.descripcio}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
