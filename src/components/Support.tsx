import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Support = () => {
  const supportOptions = [
    {
      icon: "CreditCard",
      title: "Донат",
      description: "Поддержите проект любой суммой",
      buttonText: "Поддержать",
      buttonIcon: "Heart",
      buttonClass: "bg-primary hover:bg-primary/90",
      quickAmounts: ["100₽", "500₽", "1000₽"],
    },
    {
      icon: "Star",
      title: "VIP статус",
      description: "Получите привилегии на серверах",
      buttonText: "Стать VIP",
      buttonIcon: "Crown",
      buttonClass: "bg-accent hover:bg-accent/90",
      benefits: [
        "• Приоритет в очереди",
        "• Специальные роли",
        "• Эксклюзивный контент",
      ],
    },
    {
      icon: "Share2",
      title: "Поделиться",
      description: "Расскажите друзьям о проекте",
      buttonText: "Пригласить друзей",
      buttonIcon: "MessageCircle",
      buttonClass: "border-primary text-primary hover:bg-primary/10",
      socialButtons: [
        { icon: "Twitter", label: "Twitter" },
        { icon: "Share", label: "Share" },
        { icon: "Copy", label: "Copy" },
      ],
    },
  ];

  const goalProgress = {
    current: 15750,
    target: 25000,
    percentage: 63,
  };

  return (
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
          {supportOptions.map((option, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:bg-card/80 transition-colors"
            >
              <CardContent className="p-6 text-center">
                <Icon
                  name={option.icon as any}
                  className="text-primary mx-auto mb-4"
                  size={32}
                />
                <h3 className="text-xl font-semibold font-rajdhani mb-2">
                  {option.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {option.description}
                </p>
                <div className="space-y-2">
                  <Button className={`w-full ${option.buttonClass}`}>
                    <Icon
                      name={option.buttonIcon as any}
                      className="mr-2"
                      size={16}
                    />
                    {option.buttonText}
                  </Button>

                  {option.quickAmounts && (
                    <div className="flex gap-2">
                      {option.quickAmounts.map((amount, amountIndex) => (
                        <Button
                          key={amountIndex}
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          {amount}
                        </Button>
                      ))}
                    </div>
                  )}

                  {option.benefits && (
                    <div className="text-xs text-muted-foreground text-left">
                      {option.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex}>{benefit}</div>
                      ))}
                    </div>
                  )}

                  {option.socialButtons && (
                    <div className="flex gap-2">
                      {option.socialButtons.map((social, socialIndex) => (
                        <Button
                          key={socialIndex}
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          <Icon name={social.icon as any} size={14} />
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
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
                  <span className="font-mono">
                    {goalProgress.current.toLocaleString()}₽ /{" "}
                    {goalProgress.target.toLocaleString()}₽
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="bg-primary h-3 rounded-full transition-all duration-300"
                    style={{ width: `${goalProgress.percentage}%` }}
                  ></div>
                </div>
                <div className="text-xs text-muted-foreground">
                  {goalProgress.percentage}% от цели достигнуто
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
  );
};

export default Support;
