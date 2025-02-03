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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2">
            <MessageSquare className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold">{t.contact.title}</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
            <Coffee className="inline-block ml-2 w-5 h-5" />
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="w-5 h-5 text-blue-600" />
                  <span>{t.contact.contactSection.title}</span>
                </CardTitle>
                <CardDescription>
                {t.contact.contactSection.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-100 transition-colors">
                          {info.icon}
                        </div>
                        <div className='overflow-hidden block w-[59vw] sm:w-full'>
                          <p className="text-sm font-medium text-gray-600">{info.label}</p>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-lg font-semibold hover:text-blue-600 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-lg font-semibold">{info.value}</p>
                          )}
                        </div>
                      </div>
                      <Badge variant="secondary">{info.badge}</Badge>
                    </div>
                    {index < contactInfo.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex-col space-y-4">
                <p className="text-sm font-medium text-gray-600">Redes</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full hover:bg-gray-100 transition-all transform hover:scale-110 ${social.color}`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Formulário */}
          <Card>
            <CardHeader>
              <CardTitle>{t.contact.form.title}</CardTitle>
              <CardDescription>
                {t.contact.form.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t.contact.form.firstName.label}</Label>
                  <Input onChange={(e) => setName(e.target.value)} value={name} id="firstName" placeholder={t.contact.form.firstName.placeholder} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{t.contact.form.lastName.label}</Label>
                  <Input onChange={(e) => setLastName(e.target.value)} value={lastName} id="lastName" placeholder={t.contact.form.lastName.placeholder}/>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t.contact.form.email.label}</Label>
                <Input onChange={(e) => setEmail(e.target.value)} value={email}  id="email" type="email" placeholder={t.contact.form.email.placeholder} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">{t.contact.form.subject.label}</Label>
                <Input onChange={(e) => setSubject(e.target.value)} value={subject} id="subject" placeholder={t.contact.form.subject.placeholder} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t.contact.form.message.label}</Label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  placeholder={t.contact.form.message.placeholder}
                  className="min-h-[120px]"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" onClick={sendEmail} className="w-full group">
                <span>{t.contact.form.submitButton}</span>
                <Heart className="ml-2 w-4 h-4 group-hover:text-red-500 transition-colors" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
