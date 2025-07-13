import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'advertising',
      title: 'Реклама',
      description: 'Контекстная реклама, SMM, таргетинг для увеличения продаж',
      icon: 'Megaphone',
      price: 'от 15 000 ₽',
      features: ['Настройка рекламных кампаний', 'Аналитика и отчёты', 'Оптимизация бюджета', 'A/B тестирование']
    },
    {
      id: 'website',
      title: 'Сайт',
      description: 'Создание современных сайтов и интернет-магазинов',
      icon: 'Globe',
      price: 'от 25 000 ₽',
      features: ['Адаптивный дизайн', 'SEO оптимизация', 'Система управления', 'Техподдержка']
    },
    {
      id: 'script',
      title: 'Скрипт',
      description: 'Автоматизация процессов, боты, парсеры данных',
      icon: 'Code',
      price: 'от 10 000 ₽',
      features: ['Парсинг данных', 'Автоматизация задач', 'Telegram боты', 'API интеграции']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-blue-400" size={28} />
              <span className="text-xl font-bold">DigiServices</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-blue-400 transition-colors">Услуги</a>
              <a href="#support" className="hover:text-blue-400 transition-colors">Поддержка</a>
              <a href="#cabinet" className="hover:text-blue-400 transition-colors">Личный кабинет</a>
            </nav>
            <div className="flex space-x-2">
              <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                    Вход
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-800 border-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-white">Вход в аккаунт</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input id="email" type="email" className="bg-gray-700 border-gray-600 text-white" />
                    </div>
                    <div>
                      <Label htmlFor="password" className="text-gray-300">Пароль</Label>
                      <Input id="password" type="password" className="bg-gray-700 border-gray-600 text-white" />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Войти
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Регистрация
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-800 border-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-white">Создать аккаунт</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Имя</Label>
                      <Input id="name" className="bg-gray-700 border-gray-600 text-white" />
                    </div>
                    <div>
                      <Label htmlFor="reg-email" className="text-gray-300">Email</Label>
                      <Input id="reg-email" type="email" className="bg-gray-700 border-gray-600 text-white" />
                    </div>
                    <div>
                      <Label htmlFor="reg-password" className="text-gray-300">Пароль</Label>
                      <Input id="reg-password" type="password" className="bg-gray-700 border-gray-600 text-white" />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Зарегистрироваться
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Цифровые услуги для вашего бизнеса
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Создаём сайты, настраиваем рекламу и разрабатываем скрипты для автоматизации. 
            Полный цикл digital-решений под ключ.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
            Выбрать услугу
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="bg-gray-700 border-gray-600 hover:bg-gray-650 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <Icon name={service.icon as any} className="text-white" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        {service.price}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Icon name="Check" className="text-green-400 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => setSelectedService(service.id)}
                  >
                    Заказать {service.title.toLowerCase()}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      {selectedService && (
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  Заказать {services.find(s => s.id === selectedService)?.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Заполните форму, и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="client-name" className="text-gray-300">Ваше имя</Label>
                  <Input id="client-name" className="bg-gray-700 border-gray-600 text-white" />
                </div>
                <div>
                  <Label htmlFor="client-email" className="text-gray-300">Email</Label>
                  <Input id="client-email" type="email" className="bg-gray-700 border-gray-600 text-white" />
                </div>
                <div>
                  <Label htmlFor="client-phone" className="text-gray-300">Телефон</Label>
                  <Input id="client-phone" className="bg-gray-700 border-gray-600 text-white" />
                </div>
                <div>
                  <Label htmlFor="project-description" className="text-gray-300">Описание проекта</Label>
                  <Textarea 
                    id="project-description" 
                    rows={4}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="Расскажите подробнее о ваших задачах..."
                  />
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-white font-semibold mb-4">Выберите пакет:</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <Card className="bg-gray-700 border-gray-600 cursor-pointer hover:border-blue-500 transition-colors">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-bold text-white">Базовый</div>
                        <div className="text-2xl font-bold text-blue-400 mt-2">15K</div>
                        <div className="text-gray-400 text-sm">7 дней</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-700 border-blue-500 border-2 cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-bold text-white">Стандарт</div>
                        <div className="text-2xl font-bold text-blue-400 mt-2">25K</div>
                        <div className="text-gray-400 text-sm">5 дней</div>
                        <Badge className="mt-2 bg-blue-600">Популярный</Badge>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-700 border-gray-600 cursor-pointer hover:border-blue-500 transition-colors">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-bold text-white">Премиум</div>
                        <div className="text-2xl font-bold text-blue-400 mt-2">45K</div>
                        <div className="text-gray-400 text-sm">3 дня</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="flex space-x-4 pt-4">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-gray-600 text-white hover:bg-gray-700"
                    onClick={() => setSelectedService(null)}
                  >
                    Отмена
                  </Button>
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Оплатить и заказать
                    <Icon name="CreditCard" className="ml-2" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Icon name="Zap" className="text-blue-400" size={24} />
            <span className="text-xl font-bold">DigiServices</span>
          </div>
          <p className="text-gray-400 mb-4">
            Создаём цифровые решения для вашего успеха
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#support" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Icon name="MessageCircle" size={20} />
            </a>
            <a href="#cabinet" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Icon name="User" size={20} />
            </a>
            <a href="mailto:info@digiservices.ru" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Icon name="Mail" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;