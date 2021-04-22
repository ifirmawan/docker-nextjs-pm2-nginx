# base on official NGINX Alpine image
FROM nginx:alpine

#remove any existing config files
RUN rm /etc/nginx/conf.d/*

#copy config files
COPY ./default.conf /etc/nginx/conf.d/

# expose the listening port
EXPOSE 80

# Launching nginx
CMD [ "nginx", "-g", "daemon off;"]