import { cartun } from "@/components/images";
import Image from "next/image";
import style from './style.module.css';

const HoverView = () => {
  return (
    <div className={`flex items-center h-full flex-wrap gap-2 justify-center ${style.list}`}>
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
  );
};

HoverView.displayName = "HoverView";

export default HoverView;