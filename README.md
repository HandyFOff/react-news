# HandyF News

Небольшое новостное веб-приложение на React. Показывает последние новости и позволяет искать материалы по ключевым словам и категориям.

**[Демо](https://handyf-react-news.vercel.app/) · [Исходный код](https://github.com/HandyFOff/react-news)**

## Возможности

- Просмотр последних новостей и общего списка публикаций
- Поиск новостей по ключевым словам
- Фильтрация по категориям
- Пагинация
- Светлая и тёмная темы
- Состояния загрузки и обработка ошибок запроса

## Технологии

React, TypeScript, Vite, Redux Toolkit (RTK Query), Sass.

## Запуск проекта

1. Клонируйте репозиторий и перейдите в папку проекта:

   ```bash
   git clone https://github.com/HandyFOff/react-news.git
   cd react-news
   ```

2. Установите зависимости:

   ```bash
   npm install
   ```

3. Создайте файл `.env` в корне проекта и укажите параметры API:

   ```env
   VITE_NEWS_API_URL=<адрес_API>
   VITE_NEWS_API_KEY=<ваш_API_ключ>
   ```

4. Запустите сервер разработки:

   ```bash
   npm run dev
   ```

## Другие команды

```bash
npm run build   # Проверка TypeScript и production-сборка
npm run preview # Просмотр production-сборки локально
npm run lint    # Проверка кода ESLint
```