import Card from "./Card";

function ProjectCard({ content, title, img_link, link }) {
  return (
    <a href={link} target="blank">
        <Card title={title} content={content} img_link={img_link} />
    </a>
  );
}
export default ProjectCard;
