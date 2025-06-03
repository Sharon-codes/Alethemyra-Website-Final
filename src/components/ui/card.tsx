import React from "react";

const Card: React.FC = () => {
  const left = 0;
  const top = 0;

  const handleSomething = (e: React.MouseEvent<HTMLDivElement>) => {
    // handle something
  };

  const maskImage = "url-to-image";
  const style = {
    position: "absolute",
    left: `${left}px`,
    top: `${top}px`,
  };

  const anotherHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    // handle another thing
  };

  return (
    <div>
      <div style={style} onClick={handleSomething}>
        {/* content */}
      </div>
      <div onClick={anotherHandler}>
        {/* content */}
      </div>
    </div>
  );
};

export default Card;