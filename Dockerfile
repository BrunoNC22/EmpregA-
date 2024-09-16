# builder
FROM node:20-alpine as builder

WORKDIR /app

COPY . ./

RUN npm install && npm run build

# serving container
FROM nginx:1.23.3-alpine

WORKDIR /etc/nginx

COPY --from=builder /app/default.conf ./conf.d

COPY --from=builder /app/dist /usr/share/nginx/html

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]