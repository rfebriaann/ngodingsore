import { Geist, Geist_Mono } from "next/font/google";
import Jumbotorn from "./component/jumbotorn";
import Headline from "./component/headline";

export default function Home() {
  return (
    <div>
      <Jumbotorn />
      <Headline />
    </div>
  );
}
