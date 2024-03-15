// import Detail from './EcimmerceProductDetail';
import { ImgGalery } from './syles/EcommerceGalery';
function EcommerceProduct({detail}) {
  return (
    <div>
      {detail.map((curElem) => {
        return (
          <div key={curElem.id}>
            <div>{curElem.title}</div>
            <div>{curElem.pricePromotion}</div>
            <div>{curElem.price}</div>
          </div>
        );
      })}
      {ImgGalery}
    </div>
  );
}

export default EcommerceProduct;
