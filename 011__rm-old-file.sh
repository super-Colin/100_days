# 12/21/19
# Learning Bash

set -x

# MOUNT THE FOLDER
cd /var/www/html/wp-content/themes


# # RENAME OLD VERSION
# FILE=/var/www/html/wp-content/themes/supercolin-theme
# if [ -e "$FILE" ]; then
#     mv $FILE /var/www/html/wp-content/themes/supercolin__old
# fi

# ls -l


# # DELETE OLD VERSION
# # FILE = /var/www/html/wp-content/themes/supercolin__old
# if [ -e "$FILE" ]; then
#     rm -rf $FILE
# else
#     echo "the old FILE var wasn't findable"
#     FILE_NEW = ./supercolin__old
#     rm -rf $FILE_NEW
# fi

# RENAME OLD VERSION
FILE=/var/www/html/wp-content/themes/supercolin-theme
if [ -e "$FILE" ]; then
    rm -rf $FILE
fi
