# Usa a imagem oficial do PHP com FPM
FROM php:8.2-fpm

# Instala dependências do sistema
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    libpq-dev \
    libzip-dev \
    libonig-dev \
    libxml2-dev \
    libcurl4-openssl-dev \
    libjpeg-dev \
    libpng-dev \
    libwebp-dev \
    libfreetype6-dev \
    libicu-dev \
    libxslt1-dev \
    libssl-dev \
    curl \
    && docker-php-ext-configure zip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-install -j$(nproc) \
        pdo_pgsql \
        pgsql \
        zip \
        mbstring \
        intl \
        xsl \
        curl \
        xml \
        gd \
        opcache \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Instala Composer globalmente
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Define diretório de trabalho
WORKDIR /var/www/html

# Permite configuração do PHP via ini personalizado (opcional)
#COPY ./php.ini /usr/local/etc/php/conf.d/custom.ini

# Expõe a porta padrão do PHP-FPM
EXPOSE 9000

# Comando padrão
CMD ["php-fpm"]