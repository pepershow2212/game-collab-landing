import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const News = () => {
  const newsItems = [
    {
      badge: {
        text: "Обновление",
        class: "bg-primary/20 text-primary border-primary/30",
      },
      title: "Новый режим кооперации",
      description: "Добавлен уникальный режим, объединяющий механики обеих игр",
      timeAgo: "5 дней назад",
    },
    {
      badge: {
        text: "Турнир",
        class: "bg-accent/20 text-accent border-accent/30",
      },
      title: "Зимний чемпионат",
      description: "Регистрация на крупнейший турнир года уже открыта",
      timeAgo: "1 неделя назад",
    },
    {
      badge: {
        text: "Сообщество",
        class: "bg-secondary/20 text-secondary-foreground border-secondary/30",
      },
      title: "Новые серверы",
      description: "Запущены дополнительные серверы для европейского региона",
      timeAgo: "2 недели назад",
    },
  ];

  return (
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
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:bg-card/80 transition-colors"
            >
              <CardContent className="p-6">
                <Badge className={item.badge.class + " mb-3"}>
                  {item.badge.text}
                </Badge>
                <h3 className="text-lg font-semibold font-rajdhani mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {item.description}
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Icon name="Calendar" className="mr-1" size={14} />
                  {item.timeAgo}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
