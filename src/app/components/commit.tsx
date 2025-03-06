import commits from "../../commit_info.json";
export default function Commit({commit_info}) {
    return (
      <>
        <ul>
          
        {commits.commits.map((commit) => (
          <>
          <div  className="commitlist"key={commit.commit_no}>
            <div className="commits">
              {commit.commit_info.message}
          <img src="https://github.com/stylo-codes-stuff.png?size=25"></img>
          </div>
          </div>

          </>
        ))}
      </ul>    
      </>
      );
  }


