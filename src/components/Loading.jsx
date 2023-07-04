import React, { useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

function Loading() {
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div
          className="loader-container"
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            backgroundColor: "#00000099",
            zIndex: "1",
          }}
        >
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="transparent"
            color="orange.500"
            size="xl"
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Loading;
