/* eslint-disable array-callback-return */

function Project(props) {
  const { project } = props;
  return (
    project.map((project) => {
      <div className="image-project">
        <p>{project.title}</p>
        <img src={project.photo} alt={project.title} />
        <p>{project.description}</p>
        {/* {console.log(project.title)} */}
      </div>;
    }));
}

export default Project;
