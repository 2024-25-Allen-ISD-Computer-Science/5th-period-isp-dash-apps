import { version } from "os";

export default function AppCard({title,version,description,url}) {
  return (
    <>
      <div className="card">
        <img src="placeholder.png" alt="Software Logo" className="card_image"/>
          <div className="text-30px">{title}</div>
          <p className="version">{version}</p>
          <p>{description}</p>
          <p><button><a href={url}>Learn More</a></button></p>
      </div>
    </>
  );
}