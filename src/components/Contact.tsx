import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactMethods = [
    {
      icon: "MessageCircle",
      title: "Discord",
      description: "Основной чат сообщества",
    },
    {
      icon: "Send",
      title: "Telegram",
      description: "Новости и обновления",
    },
    {
      icon: "Youtube",
      title: "YouTube",
      description: "Видео и стримы",
    },
    {
      icon: "Mail",
      title: "Email",
      description: "Прямая связь",
    },
  ];

  return (
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
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:bg-card/80 transition-colors text-center"
            >
              <CardContent className="p-6">
                <Icon
                  name={method.icon as any}
                  className="text-primary mx-auto mb-4"
                  size={32}
                />
                <h3 className="font-semibold font-rajdhani mb-2">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {method.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
