import { Linkedin, LinkedinIcon, Mail, MapPinIcon, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";

export function ContactSection() {

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(()=>{},1500)
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";  
    document.getElementById("message").value = "";  
  }
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a job opportunity, Feel free to reach out!
        </p>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 max-w-full ">
          <div className="space-y-8 border shadow-2xl rounded-lg">
            <h3 className="flex text-2xl font-semibold mb-6 justify-center">
              Contact Information
            </h3>
            <div className="space-y-6 justify-center p-2">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="text-primary h-6 w-6" />{" "}
                </div>
                <div>
                  <h4 className="flex font-medium items-start">Email</h4>
                  <a
                    href="mailto:sowmiyaradha1999@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sowmiyaradha1999@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="text-primary h-6 w-6" />{" "}
                </div>
                <div>
                  <h4 className="flex font-medium items-start">Phone</h4>
                  <a
                    href="tel:+918778341050"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8778341050
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPinIcon className="text-primary h-6 w-6" />{" "}
                </div>
                <div>
                  <h4 className="flex font-medium items-start">Location</h4>
                  <a
                    href=""
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {" "}
                    Thiruvarur, TN, India.
                  </a>
                </div>
              </div>

               <div className="flex items-start space-x-4 mb-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <LinkedinIcon className="text-primary h-6 w-6" />{" "}
                </div>
                <div>
                  <h4 className="flex font-medium items-start">LinkedIn</h4>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/sowmiya-muralidharan-386b8b18b/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {" "}
                   Sowmiya Muralidharan
                  </a>
                </div>
              </div>

            </div>
          </div>
  
          <div className="bg-card p-8 roundable-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
             
                <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input type="text" id="name" name="name" 
                required 
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 ring-primary"
                placeholder="Enter your name"></input>
    
              </div>

               <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input type="email" id="email" name="email" 
                required 
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 ring-primary"
                placeholder="Enter your email"></input>
    
              </div>

              
               <div>
                <label htmlFor="text" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea type="text" id="message" name="message" 
                required 
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 ring-primary resize-none"
                placeholder="Enter your message"></textarea>
    
              </div>

              <div> 
                <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                                                     ""
                )}>
                  Send Message
                    <Send size={16}/>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
