import React from "react";
const Home = (props) => {
  const [num, setNum] = React.useState(0);

  // component did update 
  React.useEffect(() => {
    console.log("update");
  });

  // component did mount
  React.useEffect(() => {
    console.log("mounted");
  }, []);

  return (
    <div>
      <div>{num}</div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        ++++++++
      </button>
    </div>
  );
};
export default Home;
