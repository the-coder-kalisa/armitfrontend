import logo from "assets/images/logo.svg";
import { useEffect, useState } from "react";

import smallLogo from "assets/images/small_logo.svg";

// ==============================|| LOGO ||============================== //

const Logo = ({ drawn }) => {
  const [changeImage, setChangeImage] = useState(false);
  useEffect(() => {
    // set time out of 500ms and change image
    if (drawn) {
      setTimeout(() => {
        setChangeImage(true);
      }, 500);
    } else {
      setChangeImage(false);
    }
  }, [drawn]);

  return (
    <div
      style={{ alignItems: "center", display: "flex", flexDirection: "row" }}
    >
      <img
        style={{
          objectFit: "contain",
          height: "auto",
          width: changeImage ? 39 : 150,
        }}
        src={changeImage ? smallLogo : logo}
        alt=""
      />
    </div>
  );
};

export default Logo;
