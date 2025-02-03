import { 
  Mail, Phone, MapPin, Github, Linkedin, Facebook, 
  Instagram, Send, MessageSquare, Coffee, Heart
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { t } = useContext(LanguageContext);
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/MATHEUSNUNES2023BR',
      icon: <Github className="w-5 h-5" />,
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/matheusnunesdebarros/l',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Facebook',
      url: 'https://web.facebook.com/profile.php?id=100084137478441',
      icon: <Facebook className="w-5 h-5" />,
      color: 'hover:text-blue-500'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/matheusnunes7119/',
      icon: <Instagram className="w-5 h-5" />,
      color: 'hover:text-pink-600'
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'WhatsApp',
      value: '+55 (62) 981963308',
      link: 'https://wa.me/5562981963308?text=Oi%2C%20tudo%20bem%3F%20Gostaria%20de%20conversar%20com%20vo',
      badge: 'Online'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'servicematheusnunesdebarros@gmail.com',
      link: 'mailto:servicematheusnunesdebarros@gmail.com',
      badge: '24/7'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: t.contact.contactInfo.location.label,
      value: 'Goiás, GO - Brasil',
      badge: t.contact.contactInfo.location.status
    }
  ];
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  function sendEmail(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault()
    if(name === '' || lastName === '' || email === '' || subject === '' || message === ''){
      alert('Preencha os campos obrigatórios')
      return
    }
    const templateParams = {
      nome: name,
      sobrenome: lastName,
      mensagem: message,
      assunto: subject,
      email: email
    }
    emailjs.send("service_io6br23", "template_br0jsq9", templateParams, "ohz5hfmmH1w1EGfFC")
    .then((res)=>{
      if(res.status === 200){
        alert('E-mail enviado com sucesso!')
        setName('')
        setLastName('')
        setEmail('')
        setSubject('')
        setMessage('')
      }
    }, ()=>{
      alert('Falha ao enviar E-mail, tente novamente')
    })
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center space-y-6 mb-12 sm:mb-16">
          <div className="inline-block animate-bounce">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100">
              <MessageSquare className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t.contact.subtitle}
              <Coffee className="inline-block ml-2 w-5 h-5 animate-pulse text-amber-600" />
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info Card */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="space-y-3">
                <CardTitle className="flex items-center space-x-2 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  <Send className="w-6 h-6 text-blue-600" />
                  <span>{t.contact.contactSection.title}</span>
                </CardTitle>
                <CardDescription className="text-base">
                  {t.contact.contactSection.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                      <div className="flex items-center space-x-4 flex-1 min-w-0">
                        <div className="p-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="space-y-1 min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-500">{info.label}</p>
                          {info.link ? (
                            <a 
                              href={info.link}
                              target="_blank"
                              className="text-base sm:text-lg font-semibold hover:text-blue-600 transition-colors truncate block"
                              title={info.value}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-base sm:text-lg font-semibold truncate" title={info.value}>
                              {info.value}
                            </p>
                          )}
                        </div>
                        <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 animate-pulse flex-shrink-0">
                          {info.badge}
                        </Badge>
                      </div>
                    </div>
                    {index < contactInfo.length - 1 && <Separator className="my-2" />}
                  </div>
                ))}
              </CardContent>

              <CardFooter className="flex-col space-y-4">
                <p className="text-sm font-medium text-gray-600">Social Networks</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Enhanced Form Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                {t.contact.form.title}
              </CardTitle>
              <CardDescription className="text-base">
                {t.contact.form.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium" htmlFor="firstName">
                    {t.contact.form.firstName.label}
                  </Label>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    id="firstName"
                    placeholder={t.contact.form.firstName.placeholder}
                    className="h-11 transition-all duration-300 focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium" htmlFor="lastName">
                    {t.contact.form.lastName.label}
                  </Label>
                  <Input
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    id="lastName"
                    placeholder={t.contact.form.lastName.placeholder}
                    className="h-11 transition-all duration-300 focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium" htmlFor="email">
                  {t.contact.form.email.label}
                </Label>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  type="email"
                  placeholder={t.contact.form.email.placeholder}
                  className="h-11 transition-all duration-300 focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium" htmlFor="subject">
                  {t.contact.form.subject.label}
                </Label>
                <Input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  id="subject"
                  placeholder={t.contact.form.subject.placeholder}
                  className="h-11 transition-all duration-300 focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium" htmlFor="message">
                  {t.contact.form.message.label}
                </Label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  placeholder={t.contact.form.message.placeholder}
                  className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-blue-500 hover:border-blue-400 resize-y"
                />
              </div>
            </CardContent>
            
            <CardFooter>
              <Button
                type="submit"
                onClick={sendEmail}
                className="w-48 sm:w-[47%] mx-auto h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] group"
              >
                <span className="text-base">{t.contact.form.submitButton}</span>
                <Heart className="ml-2 w-5 h-5 group-hover:text-red-300 transition-colors" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
