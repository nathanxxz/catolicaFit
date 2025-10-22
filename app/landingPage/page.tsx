"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Menu, X, Dumbbell, Users, Clock, TrendingUp, Award, Calendar } from 'lucide-react';

export default function LandingPage() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        {
            icon: <Dumbbell className="w-10 h-10" />,
            title: "Treinos Personalizados",
            description: "Programas de treino desenvolvidos por profissionais qualificados, adaptados ao seu nível e objetivos."
        },
        {
            icon: <Users className="w-10 h-10" />,
            title: "Aulas em Grupo",
            description: "Participe de aulas coletivas de yoga, spinning, funcional e muito mais com instrutores especializados."
        },
        {
            icon: <Clock className="w-10 h-10" />,
            title: "Horários Flexíveis",
            description: "Academia aberta de segunda a sábado, com horários que se adaptam à sua rotina acadêmica."
        },
        {
            icon: <TrendingUp className="w-10 h-10" />,
            title: "Acompanhamento",
            description: "Avaliações físicas periódicas e acompanhamento profissional para garantir seus resultados."
        },
        {
            icon: <Award className="w-10 h-10" />,
            title: "Estrutura Completa",
            description: "Equipamentos modernos de musculação, cardio e área para treino funcional."
        },
        {
            icon: <Calendar className="w-10 h-10" />,
            title: "App de Agendamento",
            description: "Agende suas aulas e reserve equipamentos através do nosso aplicativo exclusivo."
        }
    ];

    const benefits = [
        "Mensalidades especiais para estudantes",
        "Sem taxa de matrícula no primeiro mês",
        "Acesso ilimitado a todas as áreas",
        "Vestiários com armários individuais"
    ];

    return (
        <div className="min-h-screen text-white" style={{ background: '#0A0A0A' }}>
            <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        .gradient-bg {
          background: linear-gradient(-45deg, #FF6B35, #F7931E, #FF6B35, #F7931E);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        .text-gradient {
          background: linear-gradient(135deg, #FF6B35, #F7931E);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glow-circle-1 {
          position: absolute;
          top: -200px;
          right: -200px;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.15), transparent);
          border-radius: 50%;
          animation: pulse-glow 4s ease-in-out infinite;
          pointer-events: none;
        }

        .glow-circle-2 {
          position: absolute;
          bottom: -200px;
          left: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(247, 147, 30, 0.15), transparent);
          border-radius: 50%;
          animation: pulse-glow 6s ease-in-out infinite;
          pointer-events: none;
        }

        .float-card {
          animation: float 6s ease-in-out infinite;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
        }

        .hover-rotate:hover {
          transform: rotate(0deg);
        }
      `}</style>

            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg' : ''}`} style={isScrolled ? { background: 'rgba(10, 10, 10, 0.95)', borderBottom: '1px solid rgba(255, 107, 53, 0.1)' } : {}}>
                <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-3xl font-bold text-gradient">Católica Fit</div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-gray-400 hover:text-orange-400 transition-colors">Recursos</a>
                        <a href="#how" className="text-gray-400 hover:text-orange-400 transition-colors">Planos</a>
                        <a href="#benefits" className="text-gray-400 hover:text-orange-400 transition-colors">Benefícios</a>
                        <button className="gradient-bg px-6 py-3 rounded-full font-semibold hover-scale transition-transform" style={{ boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)' }}>
                            Matricule-se
                        </button>
                    </div>

                    <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>

                {mobileMenuOpen && (
                    <div className="md:hidden" style={{ background: '#1A1A1A', borderTop: '1px solid rgba(255, 107, 53, 0.1)' }}>
                        <div className="flex flex-col gap-4 p-6">
                            <a href="#features" className="text-gray-400 hover:text-orange-400 transition-colors">Recursos</a>
                            <a href="#how" className="text-gray-400 hover:text-orange-400 transition-colors">Planos</a>
                            <a href="#benefits" className="text-gray-400 hover:text-orange-400 transition-colors">Benefícios</a>
                            <button className="gradient-bg px-6 py-3 rounded-full font-semibold">
                                Matricule-se
                            </button>
                        </div>
                    </div>
                )}
            </header>

            <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
                <div className="glow-circle-1"></div>
                <div className="glow-circle-2"></div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8">
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Sua Saúde é Nossa <span className="text-gradient">Prioridade</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Academia exclusiva para a comunidade acadêmica da Católica. 
                            Equipamentos modernos, aulas especializadas e profissionais qualificados.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="gradient-bg px-8 py-4 rounded-full font-semibold text-lg hover-scale transition-transform flex items-center justify-center gap-2" style={{ boxShadow: '0 20px 40px rgba(255, 107, 53, 0.4)' }}>
                                Começar Treino <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-8 py-4 rounded-full font-semibold text-lg transition-all" style={{ border: '2px solid #FF6B35', color: '#FF6B35' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#FF6B35'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#FF6B35'; }}>
                                Agendar Visita
                            </button>
                        </div>
                    </div>

                    <div className="relative float-card">
                        <div className="p-8 rounded-3xl transition-transform duration-300 hover-rotate" style={{ background: '#1A1A1A', border: '1px solid rgba(255, 107, 53, 0.2)', boxShadow: '0 20px 60px rgba(255, 107, 53, 0.2)', transform: 'rotate(3deg)' }}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                                    <Dumbbell className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gradient">Treino do Dia</h3>
                                    <p className="text-sm text-gray-400">Força e Hipertrofia</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {[
                                    { name: "Supino Reto", sets: "4x12", color: "#FF6B35" },
                                    { name: "Crucifixo Inclinado", sets: "3x15", color: "#F7931E" },
                                    { name: "Tríceps Testa", sets: "3x12", color: "#FFA500" }
                                ].map((exercise, idx) => (
                                    <div key={idx} className="p-4 rounded-xl transition-all cursor-pointer hover-scale" style={{ background: 'rgba(10, 10, 10, 0.5)', border: '1px solid rgba(107, 114, 128, 0.5)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(107, 114, 128, 0.5)'; }}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-semibold">{exercise.name}</span>
                                            <span className="text-gray-400">{exercise.sets}</span>
                                        </div>
                                        <div className="w-full rounded-full h-2 overflow-hidden" style={{ background: '#374151' }}>
                                            <div
                                                className="h-full rounded-full transition-all duration-1000"
                                                style={{ width: '100%', backgroundColor: exercise.color }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4">
                            Recursos <span className="text-gradient">Completos</span>
                        </h2>
                        <p className="text-xl text-gray-400">Tudo que você precisa para alcançar seus objetivos</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="p-8 rounded-2xl transition-all hover-lift relative overflow-hidden group"
                                style={{ background: '#1A1A1A', border: '1px solid rgba(255, 107, 53, 0.1)' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.3)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 107, 53, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div className="absolute top-0 left-0 w-full h-1 gradient-bg" style={{ transform: 'scaleX(0)', transition: 'transform 0.3s' }}></div>
                                <div style={{ color: '#FF6B35' }} className="mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="how" className="py-24 px-6" style={{ background: '#0A0A0A' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4">
                            Nossos <span className="text-gradient">Planos</span>
                        </h2>
                        <p className="text-xl text-gray-400">Escolha o plano ideal para você</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { step: "01", title: "Plano Mensal", desc: "Acesso completo à academia e todas as aulas coletivas por 30 dias" },
                            { step: "02", title: "Plano Trimestral", desc: "3 meses de treino com desconto especial e acompanhamento nutricional incluso" },
                            { step: "03", title: "Plano Semestral", desc: "6 meses com melhor custo-benefício, avaliações físicas e personal trainer" }
                        ].map((item, idx) => (
                            <div key={idx} className="relative">
                                <div className="text-gradient font-bold absolute -top-8 -left-4" style={{ fontSize: '6rem', opacity: 0.2 }}>{item.step}</div>
                                <div className="relative p-8 rounded-2xl transition-all" style={{ background: '#1A1A1A', border: '1px solid rgba(255, 107, 53, 0.1)' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.1)'}>
                                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="benefits" className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)' }}>
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-5xl font-bold mb-6">
                            Por que escolher a <span className="text-gradient">Católica Fit</span>?
                        </h2>
                        <p className="text-xl text-gray-400 mb-8">
                            Academia pensada especialmente para estudantes e colaboradores da Faculdade Católica da Paraíba,
                            com valores acessíveis e horários flexíveis.
                        </p>
                        <div className="space-y-4">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl" style={{ background: '#1A1A1A', border: '1px solid rgba(255, 107, 53, 0.2)' }}>
                        <div className="space-y-6">
                            {[
                                { num: "500+", title: "Alunos Ativos", desc: "Comunidade engajada e motivada" },
                                { num: "15", title: "Aulas Semanais", desc: "Variedade de modalidades" },
                                { num: "100%", title: "Satisfação", desc: "Avaliação dos nossos alunos" }
                            ].map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0">
                                        {stat.num}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{stat.title}</h4>
                                        <p className="text-gray-400">{stat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="gradient-bg p-12 rounded-3xl">
                        <h2 className="text-5xl font-bold mb-6">Pronto para transformar sua vida?</h2>
                        <p className="text-xl mb-8" style={{ opacity: 0.9 }}>
                            Faça sua matrícula agora e ganhe 7 dias grátis
                        </p>
                        <button className="px-10 py-4 rounded-full font-bold text-lg hover-scale transition-transform" style={{ background: 'white', color: '#FF6B35', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}>
                            Matricular Agora
                        </button>
                    </div>
                </div>
            </section>

            <footer className="py-12 px-6" style={{ borderTop: '1px solid rgba(255, 107, 53, 0.1)' }}>
                <div className="max-w-7xl mx-auto text-center">
                    <div className="text-3xl font-bold text-gradient mb-4">Católica Fit</div>
                    <p className="text-gray-400 mb-6">
                        Academia da Faculdade Católica da Paraíba<br />
                        Cajazeiras/PB - Campus Central
                    </p>
                    <div className="flex justify-center gap-8 text-sm text-gray-500">
                        <a href="#" className="hover:text-orange-400 transition-colors">Horários</a>
                        <a href="#" className="hover:text-orange-400 transition-colors">Regulamento</a>
                        <a href="#" className="hover:text-orange-400 transition-colors">Contato</a>
                    </div>
                    <p className="text-gray-600 text-sm mt-6">© 2025 Católica Fit. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}