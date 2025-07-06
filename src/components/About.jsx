import { section } from 'framer-motion/client'
import { motion } from 'framer-motion'
import React from 'react'

const About = () => {
    return (
        <section id='about' className='w-full py-20 bg-[#2e2b2b] px-6 md:px-16'>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0'>
                <div className='flex-1 flex flex-col justify-center items-start space-y-6 md:space-y-8'>
                    <motion.h2 className='text-4xl md:text-5xl font-extrabold text-[#d97706]'
                    initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
                    >
                        About me
                    </motion.h2>
                    <motion.p className='text-lg md:text-xl text-gray-300'
                    initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8,delay:0.2 }}
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse corrupti aperiam amet illum, sint facilis accusamus soluta explicabo perferendis nostrum vitae maxime eius numquam quae quod porro aliquid tenetur. Vel!
                        Provident harum doloremque dolor assumenda sequi id voluptas deserunt quam eos hic voluptatem, modi molestiae quas recusandae quis adipisci perferendis reiciendis eaque, facilis pariatur est! Iure velit earum dolor accusantium!
                        Aspernatur veritatis accusantium nostrum officia! Ipsam corrupti eveniet soluta perferendis beatae vitae repellendus qui voluptates debitis aperiam quia dicta nobis rerum, explicabo velit illum voluptatibus voluptatum blanditiis ratione commodi provident.
                        Molestiae quisquam iusto voluptatem numquam exercitationem soluta ducimus odio id vitae magni quam praesentium placeat, quos dolores porro quia eum velit recusandae magnam quibusdam expedita qui. Excepturi sequi esse omnis.
                        Fuga vero odio ab facilis necessitatibus itaque voluptatibus culpa, mollitia sint, in debitis veritatis blanditiis officia, consequatur corporis natus labore illo reprehenderit magni unde eaque iusto expedita! Corporis, quidem ad.
                    </motion.p>
                    <motion.p className='text-lg md:text-xl text-gray-300'
                    initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8,delay:0.4 }}
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse corrupti aperiam amet illum, sint facilis accusamus soluta explicabo perferendis nostrum vitae maxime eius numquam quae quod porro aliquid tenetur. Vel!
                        Provident harum doloremque dolor assumenda sequi id voluptas deserunt quam eos hic voluptatem, modi molestiae quas recusandae quis adipisci perferendis reiciendis eaque, facilis pariatur est! Iure velit earum dolor accusantium!
                        Aspernatur veritatis accusantium nostrum officia! Ipsam corrupti eveniet soluta perferendis beatae vitae repellendus qui voluptates debitis aperiam quia dicta nobis rerum, explicabo velit illum voluptatibus voluptatum blanditiis ratione commodi provident.
                        Molestiae quisquam iusto voluptatem numquam exercitationem soluta ducimus odio id vitae magni quam praesentium placeat, quos dolores porro quia eum velit recusandae magnam quibusdam expedita qui. Excepturi sequi esse omnis.
                        Fuga vero odio ab facilis necessitatibus itaque voluptatibus culpa, mollitia sint, in debitis veritatis blanditiis officia, consequatur corporis natus labore illo reprehenderit magni unde eaque iusto expedita! Corporis, quidem ad.
                    </motion.p>
                    <motion.a 
                     href='./Resume.pdf'
                     className='inline-block mt-6 px-8 py-3 bg-[#d97706] text-lg font-semibold'
                     initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8}}
                    >
                        Download My Resume
                    </motion.a>
                </div>
                <div className='flex-1'>
                   <motion.img src='image.png'
                   
                   initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.5 }}
          className='w-full h-auto  transition duration-300'
                   >

                   </motion.img>
                </div>
            </div>

        </section>
    )
}
export default About