import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
}

const Index = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showAuthor, setShowAuthor] = useState(false);

  const articles: Article[] = [
    {
      id: 1,
      title: 'Искусство минимализма в современном дизайне',
      excerpt: 'Как меньше становится больше: исследуем философию минимализма и его влияние на цифровое пространство.',
      category: 'Дизайн',
      readTime: '5 мин',
      image: 'https://cdn.poehali.dev/projects/ca644e25-801c-46d7-a078-2fbbd0b36183/files/1efbb56b-abc3-47c2-8163-9f5fcc9563d9.jpg',
      date: '15 ноября 2024'
    },
    {
      id: 2,
      title: 'Творческий процесс: от идеи до воплощения',
      excerpt: 'Разбираем этапы создания креативного контента и делимся инсайтами из личного опыта.',
      category: 'Творчество',
      readTime: '7 мин',
      image: 'https://cdn.poehali.dev/projects/ca644e25-801c-46d7-a078-2fbbd0b36183/files/87dd7046-e497-42ca-9aa3-b75e606f1630.jpg',
      date: '10 ноября 2024'
    },
    {
      id: 3,
      title: 'Вдохновение в каждом дне: практики для креативности',
      excerpt: 'Простые упражнения и техники для развития творческого мышления в повседневной жизни.',
      category: 'Практики',
      readTime: '6 мин',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
      date: '5 ноября 2024'
    }
  ];

  const shareArticle = (platform: string, article: Article) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article.title);
    
    const urls: Record<string, string> = {
      vk: `https://vk.com/share.php?url=${url}&title=${text}`,
      telegram: `https://t.me/share/url?url=${url}&text=${text}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`
    };
    
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  if (showAuthor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
        <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Арбузный слон
            </h1>
            <div className="flex gap-4">
              <Button variant="ghost" onClick={() => setShowAuthor(false)}>
                Блог
              </Button>
              <Button variant="ghost" className="font-semibold">
                О авторе
              </Button>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
              <div>
                <img
                  src="https://cdn.poehali.dev/projects/ca644e25-801c-46d7-a078-2fbbd0b36183/files/fd68abe4-24f9-41b3-9f13-2a4989c6e9dd.jpg"
                  alt="Автор блога"
                  className="rounded-3xl shadow-2xl w-full aspect-square object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-5xl font-bold leading-tight">
                  Привет! Я автор этого блога 👋
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Создаю контент на стыке дизайна, технологий и творчества. Верю в силу минимализма 
                  и красоту простых решений.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  В своих статьях делюсь опытом, инсайтами и наблюдениями о том, как создавать 
                  осмысленный и вдохновляющий контент в современном цифровом мире.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button size="lg" className="rounded-full">
                    <Icon name="Mail" className="mr-2" size={18} />
                    Написать мне
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full">
                    <Icon name="Download" className="mr-2" size={18} />
                    Скачать портфолио
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8 border-2 hover:border-primary transition-all hover:shadow-lg">
                <div className="text-4xl mb-4">✍️</div>
                <h3 className="font-bold text-xl mb-2">50+ статей</h3>
                <p className="text-muted-foreground">Опубликовано за последний год</p>
              </Card>
              <Card className="text-center p-8 border-2 hover:border-secondary transition-all hover:shadow-lg">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-bold text-xl mb-2">15+ проектов</h3>
                <p className="text-muted-foreground">Креативных коллабораций</p>
              </Card>
              <Card className="text-center p-8 border-2 hover:border-accent transition-all hover:shadow-lg">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="font-bold text-xl mb-2">5 стран</h3>
                <p className="text-muted-foreground">Где работал удаленно</p>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
        <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 
              className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent cursor-pointer"
              onClick={() => setSelectedArticle(null)}
            >
              Арбузный слон
            </h1>
            <div className="flex gap-4">
              <Button variant="ghost" onClick={() => setSelectedArticle(null)}>
                Блог
              </Button>
              <Button variant="ghost" onClick={() => setShowAuthor(true)}>
                О авторе
              </Button>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedArticle(null)}
              className="mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <Icon name="ArrowLeft" className="mr-2" size={18} />
              Назад к статьям
            </Button>

            <article className="animate-fade-in">
              <Badge className="mb-4 text-base px-4 py-1 bg-primary text-primary-foreground">
                {selectedArticle.category}
              </Badge>
              
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                {selectedArticle.title}
              </h1>

              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <Icon name="Calendar" size={18} />
                  {selectedArticle.date}
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Clock" size={18} />
                  {selectedArticle.readTime}
                </span>
              </div>

              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-[400px] object-cover rounded-3xl mb-12 shadow-xl"
              />

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl leading-relaxed text-muted-foreground mb-6">
                  {selectedArticle.excerpt}
                </p>
                
                <p className="leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Основные принципы</h2>
                
                <p className="leading-relaxed mb-6">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.
                </p>

                <p className="leading-relaxed mb-6">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                  dicta sunt explicabo.
                </p>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-xl font-bold mb-4">Поделиться статьей</h3>
                <div className="flex gap-3">
                  <Button
                    size="lg"
                    className="flex-1 rounded-full bg-[#0077FF] hover:bg-[#0066DD]"
                    onClick={() => shareArticle('vk', selectedArticle)}
                  >
                    <Icon name="Share2" className="mr-2" size={18} />
                    ВКонтакте
                  </Button>
                  <Button
                    size="lg"
                    className="flex-1 rounded-full bg-[#0088CC] hover:bg-[#0077BB]"
                    onClick={() => shareArticle('telegram', selectedArticle)}
                  >
                    <Icon name="Send" className="mr-2" size={18} />
                    Telegram
                  </Button>
                  <Button
                    size="lg"
                    className="flex-1 rounded-full bg-[#1DA1F2] hover:bg-[#1A8CD8]"
                    onClick={() => shareArticle('twitter', selectedArticle)}
                  >
                    <Icon name="Twitter" className="mr-2" size={18} />
                    Twitter
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Арбузный слон
          </h1>
          <div className="flex gap-4">
            <Button variant="ghost" className="font-semibold">
              Блог
            </Button>
            <Button variant="ghost" onClick={() => setShowAuthor(true)}>
              О авторе
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-6xl font-bold mb-6 leading-tight">
              Креативный блог о дизайне,
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                творчестве и вдохновении
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Исследуем границы креативности и делимся опытом создания осмысленного контента
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card
                key={article.id}
                className="group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedArticle(article)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-foreground backdrop-blur-sm">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      {article.date}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full rounded-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary"
                  >
                    Читать статью
                    <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t mt-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Арбузный слон
            </h3>
            <p className="text-muted-foreground mb-6">
              Креативный блог о дизайне и вдохновении
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
