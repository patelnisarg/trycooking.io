cd food-back-end
npm update
chmod 777 start-server.sh
./start-server.sh

cd ..
cd build

npm update
nohup node serve.js>log &

exit
