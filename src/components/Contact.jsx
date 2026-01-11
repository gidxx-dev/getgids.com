import React, { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Facebook,
  Instagram,
  GithubIcon,
} from "lucide-react";
import { useToast } from "./hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ UPDATED FORMSPREE ENDPOINT
  const FORMSPREE_URL = "https://formspree.io/f/mzdbveje";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Oops!",
          description: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or just to
            say hello!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-slate-50 border-none">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                  <a
                    href="mailto:gideonspiano11@gmail.com"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    gideonspiano11@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-50 border-none">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                  <a
                    href="tel:+639629645062"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    +63 962 964 5062
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-50 border-none">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Location</h3>
                  <p className="text-slate-600">
                    Pasinaya Homes West
                    <br />
                    Naic, Cavite 4110
                    <br />
                    Philippines
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-50 to-slate-50 border-none">
              <h3 className="font-bold text-slate-900 mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/gideons-piano-0ab179154/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full hover:scale-110 transition"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://facebook.com/gidxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full hover:scale-110 transition"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com/gdnspn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full hover:scale-110 transition"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://github.com/gidxx-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full hover:scale-110 transition"
                >
                  <GithubIcon size={20} />
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 border-2 border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <Input
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                name="subject"
                placeholder="What is this about?"
                required
                value={formData.subject}
                onChange={handleChange}
              />

              <Textarea
                name="message"
                placeholder="Your message..."
                required
                value={formData.message}
                onChange={handleChange}
                className="min-h-[150px]"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : <>Send Message <Send size={18} /></>}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
