# 12/21/19
# Learning Bash

# MOUNT THE THEMES FOLDER
cd /var/www/html/wp-content/themes

# DELETE OLD VERSION
FILE=/var/www/html/wp-content/themes/git_repo-theme
if [ -e "$FILE" ]; then
    rm -rf $FILE
fi


# CLONE REPO
sudo git clone https://github.com/super-Colin/git_repo-theme.git


# WILL ASK FOR GIT USER AND PASS HERE

# GIT USER
# GIT PASS


