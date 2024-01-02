"use client";
import Content from "./component/Content";
import Timer from "./component/Timer";
import CountDown from "./component/CountDown";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const onFinish = () => {
    router.push("/");
  };
  return (
    <div
      className={`...${inter.className} grid place-items-center h-screen bg-slate-900`}
    >
      <div>
        <div>HEADER</div>
        {/* <Timer timer={new Date()} /> */}
        <CountDown initialSeconds={20} onFinish={onFinish} />

        <div>Current timer</div>
        <Content />
        <div>restart</div>
        <div>footer</div>
      </div>
    </div>
  );
}
