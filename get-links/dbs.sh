 echo "var links=[" > $1
for i in {1..109}
do
    # echo http://ww3.dragonballsuperdub.com/dragon-ball-super-episode-${i}-funimation-english-dubbed/
    echo http://ww6.watchdbzsuper.tv/dragon-ball-super-episode-${i}-funimation-english-dubbed/
    phantomjs index.js http://ww6.watchdbzsuper.tv/dragon-ball-super-episode-${i}-funimation-english-dubbed/
    links=$(node parse.js)
    echo "{'cap':$i,'links':$links}," >> $1
done
echo "]" >> $1

cp $1 ../dbs/links.js