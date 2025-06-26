import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I will get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "mr.kabir14320@gmail.com",
      link: "mailto:mr.kabir14320@gmail.com"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+91 9336828088",
      link: "tel:+919336828088"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Haryana, India",
      link: null
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "View Profile",
      link: "https://www.linkedin.com/in/mohd-kaif-054b17262/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[var(--tech-navy)]">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-4xl font-bold mb-4 neon-glow">Get In Touch</h2>
          <div className="w-24 h-1 bg-[var(--matrix-green)] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss your next project.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div 
            className="glass-dark rounded-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--matrix-green)]">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                >
                  <div className="w-12 h-12 bg-[var(--matrix-green)]/20 rounded-lg flex items-center justify-center mr-4">
                    <i className={`${info.icon} text-[var(--matrix-green)] text-xl`}></i>
                  </div>
                  <div>
                    <p className="font-semibold">{info.title}</p>
                    {info.link ? (
                      <a href={info.link} 
                         target={info.link.startsWith('http') ? '_blank' : '_self'}
                         rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                         className="text-gray-400 hover:text-[var(--matrix-green)] transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-dark rounded-xl p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--matrix-green)]">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-[var(--glass-white)] border border-gray-600 focus:border-[var(--matrix-green)]"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-[var(--glass-white)] border border-gray-600 focus:border-[var(--matrix-green)]"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-[var(--glass-white)] border border-gray-600 focus:border-[var(--matrix-green)]"
                  placeholder="Project Discussion"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-[var(--glass-white)] border border-gray-600 focus:border-[var(--matrix-green)]"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  type="submit" 
                  className="w-full bg-[var(--matrix-green)] text-[var(--tech-navy)] font-semibold py-3 hover:bg-[var(--matrix-green)]/90"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
