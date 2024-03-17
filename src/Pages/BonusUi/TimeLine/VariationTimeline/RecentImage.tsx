import { Image, LI, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";

const RecentImage = () => {
    const Imgs = ['dashboard-2/product/1.png', 'dashboard-2/product/2.png', 'dashboard-2/product/1.png']
  return (
    <div className="recent-images">
      <UL className="simple-list flex-row">
        {Imgs &&
          Imgs.map((item, index) => (
            <LI key={index}>
              <div className="recent-img-wrap">
                <Image
                  src={dynamicImage(item)}
                  alt="chair"
                  width={32}
                  height={32}
                />
              </div>
            </LI>
          ))}
      </UL>
    </div>
  );
};

export default RecentImage;
