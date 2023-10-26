import { Btn } from "../Account/Assets";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();
  return (
    <main className="w-screen h-screen">
      <header
        className="text-center items-center h-4/6 flex flex-col
      justify-center">
        <div className="py-10">Oops!...</div>
        <div className="text-2xl pb-10">Looks like nothing is here</div>
        <div className="text-3xl text-4xl text-center">¯\_(ツ)_/¯</div>
        <div
          className="w-screen"
          onClick={() => {
            nav("/");
          }}>
          <Btn name="Go home" />{" "}
        </div>
      </header>
    </main>
  );
};

export default NotFound;
