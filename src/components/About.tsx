import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Target",
      title: "Тактика",
      description:
        "Глубокая стратегическая игра с акцентом на командную работу",
    },
    {
      icon: "Users",
      title: "Сообщество",
      description: "Активное сообщество игроков и разработчиков",
    },
    {
      icon: "Trophy",
      title: "Турниры",
      description: "Регулярные турниры и соревнования для всех уровней",
    },
  ];

  return (
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
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:bg-card/80 transition-colors"
            >
              <CardContent className="p-6 text-center">
                <Icon
                  name={feature.icon as any}
                  className="text-primary mx-auto mb-4"
                  size={32}
                />
                <h3 className="text-xl font-semibold font-rajdhani mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
