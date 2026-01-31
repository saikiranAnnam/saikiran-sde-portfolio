'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
 {
  category: 'Programming Languages',
  skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'GoLang', 'C++'],
  color: '#0071e3',
 },
 {
  category: 'Databases & Storage',
  skills: ['SQL', 'PostgreSQL', 'MySQL', 'JDBC', 'Redis', 'DynamoDB'],
  color: '#0071e3',
 },
 {
  category: 'Cloud Technologies',
  skills: [
   'AWS Lambda',
   'DynamoDB',
   'S3',
   'Redshift',
   'Athena',
   'EMR Serverless',
   'EC2',
   'IAM',
   'Step Functions',
   'VPC',
   'Azure Data Factory',
   'Data Lake',
   'Databricks',
  ],
  color: '#0071e3',
 },
 {
  category: 'Frameworks & Libraries',
  skills: [
   'React.js',
   'Node.js',
   'Next.js',
   'Spring Boot',
   'Spring MVC',
   'Kafka',
   'LangChain',
   'Pandas',
   'PyTorch',
   'Sklearn',
   'Three.js',
  ],
  color: '#0071e3',
 },
 {
  category: 'Tools & Others',
  skills: [
   'REST APIs',
   'GraphQL',
   'Kubernetes',
   'Pods',
   'SageMaker',
   'Docker',
   'Git',
   'CI/CD',
   'AWS Bedrock',
   'Amazon Q',
  ],
  color: '#0071e3',
 },
]

export default function Skills() {
 const ref = useRef(null)
 const isInView = useInView(ref, { once: true, margin: '-100px' })

 return (
  <section
   id="skills"
   ref={ref}
   className="relative py-20 px-4 sm:px-6 lg:px-8 dark:bg-black bg-[#fbfbfd] transition-colors duration-300"
  >
   <div className="max-w-7xl mx-auto">
    <motion.div
     initial={{ opacity: 0, y: 50 }}
     animate={isInView ? { opacity: 1, y: 0 } : {}}
     transition={{ duration: 0.6 }}
     className="text-center mb-16"
    >
     <h2 className="text-4xl md:text-5xl font-semibold mb-4">
      <span className="dark:text-[#f5f5f7] text-[#1d1d1f]">Tech </span>
      <span className="bg-gradient-to-r from-[#0071e3] via-[#5f8cff] to-[#9b69ff] bg-clip-text text-transparent">
       Stack
      </span>
     </h2>
     <p className="dark:text-[#86868b] text-[#86868b] max-w-2xl mx-auto">
      Technologies and tools I work with to build scalable, production-grade systems
     </p>
    </motion.div>

    <div className="space-y-8">
     {skillCategories.map((category, categoryIndex) => (
      <motion.div
       key={categoryIndex}
       initial={{ opacity: 0, y: 30 }}
       animate={isInView ? { opacity: 1, y: 0 } : {}}
       transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
       className="dark:bg-[#1d1d1f] bg-white dark:border dark:border-[#424245] border border-[#d2d2d7] p-6 rounded-lg"
      >
       <h3
        className="text-xl font-bold mb-4"
        style={{ color: category.color }}
       >
        {category.category}
       </h3>
       <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, skillIndex) => (
         <motion.div
          key={skillIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
           duration: 0.3,
           delay: categoryIndex * 0.1 + skillIndex * 0.03,
          }}
          whileHover={{ scale: 1.1, y: -3 }}
          className="px-4 py-2 dark:bg-black bg-[#fbfbfd] dark:border dark:border-[#424245] border border-[#d2d2d7] rounded-lg hover:dark:border-[#0071e3]/50 hover: border-[#0071e3]/50 transition-all cursor-default"
         >
          <span className="dark:text-[#86868b] text-[#86868b] text-sm font-medium">{skill}</span>
         </motion.div>
        ))}
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 )
}
