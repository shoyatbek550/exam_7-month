import Image from "next/image";
import "./image.scss";
const CustomImage = ({ product }) => {

  return (
      
        <Image
          src={`http://207.154.221.44:4002/${product?.image}`}
          alt={product.name}
          width={190}
          height={190}
          className={`customImage`}
        />
  );
};

export default CustomImage;
