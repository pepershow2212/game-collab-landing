import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import ServerMonitor from "@/components/ServerMonitor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Target" className="text-primary" size={24} />
              <h1 className="text-xl font-bold font-rajdhani">ARMA × SQUAD</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">
                Главная
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                О нас
              </a>
              <a href="#games" className="hover:text-primary transition-colors">
                Наши игры
              </a>
              <a
                href="#servers"
                className="hover:text-primary transition-colors"
              >
                Серверы
              </a>
              <a
                href="#support"
                className="hover:text-primary transition-colors"
              >
                Поддержать нас
              </a>
              <a href="#news" className="hover:text-primary transition-colors">
                Новости
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Связь
              </a>
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Присоединиться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-12 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  Коллаборация
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold font-rajdhani leading-tight">
                  ARMA REFORGER
                  <br />
                  <span className="text-primary">×</span>
                  <br />
                  SQUAD
                </h1>
                <p className="text-xl text-muted-foreground">
                  Объединение двух легендарных тактических симуляторов
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Play" className="mr-2" size={20} />
                  Начать игру
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Users" className="mr-2" size={20} />
                  Наша команда
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img
                src="/img/1e1b116e-3b6f-45cd-b269-68d88e3a66e4.jpg"
                alt="Gaming Collaboration"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-rajdhani mb-4">
              О нас
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы создаем уникальную игровую экосистему, объединяющую лучшие
              тактические симуляторы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:bg-card/80 transition-colors">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Target"
                  className="text-primary mx-auto mb-4"
                  size={32}
                />
                <h3 className="text-xl font-semibold font-rajdhani mb-2">
                  Тактика
                </h3>
                <p className="text-muted-foreground">
                  Глубокая стратегическая игра с акцентом на командную работу
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:bg-card/80 transition-colors">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Users"
                  className="text-primary mx-auto mb-4"
                  size={32}
                />
                <h3 className="text-xl font-semibold font-rajdhani mb-2">
                  Сообщество
                </h3>
                <p className="text-muted-foreground">
                  Активное сообщество игроков и разработчиков
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:bg-card/80 transition-colors">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Trophy"
                  className="text-primary mx-auto mb-4"
                  size={32}
                />
                <h3 className="text-xl font-semibold font-rajdhani mb-2">
                  Турниры
                </h3>
                <p className="text-muted-foreground">
                  Регулярные турниры и соревнования для всех уровней
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-rajdhani mb-4">
              Наши игры
            </h2>
            <p className="text-lg text-muted-foreground">
              Два флагманских проекта, каждый со своими особенностями
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-card border-border overflow-hidden hover:scale-105 transition-transform">
              <div className="relative">
                <img
                  src="/img/d1b390ac-dab5-44a5-b495-60c7d3102ad5.jpg"
                  alt="Arma Reforger"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    ARMA REFORGER
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold font-rajdhani mb-2">
                  Arma Reforger
                </h3>
                <p className="text-muted-foreground mb-4">
                  Реалистичный военный симулятор с открытым миром и бесконечными
                  возможностями
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">Симулятор</Badge>
                  <Badge variant="outline">Открытый мир</Badge>
                  <Badge variant="outline">Моддинг</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border overflow-hidden hover:scale-105 transition-transform">
              <div className="relative">
                <img
                  src="/img/38cccc6c-80ca-4b39-8e39-f4ba17aac9f8.jpg"
                  alt="Squad"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent/90 text-accent-foreground">
                    SQUAD
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold font-rajdhani mb-2">
                  Squad
                </h3>
                <p className="text-muted-foreground mb-4">
                  Тактический FPS с акцентом на командную работу и связь
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">FPS</Badge>
                  <Badge variant="outline">Командная игра</Badge>
                  <Badge variant="outline">Тактика</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Server Monitor Section */}
      <section id="servers">
        <ServerMonitor />
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-rajdhani mb-4 glow-text">
              Поддержать нас
            </h2>
            <p className="text-lg text-muted-foreground">
              Помогите развитию проекта и поддержите серверы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-border hover:bg-card/80 transition-colors">
              <CardContent className="p-6 text-center">
                <Icon
                  name="CreditCard"
                  className="text-primary mx-auto mb-4"
                  size={32}
                />
                <h3 className="text-xl font-semibold font-rajdhani mb-2">
                  Донат
                </h3>
                <p className="text-muted-foreground mb-4">
                  Поддержите проект любой суммой
                </p>
                <div className="space-y-2">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Heart" className="mr-2" size={16} />
                    Поддержать
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      100₽
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      500₽
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      1000₽
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:bg-card/80 transition-colors">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Star"
                  className="text-primary mx-auto mb-4"
                  size={32}
                />
                <h3 className="text-xl font-semibold font-rajdhani mb-2">
                  VIP статус
                </h3>
                <p className="text-muted-foreground mb-4">
                  Получите привилегии на серверах
                </p>
                <div className="space-y-2">
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    <Icon name="Crown" className="mr-2" size={16} />
                    Стать VIP
                  </Button>
                  <div className="text-xs text-muted-foreground">
                    • Приоритет в очереди • Специальные роли • Эксклюзивный
                    контент
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:bg-card/80 transition-colors">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Share2"
                  className="text-primary mx-auto mb-4"
                  size={32}
                />
                <h3 className="text-xl font-semibold font-rajdhani mb-2">
                  Поделиться
                </h3>
                <p className="text-muted-foreground mb-4">
                  Расскажите друзьям о проекте
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    <Icon name="MessageCircle" className="mr-2" size={16} />
                    Пригласить друзей
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Twitter" size={14} />
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Share" size={14} />
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Copy" size={14} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="bg-card border-border inline-block">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Icon name="Target" className="text-primary" size={24} />
                  <div>
                    <h3 className="font-semibold font-rajdhani">Цель месяца</h3>
                    <p className="text-sm text-muted-foreground">
                      Поддержка серверов
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Собрано</span>
                    <span className="font-mono">15,750₽ / 25,000₽</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full transition-all duration-300"
                      style={{ width: "63%" }}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    63% от цели достигнуто
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Средства идут на поддержку серверов, разработку новых функций и
              организацию турниров
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="outline" className="flex items-center gap-2">
                <Icon name="Server" size={14} />
                Серверы
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2">
                <Icon name="Code" size={14} />
                Разработка
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2">
                <Icon name="Trophy" size={14} />
                Турниры
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-rajdhani mb-4">
              Новости
            </h2>
            <p className="text-lg text-muted-foreground">
              Последние обновления и события
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:bg-card/80 transition-colors">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
                  Обновление
                </Badge>
                <h3 className="text-lg font-semibold font-rajdhani mb-2">
                  Новый режим кооперации
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Добавлен уникальный режим, объединяющий механики обеих игр
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Icon name="Calendar" className="mr-1" size={14} />5 дней
                  назад
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:bg-card/80 transition-colors">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-accent/20 text-accent border-accent/30">
                  Турнир
                </Badge>
                <h3 className="text-lg font-semibold font-rajdhani mb-2">
                  Зимний чемпионат
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Регистрация на крупнейший турнир года уже открыта
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Icon name="Calendar" className="mr-1" size={14} />1 неделя
                  назад
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:bg-card/80 transition-colors">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-secondary/20 text-secondary-foreground border-secondary/30">
                  Сообщество
                </Badge>
                <h3 className="text-lg font-semibold font-rajdhani mb-2">
                  Новые серверы
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Запущены дополнительные серверы для европейского региона
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Icon name="Calendar" className="mr-1" size={14} />2 недели
                  назад
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-rajdhani mb-4">
              Связь
            </h2>
            <p className="text-lg text-muted-foreground">
              Присоединяйтесь к нашему сообществу
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border hover:bg-card/80 transition-colors text-center">
              <CardContent className="p-6">
                <Icon
                  name="MessageCircle"
                  className="text-primary mx-auto mb-4"
                  size={32}
                />
                <h3 className="font-semibold font-rajdhani mb-2">Discord</h3>
                <p className="text-muted-foreground text-sm">
                  Основной чат сообщества
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:bg-card/80 transition-colors text-center">
              <CardContent className="p-6">
                <Icon
                  name="Send"
                  className="text-primary mx-auto mb-4"
                  size={32}
                />
                <h3 className="font-semibold font-rajdhani mb-2">Telegram</h3>
                <p className="text-muted-foreground text-sm">
                  Новости и обновления
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:bg-card/80 transition-colors text-center">
              <CardContent className="p-6">
                <Icon
                  name="Youtube"
                  className="text-primary mx-auto mb-4"
                  size={32}
                />
                <h3 className="font-semibold font-rajdhani mb-2">YouTube</h3>
                <p className="text-muted-foreground text-sm">Видео и стримы</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:bg-card/80 transition-colors text-center">
              <CardContent className="p-6">
                <Icon
                  name="Mail"
                  className="text-primary mx-auto mb-4"
                  size={32}
                />
                <h3 className="font-semibold font-rajdhani mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">Прямая связь</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Target" className="text-primary" size={24} />
              <span className="font-bold font-rajdhani">ARMA × SQUAD</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © 2024 Arma Reforger × Squad Collaboration
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Создано для геймерского сообщества
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
