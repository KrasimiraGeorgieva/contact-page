## Contact page application

This application  store inquiries in a database and send email notification.

## Project Setup

### Manual steps

1. Clone or download project from ```git@github.com:KrasimiraGeorgieva/contact-page.git```
2. Go into the root directory of the project
3. Run ```composer install``` command
4. Open .env file and update configuration values for DB_* and Mail_* 
5. Run ```php artisan migrate``` command
6. Run ```npm install``` command
7. Run ```npm run watch``` command
8. Make sure you’ve started your MySQL server (either from XAMPP or standalone)
9. Go to ```/contact``` page
10. Done!

## Build technologies

#### PHP 8.1.6

- **Laravel 9**
- **MySQL** 
- **Vue 3**
- **Tailwind CSS**
