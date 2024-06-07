import { RiReactjsLine } from "react-icons/ri"
import { TbBrandTypescript } from "react-icons/tb"
import { TbBrandTailwind } from "react-icons/tb"
import { TbBrandRedux } from "react-icons/tb"
import { TbBrandGraphql } from "react-icons/tb"
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa"
import { BiLogoAws } from "react-icons/bi"
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { SiTerraform } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { LiaJenkins } from "react-icons/lia";
import { SiGithubactions } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-9"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <TbBrandRedux className="text-7xl text-purple-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <TbBrandTypescript className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <TbBrandTailwind className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <TbBrandGraphql className="text-7xl text-pink-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <FaNodeJs className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <BiLogoAws className="text-7xl text-orange-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <SiMysql className="text-7xl text-grey-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <BiLogoSpringBoot className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <FaDocker className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <SiKubernetes className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <FaPython className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <SiRedis className="text-7xl text-red-400"/>
            </motion.div>
            <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <SiApachekafka className="text-7xl text-blue-600"/>
            </motion.div>
            <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <SiTerraform className="text-7xl text-blue-200"/>
            </motion.div>
            <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <SiMicrosoftazure className="text-7xl text-blue-100"/>
            </motion.div>
            <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <FaHtml5 className="text-7xl text-yellow-200"/>
            </motion.div>
            <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <FcLinux className="text-7xl text-yellow-200"/>
            </motion.div>
            <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <LiaJenkins className="text-7xl text-red-400"/>
            </motion.div>

            <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
                <SiGithubactions className="text-7xl text-black-400"/>
            </motion.div>

        </motion.div>
        
        
    </div>
  )
}

export default Technologies