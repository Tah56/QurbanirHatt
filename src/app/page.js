import AllFetures from "@/component/AllFetures/AllFetures";
import Banner from "@/component/Banner/Banner";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
  <>
   <Banner></Banner>
    <AllFetures></AllFetures>

  </>
  );
}
