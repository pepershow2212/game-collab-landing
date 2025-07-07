import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
