import * as React from "react";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const data = [
  {
    id: 1,
    url: "https://upload.wikimedia.org/wikipedia/commons/1/13/San_Agustin_Cathedral.jpg",
  },
  {
    id: 2,
    url: "https://media.istockphoto.com/id/518406718/photo/people-on-divisoria-park-promenade-cagayan-de-oro-city-philippines.jpg?s=612x612&w=0&k=20&c=AbFcTXWBtcKI2qJDlsdk7yWmzXJmbH6HsH6XDK_sNx8=",
  },
  {
    id: 3,
    url: "https://businessmirror.com.ph/wp-content/uploads/2023/05/nation01-052923.jpg",
  },
  {
    id: 4,
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/23/4a/79/view-from-the-pirate.jpg?w=1200&h=-1&s=1",
  },
  {
    id: 5,
    url: "https://live.staticflickr.com/4008/4343526032_5e52ddc2de_b.jpg",
  },
];

export function CarouselImage() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });

    const interval = setInterval(() => {
      const nextIndex = (current % count) + 1;
      api.scrollTo(nextIndex - 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [api, current, count]);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <Carousel
        className="w-full h-full flex justify-center items-center"
        setApi={setApi}
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={item.id}>
              <div
                className="flex flex-col items-center p-1"
                style={{
                  transform: `translateZ(${(index - current + 1) * 50}px)`,
                }}
              >
                <img
                  alt="Portrait"
                  src={item.url}
                  width={1000}
                  className="aspect-video object-cover rounded-lg"
                  height={338}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Button className="">Button</Button>
      </motion.div>
    </motion.div>
  );
}
