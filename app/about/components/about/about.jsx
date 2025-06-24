import Image from "next/image";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me10.jpg";
import Me2 from "@/public/image/me6.jpg";
import Me3 from "@/public/image/me9.jpg";
import Hr from "@/components/Hr";

function Title() {
  return (
    <div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
      <div className="flex justify-center items-center flex-col my-5 self-start ">
        <Hr variant="long"></Hr>
        <h1 className="text-3xl font-bold mt-3">Who I Am</h1>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Title />
      <div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
        <div className="flex justify-center items-start flex-col mb-5 ">
          <div className="images relative w-full  aspect-square">
            <div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 100 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                className="w-full h-full"
              >
                <Image
                  src={Me1}
                  alt="Alvalens"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                />
              </motion.div>
            </div>
            <div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{ delay: 0.3 }}
                className="w-full h-full"
              >
                <Image
                  src={Me2}
                  alt="Alvalens"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                />
              </motion.div>
            </div>
            <div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="w-full h-full"
              >
                <Image
                  src={Me3}
                  alt="Alvalens"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          className="flex justify-center items-start flex-col mb-5 md:px-10"
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.5,

            type: "spring",
          }}
        >
          <h2 className="text-2xl font-bold tracking-wider mb-3">
            👋 Hi, I&rsquo;m Manish Suthar
          </h2>
          <p className="text-gray-600 text-justify title text-lg">
            Hi, I&rsquo;m Manish Suthar — a passionate{" "}
            <span className="text-black font-medium">
              Full Stack Web Developer{" "}
            </span>{" "}
            from Gujarat, India. Currently pursuing a{" "}
            <span className="text-black font-medium">
              Bachelor of Computer Applications (BCA){" "}
            </span>{" "}
            at{" "}
            <span className="text-black font-medium">
              Marwadi University, Rajkot
            </span>
            , I love crafting impactful digital experiences using modern tech.
            My development journey is fueled by curiosity, dedication, and a
            deep interest in both front-end and back-end development. I actively
            sharpen my skills by building real-world projects that push my
            limits.{" "}
            <span className="text-black font-medium">
              My goal is to become a successful full-stack developer{" "}
            </span>{" "}
            at a leading tech company, where I can contribute to innovative and
            scalable web solutions.
          </p>
        </motion.div>
      </div>
    </>
  );
}
