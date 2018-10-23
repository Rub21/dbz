 echo "var links=[" > links.js
for i in {158..291}
do
    echo http://ww6.watchdbzsuper.tv/dragon-ball-z-episode-${i}-english-dubbed/
    phantomjs index.js http://ww6.watchdbzsuper.tv/dragon-ball-z-episode-${i}-english-dubbed/
    links=$(node parse.js)
    echo "{'cap':$i,'links':$links}," >> links.js
done
echo "]" >> links.js