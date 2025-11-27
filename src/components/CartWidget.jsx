const CartWidget = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
        alt="Carrito"
        style={{ width: "30px" }}
      />
      <span style={{ fontWeight: "bold" }}>0</span>
    </div>
  );
};

export default CartWidget;
