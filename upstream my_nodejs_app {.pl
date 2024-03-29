upstream my_nodejs_app {
    server 127.0.0.1:3002;
    keepalive 64;
}

server {
    # listen 443 ssl;
    
    server_name www.apiv1clientes.distribuidorauniversalcali.com apiv1clientes.distribuidorauniversalcali.com;
    # ssl_certificate_key /etc/ssl/main.key;
    # ssl_certificate     /etc/ssl/main.crt;
   
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
}

sudo certbot --nginx -d apiv1clientes.distribuidorauniversalcali.com -d www.apiv1clientes.distribuidorauniversalcali.com