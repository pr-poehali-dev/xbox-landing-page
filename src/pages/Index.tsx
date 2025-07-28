import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from '@/components/ui/icon';

const Index = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/xbox_game_pass_bot', '_blank');
  };

  const benefits = [
    {
      icon: "Gamepad2",
      title: "500+ игр",
      description: "Огромная библиотека игр на Xbox и ПК"
    },
    {
      icon: "Ruble",
      title: "От 990 ₽",
      description: "Цена в месяц, дешевле чем в Microsoft Store"
    },
    {
      icon: "Shield",
      title: "Безопасно",
      description: "Помощь в активации и поддержка 24/7"
    },
    {
      icon: "Zap",
      title: "Моментально",
      description: "Активация подписки за несколько минут"
    }
  ];

  const reviews = [
    {
      name: "Алексей М.",
      avatar: "AM",
      rating: 5,
      text: "Купил подписку, всё активировалось моментально! Отличная поддержка, всё объяснили пошагово.",
      verified: true
    },
    {
      name: "Дмитрий К.",
      avatar: "ДК",
      rating: 5,
      text: "Намного дешевле официального магазина. Уже третий месяц пользуюсь, никаких проблем!",
      verified: true
    },
    {
      name: "Максим В.",
      avatar: "МВ",
      rating: 5,
      text: "Супер быстро! Заказал в 2 ночи, через 10 минут уже играл в Forza Horizon 5. Рекомендую!",
      verified: true
    },
    {
      name: "Анна С.",
      avatar: "АС",
      rating: 5,
      text: "Покупала для сына на день рождения. Менеджер всё объяснил, помог с активацией. Сын в восторге!",
      verified: true
    }
  ];

  const faqItems = [
    {
      question: "Это безопасно?",
      answer: "Да, абсолютно безопасно. Мы используем только официальные методы активации Xbox Game Pass Ultimate. Никаких взломанных аккаунтов или сомнительных схем."
    },
    {
      question: "Как быстро активируется подписка?",
      answer: "Обычно активация занимает 5-15 минут после оплаты. В редких случаях может потребоваться до 1 часа. Мы работаем круглосуточно для вашего удобства."
    },
    {
      question: "Работает ли в России?",
      answer: "Да, подписка полностью работает в России. Мы поможем с настройкой и активацией, предоставим подробную инструкцию для вашего региона."
    },
    {
      question: "Что если не получится активировать?",
      answer: "Если возникнут проблемы с активацией, мы полностью вернём деньги или поможем решить проблему. У нас есть техническая поддержка 24/7."
    },
    {
      question: "Можно ли продлить подписку?",
      answer: "Конечно! Вы можете продлевать подписку каждый месяц по той же выгодной цене. Мы напомним вам о необходимости продления заранее."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-xbox-dark via-background to-xbox-dark py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-primary/5 to-transparent"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-primary text-primary-foreground px-4 py-2 text-lg font-semibold">
            <Icon name="Gamepad2" size={20} className="mr-2" />
            Экономь до 60% на подписке!
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Подписка{" "}
            <span className="text-primary">Xbox Game Pass Ultimate</span>
            <br />
            дешевле, чем в Microsoft Store!
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Моментальная активация. Безопасно. Работает в России.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-8 py-6 rounded-lg font-semibold transition-all hover:scale-105"
              onClick={handleTelegramClick}
            >
              <Icon name="MessageCircle" size={24} className="mr-3" />
              Получить сейчас в Telegram
            </Button>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <Icon name="Clock" size={16} className="mr-2 text-primary" />
              Активация за 5-15 минут
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <Icon name="Check" size={16} className="mr-2 text-primary" />
              500+ игр включено
            </div>
            <div className="flex items-center">
              <Icon name="Check" size={16} className="mr-2 text-primary" />
              Xbox и ПК поддержка
            </div>
            <div className="flex items-center">
              <Icon name="Check" size={16} className="mr-2 text-primary" />
              Безопасная покупка
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Почему выбирают нас?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:scale-105 transition-all border-2 hover:border-primary bg-card">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Отзывы наших клиентов
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 bg-card border-2 hover:border-primary transition-all">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {review.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{review.name}</h4>
                        {review.verified && (
                          <Badge variant="outline" className="text-xs">
                            <Icon name="CheckCircle" size={12} className="mr-1" />
                            Проверено
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Частые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline hover:bg-secondary/50">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionContent>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-xbox-dark to-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готов начать играть?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Получи доступ к 500+ играм уже сегодня!
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-8 py-6 rounded-lg font-semibold transition-all hover:scale-105"
            onClick={handleTelegramClick}
          >
            <Icon name="MessageCircle" size={24} className="mr-3" />
            Заказать в Telegram
          </Button>
          
          <div className="mt-6 flex justify-center items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Icon name="Shield" size={16} className="mr-2 text-primary" />
              Гарантия возврата
            </div>
            <div className="flex items-center">
              <Icon name="Headphones" size={16} className="mr-2 text-primary" />
              Поддержка 24/7
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-xbox-dark border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Xbox Game Pass Подписки. Не является официальным магазином Microsoft.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;