import React from "react";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = (props) => {
  const { children } = props;

  return (
    <main>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab qui consequatur corporis similique quibusdam facilis iste magni fugit nemo numquam.</p>

    </main> 
  );
};

export default Main;
