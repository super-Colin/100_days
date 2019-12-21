# 12/21/19
# Learning Bash

# MOUNT THE FOLDER
cd /var/www/html/wp-content/themes

# DELETE OLD VERSION
FILE=/var/www/html/wp-content/themes/supercolin-theme
if [ -e "$FILE" ]; then
    rm -rf $FILE
fi


# CLONE REPO
sudo git clone https://github.com/super-Colin/supercolin-theme.git


# WILL ASK FOR GIT USER AND PASS HERE

# GIT USER
# GIT PASS


