import { useState, useContext } from 'react';
import { LanguageContext } from '../App';
import { Dialog } from '@/components/ui/dialog';
import { DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import dbo_home from '../assets/projetos/dbo/home_1.png'
import dbo_home2 from '../assets/projetos/dbo/home_2.png'
import dbo_registrar from '../assets/projetos/dbo/registrar_1.png'
import recuperarsenha from '../assets/projetos/dbo/recuperar_senha.png'
import login from '../assets/projetos/dbo/login.png'
import skillcalculator from '../assets/projetos/dbo/calcular_skill.png'
import baixar from '../assets/projetos/dbo/baixar.png'
import ranking from '../assets/projetos/dbo/ranking.png'
import painel_conta from '../assets/projetos/dbo/painel_conta.png'
import painel_donate from '../assets/projetos/dbo/painel_donate.png'
import painel_donate_pix from '../assets/projetos/dbo/painel_donate_pix.png'
import painel_donate_cartao from '../assets/projetos/dbo/painel_donate_cartao.png'
import painel_config from '../assets/projetos/dbo/painel_config.png'
import painel_estilos from '../assets/projetos/dbo/painel_estilos.png'
import painel_sorteio from '../assets/projetos/dbo/painel_sorteio.png'

import wix_home from '../assets/projetos/sollie/home.png'
import wix_home2 from '../assets/projetos/sollie/home_2.png'
import wix_home3 from '../assets/projetos/sollie/home_3.png'
import wix_home4 from '../assets/projetos/sollie/home_4.png'
import wix_home5 from '../assets/projetos/sollie/home_5.png'
import produtos from '../assets/projetos/sollie/produtos.png'
import produto_janela from '../assets/projetos/sollie/produtos_janela.png'
import onde_comprar from '../assets/projetos/sollie/onde_comprar.png'
import onde_comprar_janela from '../assets/projetos/sollie/onde_comprarjanela.png'
import onde_estamos from '../assets/projetos/sollie/onde_estamos.png'
import onde_estamos_1 from '../assets/projetos/sollie/onde_estamos_1.png'
import eventos from '../assets/projetos/sollie/eventos.png'
import eventos_2 from '../assets/projetos/sollie/eventos_2.png'
import eventos_3 from '../assets/projetos/sollie/eventos_3.png'
import eventos_4 from '../assets/projetos/sollie/eventos_4.png'
import historia from '../assets/projetos/sollie/historia.png'
import seja_distribuidor from '../assets/projetos/sollie/seja_distribuidor.png'
import seja_distribuidor2 from '../assets/projetos/sollie/seja_distribuidor_2.png'
import seja_distribuidor3 from '../assets/projetos/sollie/seja_distribuidor_3.png'
import escola_de_beleza from '../assets/projetos/sollie/escola_de_beleza.png'
import escola_de_beleza2 from '../assets/projetos/sollie/escola_de_beleza_2.png'
import escola_de_beleza3 from '../assets/projetos/sollie/escola_de_beleza_3.png'

import stake_home from '../assets/projetos/stakehouse/stake_home.png'
import stake_eventos from '../assets/projetos/stakehouse/stake_eventos.png'
import stake_cardapio from '../assets/projetos/stakehouse/stake_cardapio.png'
import stake_contato from '../assets/projetos/stakehouse/stake_contato.png'
interface typeProjects{
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  imageUrl: {capa: string};
  images: {
    [key: string]: string | undefined;
  };
  link: string;
}
const Projects = () => {
  const { t } = useContext(LanguageContext);
  const [selectedProject, setSelectedProject] = useState<typeProjects | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: t.projects.dbo.title,
      description: t.projects.dbo.description,
      longDescription: t.projects.dbo.longDescription,
      tech: t.projects.dbo.tech,
      features: t.projects.dbo.features,
      imageUrl:  {capa: dbo_home},
      images: {
        "foto-1": dbo_home,
        "foto-2": dbo_home2,
        "foto-3": dbo_registrar,
        "foto-4": recuperarsenha,
        "foto-5": login,
        "foto-6": skillcalculator,
        "foto-7": baixar,
        "foto-8": ranking,
        "foto-9": painel_conta,
        "foto-10": painel_donate,
        "foto-11": painel_donate_pix,
        "foto-12": painel_donate_cartao,
        "foto-13": painel_config,
        "foto-14": painel_estilos,
        "foto-15": painel_sorteio,
      },
      link: "https://knightzonline.com/"
    },
    {
      title: t.projects.sollie.title,
      description: t.projects.sollie.description,
      longDescription: t.projects.sollie.longDescription,
      tech: t.projects.sollie.tech,
      features: t.projects.sollie.features,
      imageUrl: {capa: wix_home},
      images: {
        'foto-1': wix_home,
        'foto-2': wix_home2,
        'foto-3': wix_home3,
        'foto-4': wix_home4,
        'foto-5': wix_home5,
        'foto-6': eventos,
        'foto-7': eventos_2,
        'foto-8': eventos_3,
        'foto-9': eventos_4,
        'foto-10': produtos,
        'foto-11': produto_janela,
        'foto-12': onde_comprar,
        'foto-13': onde_comprar_janela,
        'foto-14': onde_estamos,
        'foto-15': onde_estamos_1,
        'foto-16': historia,
        'foto-17': seja_distribuidor,
        'foto-18': seja_distribuidor2,
        'foto-19': seja_distribuidor3,
        'foto-20': escola_de_beleza,
        'foto-21': escola_de_beleza2,
        'foto-22': escola_de_beleza3,
      },
      link: "https://www.sollieprofessional.com.br/"
    },
    {
      title: t.projects.stakehouse.title,
      description: t.projects.stakehouse.description,
      longDescription: t.projects.stakehouse.longDescription,
      tech: t.projects.stakehouse.tech,
      features: t.projects.stakehouse.features,
      imageUrl: {capa: stake_home},
      images: {
        'foto-1': stake_home,
        'foto-2': stake_eventos,
        'foto-3': stake_cardapio,
        'foto-4': stake_contato,
      },
      link: "https://stake-house.vercel.app/"
    }
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      selectedProject && prev === Object.keys(selectedProject.images).length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      selectedProject && prev === 0 ? Object.keys(selectedProject.images).length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {t.projects.card.projetos}
          <div className="h-1 w-20 bg-blue-500 mt-2"></div>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img 
                src={project.imageUrl.capa} 
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.link}
                    target='_blank'
                    className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    {t.projects.card.verprojeto}
                  </a>
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                    className="inline-block px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    {t.projects.card.galeria}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl">
            {selectedProject && (
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                <div className="relative">
                  {Object.keys(selectedProject.images).map((key, index) => (
                  <img
                    key={index}
                    src={selectedProject.images[key]}
                    alt={`${selectedProject.title} - Imagem ${index + 1}`}
                    className={`w-full rounded-lg ${index === currentImageIndex ? 'block' : 'hidden'}`}
                  />
                  ))}
                  <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white"
                  >
                  <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white"
                  >
                  <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700 whitespace-pre-line">
                    {selectedProject.longDescription}
                  </p>
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">{t.projects.card.h2}:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </section>
    </main>
  );
};

export default Projects;
