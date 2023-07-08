import Image, { StaticImageData } from "next/image";
import AddToCart from "./AddToCart";
import Link from "next/link";
import {Button} from "@/components/ui/button"
function ProductCard(props: {
  title: string;
  price: number;
  img: StaticImageData;
  category: string;
  id: number;
}) {
  return (
    <Link href={`/products/${props.id}`}>
      <div className="py-5">
        <Image src={props.img} alt="product" />
        <h3 className="font-bold text-lg mt-3">{props.title}</h3>
        <p className="font-bold text-lg">${props.price}</p>
        <p className="font-bold text-lg">
          Category{" "}
          <span className="text-base font-normal capitalize">
            {props.category}
          </span>
        </p>
        <Button className='bg-black text-white hover:bg-black text-white '>Add to Cart</Button>
        
      </div>
    </Link>
  );
}

export default ProductCard;
