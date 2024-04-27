import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return (
    <div
      style={{
        width: "80%",
        height: "auto",
        textAlign: "justify",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quos
      perspiciatis exercitationem perferendis soluta eveniet commodi vel error
      deserunt nihil, fugit doloribus quae aliquid libero autem adipisci quod
      vitae voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Rem quos perspiciatis exercitationem perferendis soluta eveniet commodi
      vel error deserunt nihil, fugit doloribus quae aliquid libero autem
      adipisci quod vitae voluptatum? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Rem quos perspiciatis exercitationem perferendis soluta
      eveniet commodi vel error deserunt nihil, fugit doloribus quae aliquid
      libero autem adipisci quod vitae voluptatum? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Rem quos perspiciatis exercitationem
      perferendis soluta eveniet commodi vel error deserunt nihil, fugit
      doloribus quae aliquid libero autem adipisci quod vitae voluptatum? Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Rem quos perspiciatis
      exercitationem perferendis soluta eveniet commodi vel error deserunt
      nihil, fugit doloribus quae aliquid libero autem adipisci quod vitae
      voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
      quos perspiciatis exercitationem perferendis soluta eveniet commodi vel
      error deserunt nihil, fugit doloribus quae aliquid libero autem adipisci
      quod vitae voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Rem quos perspiciatis exercitationem perferendis soluta eveniet
      commodi vel error deserunt nihil, fugit doloribus quae aliquid libero
      autem adipisci quod vitae voluptatum? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Rem quos perspiciatis exercitationem
      perferendis soluta eveniet commodi vel error deserunt nihil, fugit
      doloribus quae aliquid libero autem adipisci quod vitae voluptatum? Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Rem quos perspiciatis
      exercitationem perferendis soluta eveniet commodi vel error deserunt
      nihil, fugit doloribus quae aliquid libero autem adipisci quod vitae
      voluptatum?
    </div>
  );
};

export default Home;
