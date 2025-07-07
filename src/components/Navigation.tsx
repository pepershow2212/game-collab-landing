import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
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
            <a href="#servers" className="hover:text-primary transition-colors">
              Серверы
            </a>
            <a href="#support" className="hover:text-primary transition-colors">
              Поддержать нас
            </a>
            <a href="#news" className="hover:text-primary transition-colors">
              Новости
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Связь
            </a>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Присоединиться
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
