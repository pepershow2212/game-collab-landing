import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
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
  );
};

export default Hero;
