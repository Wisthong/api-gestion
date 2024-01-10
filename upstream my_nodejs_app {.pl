upstream my_nodejs_app {
    server 127.0.0.1:3001;
    keepalive 64;
}

upstream my_nodejs_inventario {
    server 127.0.0.1:3002;
    keepalive 64;
}

upstream my_nodejs_clientesupdate {
    server 127.0.0.1:3003;
    keepalive 64;
}

server {
        
        server_name apiv1.distribuidorauniversalcali.com;
        
        location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
    	proxy_set_header Host $http_host;

    	proxy_http_version 1.1;
    	proxy_set_header Upgrade $http_upgrade;
    	proxy_set_header Connection "upgrade";

        proxy_pass http://my_nodejs_app/;
    	proxy_redirect off;
    	proxy_read_timeout 240s;

        }

        location /inventario/ {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
    	proxy_set_header Host $http_host;

    	proxy_http_version 1.1;
    	proxy_set_header Upgrade $http_upgrade;
    	proxy_set_header Connection "upgrade";

        proxy_pass http://my_nodejs_inventario/;
    	proxy_redirect off;
    	proxy_read_timeout 240s;

        }
        location /clientes/ {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
    	proxy_set_header Host $http_host;

    	proxy_http_version 1.1;
    	proxy_set_header Upgrade $http_upgrade;
    	proxy_set_header Connection "upgrade";

        proxy_pass http://my_nodejs_clientesupdate/;
    	proxy_redirect off;
    	proxy_read_timeout 240s;

        }
}




server_name apiv1.distribuidorauniversalcali.com;
sudo certbot --nginx -d apiv1.distribuidorauniversalcali.com