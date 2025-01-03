import { cartun, shoes } from "@/components/images";
import Image from "next/image";
import style from "./style.module.css";

const HoverView = () => {
  return (
    <div className="h-full">
      <div
        className={`flex items-center h-full flex-wrap gap-2 justify-center ${style.list}`}
      >
        {cartun.map((item, index) => (
          <div key={index} className={style.item}>
            <Image
              src={item}
              alt="cartun"
              width={1000}
              height={1000}
              className="bg-[#ffa4d5] w-36 h-[400px] object-cover object-center"
            />
          </div>
        ))}
      </div>
      <div
        className={`flex flex-wrap items-center h-full gap-2 justify-center ${style.list_card_shoe}`}
      >
        {shoes.map((item, index) => (
          <div key={index} className="bg-[#ffa4d5] w-36 h-[400px] object-cover object-center">
            <Image
              src={item}
              alt="cartun"
              width={1000}
              height={1000}
              className="bg-[#ffa4d5] w-36 h-[400px] object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

HoverView.displayName = "HoverView";

export default HoverView;
