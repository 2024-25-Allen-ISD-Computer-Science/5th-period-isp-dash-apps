import commits from "../../commit_info.json";
export default function Commit({commit_info}) {
    return (
        <ul>
        {commits.commits.map((commit) => (
          <li key={commit.user_info}>{info.}</li>
        ))}
      </ul>    );
  }

function map_element(){
    return "hello";
}
