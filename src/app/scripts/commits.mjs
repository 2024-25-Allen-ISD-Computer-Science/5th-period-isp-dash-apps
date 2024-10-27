import {Octokit} from "octokit";
//fetch and jsonify all the commits in a timespan for a single repo i.e for the page of a single application
async function repo_fetch(key,repo,owner){
  commits = {}
  const octokit = new Octokit({auth:key})
  var res = await octokit.request('GET /repos/{owner}/{repo}/commits', {
    owner: owner,
    repo: repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
      }
  })
  for (var i =0;i < res.data.length;i++){
    const commit = res.data[i]
    var author = commit["author"]
    
    //this object contains two properties for user info and commit info called user_info and commit_info respectively
    var commit_json = {
                        user_info:
                        {
                          author:author["login"],
                          profile_link:author["html_url"],
                          user_avatar:author["avatar_url"],
                          user_id:author["id"],
                          type:author["type"]
                        },
                        commit_info:
                        {
                          sha:commit["sha"],
                          url:commit["html_url"],
                          message:commit["commit"]["message"]
                        }
                      }
                      Object.defineProperty(commits,i, commit_json);
  }
  return commits
}

//fetch and jsonify all the commits in a timespan across a whole organization
function org_fetch(){}
console.log(await repo_fetch("placeholder","https://example.org/products.json"));