export default function Commit({commit_info}) {
    return (
        commit_info.map(map_element)
    );
  }

function map_element(){
    return "hello";
}
