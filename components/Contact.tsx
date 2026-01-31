'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'

const contactInfo = [
 {
  icon: FaEnvelope,
  label: 'Email',
  value: 'saikiranannam99@gmail.com',
  link: 'mailto:saikiranannam99@gmail.com',
  color: '#ff6b9d',
 },
 {
  icon: FaPhone,
  label: 'Phone',
  value: '(+1) 571-241-5216',
  link: 'tel:+15712415216',
  color: '#34c759',
 },
 {
  icon: FaMapMarkerAlt,
  label: 'Location',
  value: 'Fairfax, VA',
  link: null,
  color: '#ff9900',
 },
 {
  icon: FaLinkedin,
  label: 'LinkedIn',
  value: 'linkedin.com/in/saikiranannam',
  link: 'https://linkedin.com/in/saikiranannam',
  color: '#0a66c2',
 },
 {
  icon: FaGithub,
  label: 'GitHub',
  value: 'github.com/saikiranAnnam',
  link: 'https://github.com/saikiranAnnam',
  color: '#333',
 },
]

export default function Contact() {
 const ref = useRef(null)
 const isInView = useInView(ref, { once: true, margin: '-100px' })
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
 })
 const [isSubmitting, setIsSubmitting] = useState(false)
 const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({
   ...formData,
   [e.target.name]: e.target.value,
  })
 }

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  setSubmitStatus('idle')

  try {
   // Create mailto link with form data
   const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio')
   const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
   )
   const mailtoLink = `mailto:saikiranannam99@gmail.com?subject=${subject}&body=${body}`
   
   // Open email client
   window.location.href = mailtoLink
   
   // Simulate success (you can replace this with actual API call)
   setTimeout(() => {
    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 3 seconds
    setTimeout(() => {
     setSubmitStatus('idle')
    }, 3000)
   }, 500)
  } catch (error) {
   setSubmitStatus('error')
   setIsSubmitting(false)
  }
 }

 return (
  <section
   id="contact"
   ref={ref}
   className="relative py-20 px-4 sm:px-6 lg:px-8 dark:bg-black bg-[#fbfbfd] transition-colors duration-300"
  >
   {/* Subtle lighting effects */}
   <motion.div
    className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
    animate={{
     background: 'radial-gradient(circle, rgba(0, 113, 227, 0.1) 0%, transparent 70%)',
     scale: [1, 1.1, 1],
     opacity: [0.2, 0.3, 0.2],
    }}
    transition={{
     duration: 8,
     repeat: Infinity,
     ease: 'easeInOut',
    }}
   />
   <motion.div
    className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
    animate={{
     background: 'radial-gradient(circle, rgba(95, 140, 255, 0.1) 0%, transparent 70%)',
     scale: [1, 1.2, 1],
     opacity: [0.2, 0.3, 0.2],
    }}
    transition={{
     duration: 10,
     repeat: Infinity,
     ease: 'easeInOut',
     delay: 1,
    }}
   />

   <div className="max-w-7xl mx-auto relative z-10">
    <motion.div
     initial={{ opacity: 0, y: 50 }}
     animate={isInView ? { opacity: 1, y: 0 } : {}}
     transition={{ duration: 0.6 }}
     className="text-center mb-16"
    >
     <h2 className="text-4xl md:text-5xl font-semibold mb-4">
      <span className="dark:text-[#f5f5f7] text-[#1d1d1f]">Let's </span>
      <span className="bg-gradient-to-r from-[#0071e3] via-[#5f8cff] to-[#9b69ff] bg-clip-text text-transparent">
       Connect
      </span>
     </h2>
     <p className="dark:text-[#86868b] text-[#86868b] max-w-2xl mx-auto">
      Have a project in mind or want to collaborate? I'd love to hear from you!
     </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-12">
     {/* Left Side - Contact Info Cards */}
     <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="space-y-6"
     >
      <div>
       <h3 className="text-2xl font-semibold dark:text-[#f5f5f7] text-[#1d1d1f] mb-6">
        Get in Touch
       </h3>
       <p className="dark:text-[#86868b] text-[#86868b] mb-8">
        Feel free to reach out through any of these channels. I'm always open to discussing new opportunities, projects, or just having a chat!
       </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
       {contactInfo.map((info, index) => {
        const Icon = info.icon
        const content = (
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="dark:bg-[#1d1d1f] bg-white dark:border dark:border-[#424245] border border-[#d2d2d7] p-5 rounded-xl hover:dark:border-opacity-60 hover: border-opacity-60 transition-all group cursor-pointer"
          style={{
           borderColor: `${info.color}40`,
          }}
          whileHover={{ 
           scale: 1.02, 
           y: -3,
           borderColor: info.color,
          }}
         >
          <div
           className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
           style={{
            background: `linear-gradient(135deg, ${info.color}20, ${info.color}10)`,
           }}
          >
           <Icon size={20} style={{ color: info.color }} />
          </div>
          <div className="dark:text-[#86868b] text-[#86868b] text-xs mb-1 uppercase tracking-wider">
           {info.label}
          </div>
          <div className="dark:text-[#f5f5f7] text-[#1d1d1f] font-semibold text-sm">
           {info.value}
          </div>
         </motion.div>
        )

        return info.link ? (
         <motion.a
          key={index}
          href={info.link}
          target={info.link.startsWith('http') ? '_blank' : undefined}
          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
          whileTap={{ scale: 0.98 }}
         >
          {content}
         </motion.a>
        ) : (
         <div key={index}>{content}</div>
        )
       })}
      </div>
     </motion.div>

     {/* Right Side - Contact Form */}
     <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="dark:bg-[#1d1d1f] bg-white dark:border dark:border-[#424245] border border-[#d2d2d7] p-8 rounded-xl"
     >
      <h3 className="text-2xl font-semibold dark:text-[#f5f5f7] text-[#1d1d1f] mb-6">
       Send a Message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
       <div>
        <label
         htmlFor="name"
         className="block text-sm font-medium dark:text-[#86868b] text-[#86868b] mb-2"
        >
         Name
        </label>
        <input
         type="text"
         id="name"
         name="name"
         value={formData.name}
         onChange={handleChange}
         required
         className="w-full px-4 py-3 dark:bg-black bg-[#fbfbfd] dark:border dark:border-[#424245] border border-[#d2d2d7] rounded-lg dark:text-[#f5f5f7] text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all"
         placeholder="Your name"
        />
       </div>

       <div>
        <label
         htmlFor="email"
         className="block text-sm font-medium dark:text-[#86868b] text-[#86868b] mb-2"
        >
         Email
        </label>
        <input
         type="email"
         id="email"
         name="email"
         value={formData.email}
         onChange={handleChange}
         required
         className="w-full px-4 py-3 dark:bg-black bg-[#fbfbfd] dark:border dark:border-[#424245] border border-[#d2d2d7] rounded-lg dark:text-[#f5f5f7] text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all"
         placeholder="your.email@example.com"
        />
       </div>

       <div>
        <label
         htmlFor="subject"
         className="block text-sm font-medium dark:text-[#86868b] text-[#86868b] mb-2"
        >
         Subject
        </label>
        <input
         type="text"
         id="subject"
         name="subject"
         value={formData.subject}
         onChange={handleChange}
         className="w-full px-4 py-3 dark:bg-black bg-[#fbfbfd] dark:border dark:border-[#424245] border border-[#d2d2d7] rounded-lg dark:text-[#f5f5f7] text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all"
         placeholder="What's this about?"
        />
       </div>

       <div>
        <label
         htmlFor="message"
         className="block text-sm font-medium dark:text-[#86868b] text-[#86868b] mb-2"
        >
         Message
        </label>
        <textarea
         id="message"
         name="message"
         value={formData.message}
         onChange={handleChange}
         required
         rows={6}
         className="w-full px-4 py-3 dark:bg-black bg-[#fbfbfd] dark:border dark:border-[#424245] border border-[#d2d2d7] rounded-lg dark:text-[#f5f5f7] text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all resize-none"
         placeholder="Tell me about your project or just say hello!"
        />
       </div>

       <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-gradient-to-r from-[#0071e3] to-[#5f8cff] rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:from-[#0077ed] hover:to-[#6f9cff] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#0071e3]/20"
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
       >
        {isSubmitting ? (
         <>
          <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
           className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
          />
          Sending...
         </>
        ) : submitStatus === 'success' ? (
         <>
          <FaCheckCircle size={18} />
          Message Sent!
         </>
        ) : (
         <>
          <FaPaperPlane size={18} />
          Send Message
         </>
        )}
       </motion.button>

       {submitStatus === 'error' && (
        <motion.p
         initial={{ opacity: 0, y: -10 }}
         animate={{ opacity: 1, y: 0 }}
         className="text-sm text-red-500 text-center"
        >
         Something went wrong. Please try again or use the email link above.
        </motion.p>
       )}
      </form>
     </motion.div>
    </div>
   </div>
  </section>
 )
}
