import ErrorMSG from "../ErrorMSG/errorMSG";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Page404 = () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="This page is not found" />
        <title>This page is not found</title>
      </Helmet>

      <ErrorMSG />

      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}>
        Ой, а де це я ?
      </p>

      <Link
        style={{
          display: "block",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          marginTop: "30px",
        }}
        to="/"
      >
        Повернутись на головну сторінку
      </Link>
    </div>
  );
};

export default Page404;
