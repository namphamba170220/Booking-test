// import { useEffect } from "react";
// import categoryApi from "./api/categoryApi";
import CounterFeature from "./component/feature/Counter";
import Header from "./component/Header";
import Routers from "./route";
function App() {

  // useEffect(() => {

  //   const fetchCategory = async () => {
  //     // const params = {
  //     //   _limit :10,
  //     // }
  //     const categoryList = await categoryApi.getAll();
  //     // console.log(categoryList);
  //   };
  //   fetchCategory();
  // })
  return (
    <div className="App">
    <Header/>
    <Routers/>
    <CounterFeature/>
    </div>
  );
}

export default App;
