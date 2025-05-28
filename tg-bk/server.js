const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const TELEGRAM_TOKEN = '7692523461:AAE4ngt6Tl97Q1GhODWv822YaX0hF01Qjpo';
const CHAT_ID = '697313070';

app.use(cors({
  origin: '*', // или указать конкретный домен, например: 'https://yourdomain.com'
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Роут для отправки обычных сообщений (отзывов)
app.post('/send-message', async (req, res) => {
  const { name, email, phone, comment } = req.body;

  // Валидация можно добавить, если надо

  const message = `
📩 <b>Новое сообщение с формы обратной связи:</b>

👤 Имя: ${name}
📧 Email: ${email}
📞 Телефон: ${phone}
💬 Комментарий: ${comment}
  `;

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'HTML',
    });

    res.json({ status: 'ok' });
  } catch (error) {
    console.error("Ошибка при отправке сообщения в Telegram:", error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// Роут для отправки брони столов
app.post('/send-reservation', async (req, res) => {
  const { name, phone, tableId, startTime, endTime } = req.body;

  // Здесь можно попытаться красиво отформатировать дату и время
  // Если startTime и endTime — ISO строки, например:
  const formatDateTime = (dateTimeStr) => {
    try {
      const date = new Date(dateTimeStr);
      return date.toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return dateTimeStr; // если не удалось распарсить — просто вернуть строку
    }
  };

  const formattedStart = formatDateTime(startTime);
  const formattedEnd = formatDateTime(endTime);

  const message = `
🪑 <b>Новая бронь столика:</b>

👤 ФИО: ${name}
📞 Телефон: ${phone}
🪑 Стол №: ${tableId}
⏰ Время: с ${formattedStart} до ${formattedEnd}
  `;

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'HTML',
    });

    res.json({ status: 'ok' });
  } catch (error) {
    console.error("Ошибка при отправке брони в Telegram:", error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
