import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ServerData {
  id: string;
  name: string;
  game: "Arma Reforger" | "Squad";
  players: number;
  maxPlayers: number;
  status: "online" | "offline";
  map: string;
  ping: number;
  battlemetricsId?: string;
}

const ServerMonitor = () => {
  const [servers, setServers] = useState<ServerData[]>([
    {
      id: "1",
      name: "ARMA × SQUAD | Official Server",
      game: "Arma Reforger",
      players: 24,
      maxPlayers: 64,
      status: "online",
      map: "Everon",
      ping: 45,
      battlemetricsId: "12345",
    },
    {
      id: "2",
      name: "ARMA × SQUAD | Squad RU #1",
      game: "Squad",
      players: 78,
      maxPlayers: 80,
      status: "online",
      map: "Al Basrah",
      ping: 32,
      battlemetricsId: "67890",
    },
    {
      id: "3",
      name: "ARMA × SQUAD | Squad RU #2",
      game: "Squad",
      players: 45,
      maxPlayers: 80,
      status: "online",
      map: "Yehorivka",
      ping: 28,
      battlemetricsId: "54321",
    },
    {
      id: "4",
      name: "ARMA × SQUAD | Squad RU #3",
      game: "Squad",
      players: 12,
      maxPlayers: 80,
      status: "online",
      map: "Sumari",
      ping: 35,
      battlemetricsId: "98765",
    },
  ]);

  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setServers((prev) =>
        prev.map((server) => ({
          ...server,
          players: Math.max(
            0,
            server.players + Math.floor(Math.random() * 6) - 3,
          ),
          ping: server.ping + Math.floor(Math.random() * 10) - 5,
        })),
      );
      setLastUpdate(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    return status === "online" ? "text-primary" : "text-destructive";
  };

  const getPlayersFillPercentage = (players: number, maxPlayers: number) => {
    return Math.min((players / maxPlayers) * 100, 100);
  };

  const totalPlayers = servers.reduce((sum, server) => sum + server.players, 0);
  const totalMaxPlayers = servers.reduce(
    (sum, server) => sum + server.maxPlayers,
    0,
  );

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-rajdhani mb-4 glow-text">
            Мониторинг серверов
          </h2>
          <p className="text-lg text-muted-foreground">
            Онлайн статистика наших игровых серверов
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              Всего игроков: {totalPlayers}/{totalMaxPlayers}
            </Badge>
            <Badge variant="outline" className="text-xs">
              Обновлено: {lastUpdate.toLocaleTimeString()}
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servers.map((server) => (
            <Card
              key={server.id}
              className="bg-card border-border hover:bg-card/80 transition-colors"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge
                    variant={
                      server.game === "Arma Reforger" ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {server.game}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${server.status === "online" ? "bg-primary" : "bg-destructive"}`}
                    ></div>
                    <span
                      className={`text-xs font-medium ${getStatusColor(server.status)}`}
                    >
                      {server.status === "online" ? "ONLINE" : "OFFLINE"}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-sm font-semibold font-rajdhani leading-tight">
                  {server.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Игроки</span>
                    <span className="font-mono font-medium">
                      {server.players}/{server.maxPlayers}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${getPlayersFillPercentage(server.players, server.maxPlayers)}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Карта</span>
                  <span className="font-medium">{server.map}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Пинг</span>
                  <span className="font-mono font-medium">{server.ping}ms</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    className="flex-1"
                    disabled={server.status === "offline"}
                  >
                    <Icon name="Play" size={14} className="mr-1" />
                    Играть
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      window.open(
                        `https://battlemetrics.com/servers/${server.battlemetricsId}`,
                        "_blank",
                      )
                    }
                  >
                    <Icon name="ExternalLink" size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Users"
                  className="text-primary mx-auto mb-2"
                  size={24}
                />
                <div className="text-2xl font-bold font-rajdhani">
                  {totalPlayers}
                </div>
                <div className="text-sm text-muted-foreground">
                  Игроков онлайн
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Server"
                  className="text-primary mx-auto mb-2"
                  size={24}
                />
                <div className="text-2xl font-bold font-rajdhani">
                  {servers.filter((s) => s.status === "online").length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Серверов онлайн
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Activity"
                  className="text-primary mx-auto mb-2"
                  size={24}
                />
                <div className="text-2xl font-bold font-rajdhani">
                  {Math.round((totalPlayers / totalMaxPlayers) * 100)}%
                </div>
                <div className="text-sm text-muted-foreground">
                  Загрузка серверов
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => window.open("https://battlemetrics.com", "_blank")}
              className="flex items-center gap-2"
            >
              <Icon name="BarChart3" size={16} />
              Открыть BattleMetrics
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                // Simulate refresh
                setLastUpdate(new Date());
              }}
              className="flex items-center gap-2"
            >
              <Icon name="RefreshCw" size={16} />
              Обновить данные
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerMonitor;
