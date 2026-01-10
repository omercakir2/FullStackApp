FROM node:20-slim

WORKDIR /app

# Sadece package.json'ı kopyalayıp install yapıyoruz (hız için)
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# Vite'ı dışarıya açmak için host ayarı şart
CMD ["npm", "run", "dev", "--", "--host"]