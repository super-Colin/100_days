# 1/3/2020
# Bash

# https://www.tecmint.com/add-users-in-linux/
# https://www.networkworld.com/article/3409781/mastering-user-groups-on-linux.html



echo 'Enter a name for the new user'
read user_name

useradd $user_name
usermod -a -G devops $user_name

echo 'Enter a password for the new user'
passwd $user_name

