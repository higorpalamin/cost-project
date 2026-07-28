import { useEffect, useState } from "react";
import Input from "../../form/input/Input";
import Select from "../../form/select/Select";
import SubmitButton from "../../form/submit/SubmitButton";

import styles from "./ProjectForm.module.css";

const categories_db = [
  {
    id: "1",
    name: "Infra",
  },
  {
    id: "2",
    name: "Desenvolvimento",
  },
  {
    id: "3",
    name: "Design",
  },
  {
    id: "4",
    name: "Planejamento",
  },
];

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(
    projectData || { name: "", budget: "", category: null },
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCategories(categories_db);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name}
      />
      <Input
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="Insira o orçamento do projeto"
        handleOnChange={handleChange}
        value={project.budget}
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ""}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}
export default ProjectForm;
