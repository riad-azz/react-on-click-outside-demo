import { useOnClickOutside } from "../hooks/useOnClickOutside";

const Card = ({ setIsOpen }) => {
  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const cardRef = useOnClickOutside(handleClickOutside);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        background: "rgba(0,0,0,0.2)",
      }}
    >
      <div
        ref={cardRef}
        style={{
          backgroundColor: "white",
          padding: "20px",
          height: "200px",
          width: "400px",
        }}
      >
        <h1>Card</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse cumque
          quae expedita libero dicta id iste consectetur, optio doloribus
          accusamus quaerat repellendus sed rerum non omnis. Id voluptate
          reprehenderit ducimus.
        </p>
      </div>
    </div>
  );
};

export default Card;
