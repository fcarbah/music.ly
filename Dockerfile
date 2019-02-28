From node:alpine as Builder
Workdir '/app'
Copy ./package.json ./
Run npm install -g @angular/cli
Run npm install
Copy . .
Run ng build --prod

From nginx
Expose 3000
Copy ./nginx.conf /etc/nginx/conf.d/default.conf
Workdir '/usr/share/nginx/html'
Copy --from=builder /app/dist/music-app /usr/share/nginx/html

