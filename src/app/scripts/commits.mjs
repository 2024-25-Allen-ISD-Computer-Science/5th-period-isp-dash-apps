import {Octokit} from "octokit";
import "fs";
//fetch and jsonify all the commits in a timespan for a single repo for the page of a single application.
async function repo_fetch(key,repo,owner){
  var commits = {}
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
                      Object.defineProperty(commits, `${i}`, {
                        value: commit_json,
                        writable: true,
                        enumerable: true,
                        configurable: true,
                      });
  }
fs.writeFile('conmmits.json', String(commits), function (err) {
  if (err) throw err;
  console.log('commits logged');
});}

//fetch and jsonify all the commits in a timespan across a whole organization
async function org_fetch(key){
  // Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

var res = await octokit.request('GET /orgs/Dash-Apps/repos', {
  org: 'ORG',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
return res;  
}
