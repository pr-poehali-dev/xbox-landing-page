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

  const plans = [
    {
      duration: "1 месяц",
      originalPrice: "1990 ₽",
      price: "990 ₽",
      discount: "-50%",
      popular: false
    },
    {
      duration: "3 месяца",
      originalPrice: "5970 ₽",
      price: "2490 ₽",
      discount: "-58%",
      popular: true
    },
    {
      duration: "12 месяцев",
      originalPrice: "23880 ₽",
      price: "7990 ₽",
      discount: "-67%",
      popular: false
    }
  ];

  const steps = [
    {
      icon: "Target",
      title: "Выбираете срок",
      description: "1, 3 или 12 месяцев"
    },
    {
      icon: "MessageCircle",
      title: "Переходите в Telegram",
      description: "К нашему боту за 1 клик"
    },
    {
      icon: "Zap",
      title: "Получаете подписку",
      description: "Активация за 5-15 минут"
    }
  ];

  const reviews = [
    {
      name: "Дмитрий К.",
      avatar: "ДК",
      rating: 5,
      text: "Супер быстро! Уже третий месяц покупаю, всё работает отлично 🔥",
      verified: true
    },
    {
      name: "Анна М.",
      avatar: "АМ",
      rating: 5,
      text: "Дешевле чем в Microsoft Store в 2 раза! Сыну подарила на день рождения ⭐",
      verified: true
    },
    {
      name: "Максим В.",
      avatar: "МВ",
      rating: 5,
      text: "Заказал в 2 ночи, через 10 минут уже играл в Forza! Рекомендую 👍",
      verified: true
    },
    {
      name: "Елена С.",
      avatar: "ЕС",
      rating: 5,
      text: "Отличная поддержка, помогли разобраться с активацией 💜",
      verified: true
    }
  ];

  const guarantees = [
    {
      icon: "Calendar",
      title: "Работаем с 2022 года",
      description: "Проверенная временем надёжность"
    },
    {
      icon: "Users",
      title: "15 000+ продаж",
      description: "Тысячи довольных клиентов"
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Всегда поможем и ответим"
    },
    {
      icon: "Shield",
      title: "Возврат без вопросов",
      description: "100% гарантия при проблемах"
    }
  ];

  const faqItems = [
    {
      question: "Это безопасно? 🔒",
      answer: "Да! Мы используем только официальные методы активации. Никаких взломов или левых аккаунтов. Работаем легально уже 3 года."
    },
    {
      question: "Можно продлить на мой аккаунт? 🔄",
      answer: "Конечно! Мы активируем подписку именно на ваш существующий аккаунт Xbox. Все ваши игры и прогресс сохранятся."
    },
    {
      question: "Когда будет активация? ⏰",
      answer: "Активация происходит в течение 5-15 минут после оплаты. В редких случаях может потребоваться до 1 часа."
    },
    {
      question: "Работает ли в России? 🇷🇺",
      answer: "Да, полностью работает! Мы поможем с настройкой и предоставим подробную инструкцию для активации в вашем регионе."
    },
    {
      question: "Что если не получится активировать? 🤔",
      answer: "Если возникнут проблемы - мы полностью вернём деньги или поможем решить вопрос. У нас есть техподдержка 24/7."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-xbox-dark via-background to-primary/10 py-16 px-4">
        {/* Xbox Gaming Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl text-primary rotate-12 animate-pulse">
            <Icon name="Gamepad2" size={80} />
          </div>
          <div className="absolute top-32 right-20 text-4xl text-primary/60 -rotate-12">
            <Icon name="Trophy" size={60} />
          </div>
          <div className="absolute bottom-20 left-32 text-5xl text-primary/40 rotate-45">
            <Icon name="Zap" size={70} />
          </div>
          <div className="absolute bottom-32 right-10 text-4xl text-primary rotate-12">
            <Icon name="Gamepad2" size={65} />
          </div>
          <div className="absolute top-1/2 left-1/4 text-3xl text-primary/30 -rotate-45">
            <Icon name="Headphones" size={50} />
          </div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-primary text-primary-foreground px-4 py-2 text-sm font-bold animate-bounce">
            🔥 СКИДКА ДО 67%
          </Badge>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="text-primary">Xbox Game Pass Ultimate</span>
            <br />
            подписка со скидкой до 50%
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            500+ игр для Xbox и ПК. Подходит для России. Поддержка 24/7.
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-8 py-4 rounded-full font-bold transition-all hover:scale-105 animate-pulse mb-6"
            onClick={handleTelegramClick}
          >
            <Icon name="MessageCircle" size={24} className="mr-3" />
            Получить в Telegram
          </Button>
          
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center bg-card px-3 py-1 rounded-full">
              <Icon name="Users" size={14} className="mr-1 text-primary" />
              10 000+ клиентов
            </div>
            <div className="flex items-center bg-card px-3 py-1 rounded-full">
              <Icon name="Star" size={14} className="mr-1 text-yellow-500" />
              4.9 ★ рейтинг
            </div>
            <div className="flex items-center bg-card px-3 py-1 rounded-full">
              <Icon name="Shield" size={14} className="mr-1 text-primary" />
              Гарантия возврата
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            📦 Выберите тариф
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative p-6 text-center transition-all hover:scale-105 ${plan.popular ? 'border-2 border-primary bg-primary/5' : 'bg-card hover:border-primary'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    🔥 ПОПУЛЯРНЫЙ
                  </Badge>
                )}
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-2">{plan.duration}</h3>
                  <div className="mb-4">
                    <div className="text-sm text-muted-foreground line-through">{plan.originalPrice}</div>
                    <div className="text-3xl font-bold text-primary">{plan.price}</div>
                    <Badge variant="outline" className="mt-1">{plan.discount}</Badge>
                  </div>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={handleTelegramClick}
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            ⚡ Как это работает
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                  <Icon name={step.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            💬 Отзывы клиентов
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-4 bg-card border hover:border-primary transition-all">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3 mb-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary text-primary-foreground font-bold text-sm">
                        {review.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-sm">{review.name}</h4>
                        {review.verified && (
                          <Badge variant="outline" className="text-xs">
                            <Icon name="CheckCircle" size={10} className="mr-1" />
                            ✓
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={12} className="text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-small text-muted-foreground">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            🔐 Гарантии и поддержка
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center p-4 bg-card rounded-lg hover:bg-primary/5 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={guarantee.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2 text-sm">{guarantee.title}</h3>
                <p className="text-muted-foreground text-xs">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            ❓ Частые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg bg-card">
                <AccordionTrigger className="px-4 py-3 text-left font-semibold hover:no-underline hover:bg-secondary/20 text-sm">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 text-muted-foreground text-sm">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/20 to-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-card rounded-lg p-6 border-2 border-primary animate-pulse">
            <Badge className="mb-4 bg-primary text-primary-foreground px-3 py-1">
              🎁 БОНУС
            </Badge>
            <h2 className="text-xl font-bold mb-4">
              Дарим скидку на следующую покупку!
            </h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Оформите подписку в течение часа и получите промокод на 10% скидку для следующего продления
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-bold transition-all hover:scale-105"
              onClick={handleTelegramClick}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить бонус в Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-xbox-dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            🚀 Готов начать играть?
          </h2>
          <p className="text-muted-foreground mb-8">
            Получи доступ к 500+ играм уже сегодня со скидкой до 67%!
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-8 py-4 rounded-full font-bold transition-all hover:scale-105 mb-6"
            onClick={handleTelegramClick}
          >
            <Icon name="MessageCircle" size={24} className="mr-3" />
            Заказать в Telegram
          </Button>
          
          <div className="flex justify-center items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center">
              <Icon name="Clock" size={14} className="mr-1 text-primary" />
              Активация за 5-15 мин
            </div>
            <div className="flex items-center">
              <Icon name="Shield" size={14} className="mr-1 text-primary" />
              Гарантия возврата
            </div>
            <div className="flex items-center">
              <Icon name="Headphones" size={14} className="mr-1 text-primary" />
              Поддержка 24/7
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-xbox-dark border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-xs text-muted-foreground">
          <p>© 2025 Xbox Game Pass Подписки. Не является официальным магазином Microsoft.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;