import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Message from "../../layout/message/Message";
import Container from "../../layout/container/Container";
import LinkButton from "../../layout/linkButton/LinkButton";
import Loading from "../../layout/loading/Loading";

import styles from "./Projects.module.css";
import ProjectCard from "../../project/projectCard/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState('');

  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(resp => resp.json())
    .then((data) => {
      setProjects(projects.filter((project) => project.id ==! id))
    }).catch(err => console.log(err));
    setProjectMessage('Projeto removido com sucesso');
  }
  {/* executa apenas uma vez a chamada ao banco*/}
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, []);

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}
      {/* Verifica se a mensagem existe antes de renderizar o componente Message */}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {/* quando não houver projetos */}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  );
}

export default Projects;
