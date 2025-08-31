## laravel Sail 


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