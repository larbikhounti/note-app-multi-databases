## laravel Sail 
note app separated  by databases aka (multi-tenancy)

[x] : create company
[x] : auto seed users
[x] : user login
[x] : note update / delete / create / fetch 

## installation 

### starting backend server and database 

1 - navigate to the project directory and run  (assuming you already have composer installed)
```bash
composer install;
```

2 - run docker (in the same project directory)

```bash
./vendor/bin/sail up -d --build
```
### starting the front end 
3 -  starting nextjs (aka reactjs)

```bash
cd frontend
npm install
npm run dev
```

### to use laravel.test hostname 
1 - open  the hosts file and add 
```bash 
nano /etc/hosts
```
2 - add the following line
```bash 
127.0.0.1 laravel.test
```

## giving docker permissions
```bash
sudo chown -R $(whoami) {your-app-directory}/note-app-Illizeo/frontend/app 
```

## TO START THE SERVICES RUN 
```bash
./vendor/bin/sail up -d --build
```

## grand databases privileges to sail user 
To allow the `sail` user to perform create, read, update, and delete operations in all tenant databases, grant the necessary privileges by running the following SQL statements:

1 :
```bash
docker compose exec mysql bash
```

2 :
```bash
mysql -u root -p
```

3 :
```sql
GRANT ALL PRIVILEGES ON *.* TO 'sail'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

## what have to be done in the future

[] - user register
[] - stoping users from navigating to random subdomains in the front end 
[] - add more typing 
[] - adding the front end to docker 
[] - better error messages
[] - better error alerts