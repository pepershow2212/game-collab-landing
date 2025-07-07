import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Games = () => {
  const games = [
    {
      title: "Arma Reforger",
      badgeText: "ARMA REFORGER",
      badgeClass: "bg-primary/90 text-primary-foreground",
      image: "/img/d1b390ac-dab5-44a5-b495-60c7d3102ad5.jpg",
      description:
        "Реалистичный военный симулятор с открытым миром и бесконечными возможностями",
      tags: ["Симулятор", "Открытый мир", "Моддинг"],
    },
    {
      title: "Squad",
      badgeText: "SQUAD",
      badgeClass: "bg-accent/90 text-accent-foreground",
      image: "/img/38cccc6c-80ca-4b39-8e39-f4ba17aac9f8.jpg",
      description: "Тактический FPS с акцентом на командную работу и связь",
      tags: ["FPS", "Командная игра", "Тактика"],
    },
  ];

  return (
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
          {games.map((game, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="relative">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={game.badgeClass}>{game.badgeText}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold font-rajdhani mb-2">
                  {game.title}
                </h3>
                <p className="text-muted-foreground mb-4">{game.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {game.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
