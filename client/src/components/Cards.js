import Card from "./Card";

const Cards = ({ items }) => {
  return (
    <div className="cards">
      {items.length
        ? items.map((item) => {
            return <Card item={item} key={item._id} />;
          })
        : "No Items"}
    </div>
  );
};

export default Cards;
