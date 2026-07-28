import styles from "./Home.module.css";

import savings from "../../../assets/savings.svg";
import LinkButton from "../../layout/linkButton/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem Vindo ao <span>Cost.</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/cost-project/newproject" text="Criar Projeto" />
      <img src={savings} alt="Criar Projeto" />
    </section>
  );
}
export default Home;
