import commits from "../../commit_info.json";
import localFont from 'next/font/local';
const Roboto = localFont({
  //src/app/components/commit.tsx
  src: "../fonts/Roboto-Light.ttf",
  variable: "--font-Roboto-Black",
});
//{`${RubikBold.className} container text-40px`}
export default function Commit({ commit_info }) {
  return (
    <>
      <ul>

        {commits.commits.map((commit) => (
          <>
          
            <div className={`${Roboto.className} commit`} key={commit.commit_no}>
              <div className="commits">
                <div className="commit_message">
                  {commit.commit_info.message}
                </div>
                <p>
                {commit.commit_no}

                  <img src="https://github.com/stylo-codes-stuff.png?size=25"></img>
                  {commit.user_info.author}
                </p>

              </div>
            </div>

          </>
        ))}
      </ul>
    </>
  );
}


