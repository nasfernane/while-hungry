FROM node:17

# Maintainer
LABEL maintainer="While Hungry <nasfernane@gmail.com>"

RUN apt-get update && apt-get install -y nginx supervisor

# Override Nginx's default config
RUN mkdir -p /run/nginx
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

COPY supervisord.conf /etc/supervisord.conf

# Copy all the required files
WORKDIR /usr/src/app
COPY . /usr/src/app/

EXPOSE 80 3000 9001

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]


